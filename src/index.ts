// ### `index.ts`
// Este é o arquivo principal da aplicação. Ele configura e inicia o servidor, importando as rotas e aplicando os middlewares globais.

import { server } from "./server/Server";


server.listen(process.env.PORT || 3001, () =>
  console.log(`Server is running http://localhost:${process.env.PORT || 3001}`)
)
