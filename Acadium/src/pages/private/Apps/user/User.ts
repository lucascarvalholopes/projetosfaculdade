import axios from 'axios';

interface User {
    name: string;
    cpf: string;
    email: string;
    role: number[];
    password: string;
  }
  
  async function createUser(user: User) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const createdUser = await response.json();
        console.log('Usuário criado:', createdUser);
      } else {
        const errorData = await response.json();
        console.error('Erro ao criar usuário:', errorData.message);
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  }
  
  const user: User = {
    name: 'Fulano de Tal',
    cpf: '12345678901',
    email: 'fulano@example.com',
    role: [1, 2],
    password: 'senha123',
  };
  
  createUser(user);
  
  export {};