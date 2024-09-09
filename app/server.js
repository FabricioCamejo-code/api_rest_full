const express = require('express') //llamamos a Express
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080 // establecemos nuestro puerto
app.use(morgan('combined'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// para establecer las distintas rutas, necesitamos instanciar el express router
const router = require('./routes')
app.use('/api', router)
// iniciamos nuestro servidor
app.listen(PORT)
console.log('API escuchando en el puerto ' + PORT)