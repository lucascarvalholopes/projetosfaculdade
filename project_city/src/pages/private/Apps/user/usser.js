// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev: Lucas de carvalho lOPES
// DATA: 01/07/2023


class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    static findByCredentials(username, password) {
      // Aqui você pode implementar a busca no banco de dados (ou mock de usuários) para verificar as credenciais.
      // Retorne true se as credenciais estiverem corretas, caso contrário, retorne false.
      const users = [
        { username: 'user1', password: '123456' },
        { username: 'user2', password: 'abcdef' },
      ];
  
      const user = users.find(u => u.username === username && u.password === password);
  
      return !!user;
    }
  }
  
  module.exports = User;
  