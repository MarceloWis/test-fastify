import fastify from "fastify";

const server = fastify()

server.get('/', async (req, res) => {
  return 'Hello, world!'
})

server.listen(3000, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})
