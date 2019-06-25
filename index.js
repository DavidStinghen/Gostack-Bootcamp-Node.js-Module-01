// import express
const express = require('express')
const server = express()

// server can read json files
server.use(express.json())

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

// const test to store the users
const users = ['David', 'Diego', 'Julio'] 

/**
 * list route
 * list all users
 */
server.get('/users', (req, res) => {
    return res.json(users)
})

/**
 * params route
 * get the users by index 
 */
server.get('/users/:index', (req,res) => {
    const { index } = req.params
    return res.json(users[ index ])
})

/**
 * post route
 * store new users
 */
server.post('/users', (req, res) => {
    const { name } = req.body
    users.push(name)

    return res.json(users)
})

/**
 * put route
 * update user by index param
 * change the name in the body
 */
server.put('/users/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

/**
 * delete route
 * get user by index
 */
server.delete('/users/:index', (req, res) => {
    const { index } = req.params
    users.splice(index, 1)

    return res.send()
})

// server listen port 3000
server.listen(3000)