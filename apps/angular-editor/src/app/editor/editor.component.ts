import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-editor',
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Collaborative Editor</h2>
      <form [formGroup]="editorForm" class="mb-4">
        <textarea
          formControlName="content"
          class="w-full h-64 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Start typing here..."
          (input)="onContentChange()"
        ></textarea>
      </form>
      <div class="text-sm text-gray-600">
        Connection status: {{ connectionStatus }}
      </div>
    </div>
  `,
})
export class EditorComponent implements OnInit, OnDestroy {
  editorForm: FormGroup;
  private socket!: Socket;
  connectionStatus: string = 'Disconnected';

  constructor(private fb: FormBuilder) {
    this.editorForm = this.fb.group({
      content: ['']
    });
  }

  ngOnInit() {
    this.socket = io('http://localhost:3000');

    this.socket.on('connect', () => {
      this.connectionStatus = 'Connected';
    });

    this.socket.on('disconnect', () => {
      this.connectionStatus = 'Disconnected';
    });

    this.socket.on('contentUpdate', (content: string) => {
      this.editorForm.patchValue({ content }, { emitEvent: false });
    });
  }

  ngOnDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  onContentChange() {
    const content = this.editorForm.get('content')?.value;
    this.socket.emit('contentChange', content);
  }
}