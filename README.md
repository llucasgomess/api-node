# Implementação de Responsabilidades na Pasta `routes` em uma API Node.js

## Introdução

Ao estruturar uma API Node.js, a separação de responsabilidades é essencial para manter o código organizado, modular e de fácil manutenção. Neste contexto, a pasta `routes` é responsável por definir os endpoints da aplicação e delegar a lógica de negócio para os controladores.

## Estrutura de Diretórios

Uma organização recomendada da API pode ser:
```
/project-root
│-- src/
│   │-- routes/
│   │   │-- user.routes.ts
│   │   │-- auth.routes.ts
│   │-- controllers/
│   │   │-- user.controller.ts
│   │   │-- auth.controller.ts
│   │-- middlewares/
│   │-- services/
│   │-- models/
│   │-- index.ts
│-- package.json
│-- tsconfig.json
```

## Explicação de Cada Pasta

### `routes/`
Esta pasta contém todos os arquivos responsáveis por definir os endpoints da API. As rotas apenas recebem a requisição e delegam a lógica de negócio para os controladores. 

### `controllers/`
Os controladores contêm a lógica de negócio relacionada a cada rota. Eles processam a entrada, interagem com serviços ou modelos e enviam respostas apropriadas.

### `middlewares/`
Aqui são armazenados os middlewares, que são funções intermediárias que processam as requisições antes que elas cheguem aos controladores. Exemplos comuns incluem autenticação, validação e logging.

### `services/`
Os serviços contêm a lógica de aplicação e regras de negócio. Eles interagem com os modelos e são chamados pelos controladores para executar operações mais complexas.

### `models/`
Os modelos representam a estrutura dos dados da aplicação e geralmente interagem com o banco de dados. Se estiver usando um ORM como Prisma ou Sequelize, os modelos definem os esquemas das tabelas.

### `index.ts`
Este é o arquivo principal da aplicação. Ele configura e inicia o servidor, importando as rotas e aplicando os middlewares globais.

## Implementação da Pasta `routes`

Cada arquivo dentro da pasta `routes` deve apenas definir os endpoints e delegar a lógica para os controladores. Exemplo de um arquivo de rota:

### `routes/user.routes.ts`
```typescript
import { Router } from 'express';
import { getUsers, createUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);

export default router;
```

### `controllers/user.controller.ts`
```typescript
import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.json([{ id: 1, name: 'Lucas Gomes' }]);
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ id: 2, name });
};
```

## Integração com o Servidor

No arquivo principal da aplicação (`index.ts`), importamos e utilizamos as rotas:

```typescript
import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
```

## Benefícios da Separação de Responsabilidades
- **Organização**: Código modular e limpo.
- **Manutenção Facilitada**: Facilidade para adicionar novos recursos sem impactar outras partes do sistema.
- **Reutilização**: Controladores podem ser usados em diferentes partes da aplicação.

## Conclusão
Ao seguir esse padrão, garantimos que a API esteja bem estruturada e escalável, facilitando a adição de novas funcionalidades e a manutenção do código.
