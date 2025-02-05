// ### `routes/`
// Esta pasta contém todos os arquivos responsáveis por definir os endpoints da API. As rotas apenas recebem a requisição e delegam a lógica de negócio para os controladores.

import { Request, type Response, Router } from 'express';
import { StatusCodes } from "http-status-codes";

const router = Router()

router.get('/', (_, res: Response) => {
  res.send('Hello World')
})
router.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.status(StatusCodes.GATEWAY_TIMEOUT).json(req.body)
})



export { router };

