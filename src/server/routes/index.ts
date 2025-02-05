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

