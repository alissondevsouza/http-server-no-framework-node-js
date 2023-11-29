import  http  from 'node:http'
import 'dotenv/config.js'

const PORT = process.env.PORT || 3000

const server = http.createServer( () => {}
).listen(PORT, () => {console.log(`Server running on port ${PORT}`)})


export {
    server
}