const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('public'))

const server = app.listen(PORT, () => {
  console.log('servidor levantado en el puerto: ' + server.address().port)
})

server.on('error', (error) => console.log(`hubo un error ${error}`))

const productos = []
const routerproductos = express.Router()
routerproductos.use(express.urlencoded({ extended: true }))
routerproductos.use(express.json())
routerproductos.get('/', (req, res) => {
  res.json(productos)
})

routerproductos.post('/', (req, res) => {
  console.log(req.body)
  productos.push(req.body)  
  res.json({ mensaje: 'se agrego correctamente' })
})

app.delete('/:id', (req, res) => {
    productos.splice(req.body.id, 1, '')
    res.json(productos)
  })
  
app.put('/:id', (req, res) => {
    productos.splice(req.params.id, 1, req.body.title)
    res.json(productos)
  })


app.use('/productos', routerproductos)
