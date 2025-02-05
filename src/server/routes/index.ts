import { Request, type Response, Router } from 'express'

const router = Router()

router.get('/', (_, res: Response) => {
  res.send('Hello World')
})
router.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  res.json(req.body)
})



export { router }
