import { server } from './server/Server'

const PORT = 3000

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
)
