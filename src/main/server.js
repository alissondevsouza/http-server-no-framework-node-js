import  http  from 'node:http'
import 'dotenv/config.js'
import Middleware from './middleware.js'

const middleware = new Middleware()
const PORT = process.env.APIPORT || 3000

const server = http.createServer( middleware.execute() )
    .listen(PORT, () => {console.log(`🚀 Server running on port ${PORT} !`)})

export {
    server
}