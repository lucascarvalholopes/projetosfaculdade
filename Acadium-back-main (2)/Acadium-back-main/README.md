# Intrução
1. `npm install`;
2. Crie um arquivo com o nome `.env` na raiz do projeto, ou seja, o arquivo deve estar FORA da pasta `src`;
3. Copie os dados do arquivo `.env_example` para dentro do arquivo `.env`;
```bash
PORT= 8080
SECRET_KEY = 'Uni!Acadium@Pw' #Ou qualquer outra chave de segurança
DB_USER = 'Prod'
DB_PASS = 'B7kaEesIhrq1dkk6'
```
4. `npm start`;
5. Realize o login pela rota `post` a seguir: http://localhost:8080/api/login . Dados para o login:
```json
{
	"cpf": "00000000000",
	"password": "admin"
}
```
6. Para acessar qualquer outra rota informe o token gerado no campo `Authorization - Bearer Token`.

## Rotas

URL base: http://localhost:8080/api

### Principais

- post: /login
- /user
- /called
- /reserve
- /room

### Filhas

- get: /
- post: /
- put: /:id
- delete: /:id

_Para saber todas as rotas acesse a pasta `routes`_