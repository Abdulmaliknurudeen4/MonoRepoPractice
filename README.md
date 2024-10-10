# Collaborative Editor with Angular and React

## Overview

This project is a real-time collaborative text editor built using Angular and React within an NX monorepo. It demonstrates the integration of two popular front-end frameworks and showcases real-time collaboration features using Socket.IO.

## Features

- Real-time text synchronization across multiple clients
- User presence indication
- Angular-based main editor component
- React-based connected users display
- NX monorepo for efficient code sharing and building
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- NX CLI (`npm install -g nx`)

## Project Structure

```
collaborative-editor/
├── apps/
│   ├── angular-editor/    # Angular application
│   └── react-collaborator/# React application
├── libs/                  # Shared libraries (if any)
├── tools/
├── server.js              # Socket.IO server
├── nx.json
├── package.json
├── tsconfig.base.json
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/collaborative-editor.git
   cd collaborative-editor
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Tailwind CSS:
   - Ensure `tailwind.config.js` is properly configured for both apps.
   - Add Tailwind directives to both apps' CSS files.

## Running the Application

1. Start the Socket.IO server:
   ```
   node server.js
   ```

2. In a new terminal, start the Angular application:
   ```
   nx serve angular-editor
   ```

3. In another terminal, start the React application:
   ```
   nx serve react-collaborator
   ```

4. Open your browser and navigate to:
   - Angular Editor: `http://localhost:4200`
   - React Collaborator: `http://localhost:4201`

## Development

### Angular Editor

The main editor component is located in `apps/angular-editor/src/app/editor/editor.component.ts`. It handles the text input and real-time synchronization.

### React Collaborator

The connected users component is in `apps/react-collaborator/src/app/connected-users/connected-users.component.tsx`. It displays the list of currently connected users.

### Socket.IO Server

The server (`server.js` in the root directory) manages WebSocket connections, broadcasts changes, and keeps track of connected users.

## Building for Production

To build both applications for production:

```
nx build angular-editor
nx build react-collaborator
```

The built files will be in the `dist/` directory.

## Testing

Run unit tests for each application:

```
nx test angular-editor
nx test react-collaborator
```

## Linting

Lint the code for each application:

```
nx lint angular-editor
nx lint react-collaborator
```

## Deployment

This project can be deployed to various platforms. Here are general steps:

1. Build the applications (see "Building for Production" above).
2. Deploy the built files from `dist/` to your hosting platform.
3. Ensure your Socket.IO server is running and accessible.
4. Update the Socket.IO connection URL in both Angular and React apps if necessary.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- NX documentation
- Angular and React communities
- Socket.IO documentation