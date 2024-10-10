import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface User {
  id: string;
  name: string;
}

const Collaborator: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('usersUpdate', (updatedUsers: User[]) => {
      setUsers(updatedUsers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Connected Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-1">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborator;