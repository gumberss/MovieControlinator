const app = require('express')()
//var cors = require('cors')
//const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const routes = require('./routes')
/*

app.use((req, res, next) => {
    req.io = io
    return next()
})

*/
//app.use(cors())
//app.use(express.json())
//app.use(require('./routes'))

io.on('connection', routes.registerEvent)

var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

const connection = networkInterfaces.Ethernet || networkInterfaces['Wi-Fi']

const address = connection && connection[1].address
const port = 5000

server.listen(port, address, () => {
    console.log(`Server started on ${address}:${port}`)
})