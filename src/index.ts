import { server } from "./server/Server";


server.listen(process.env.PORT || 3001, () =>
  console.log(`Server is running http://localhost:${process.env.PORT || 3001}`)
)
