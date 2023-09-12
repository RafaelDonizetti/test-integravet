const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastro.html'))
})
app.listen(PORT, () => {
    console.log('O servidor está rodando na porta 3000')
})

module.exports = app