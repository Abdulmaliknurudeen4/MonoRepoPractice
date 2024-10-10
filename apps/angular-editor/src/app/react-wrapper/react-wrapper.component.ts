import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Collaborator from '../../../../react-collaborator/src/app/collaborator';

@Component({
  selector: 'app-react-wrapper',
  template: '<div #reactContainer></div>',
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    ReactDOM.render(
      React.createElement(Collaborator),
      this.elementRef.nativeElement.querySelector('#reactContainer')
    );
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement);
  }
}