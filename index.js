// import express
const express = require('express')
const server = express()

/**
 * query params = ?teste=1
 * route params = /test/1
 * request body =  { "nome": "test", "email": "test@test.com.br"}
 */

/**
 * first route - method GET
 */
server.get('/test/:id', (req, res) => {
    // console.log('test')
    // return res.send('Hello Word!')
    // return res.json({ message: 'Hello Word' })

    //const name =  req.query.name
    // return res.json({ message: `Hello ${name}` })

    const { id } = req.params
    return res.json({ message: `Searching test ${id}`})
})

// server listen port 3000
server.listen(3000)