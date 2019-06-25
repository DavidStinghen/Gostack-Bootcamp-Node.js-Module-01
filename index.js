// import express
const express = require('express')
const server = express()

/**
 * first route - method GET
 */
server.get('/test', (req, res) => {
    // console.log('test')
   // return res.send('Hello Word!')
   return res.json({ message: 'Hello Word' })
})

// server listen port 3000
server.listen(3000)