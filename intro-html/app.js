const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3030;

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})