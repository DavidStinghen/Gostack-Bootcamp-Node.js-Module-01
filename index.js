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


//globlal log  middleware
server.use((req, res, next) => {
    console.time('Request')
    console.log(`Method: ${req.method}; URL: ${req.url}`)

    next()

    console.timeEnd('Request')
})

// local middleware user have a name in body
function checkUserExists(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "User name not found on request body!"})
    }

    return next()
}

// local middleware check user in array
function checkUserInArray(req, res, next) {
    const  user = users[req.params.index]
    if (!user) {
        return res.status(400).json({ error: "User does not exist!"})
    }

    req.user = user

    return next()
}

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
 * use local middleware checkUserInArray 
 */
server.get('/users/:index', checkUserInArray, (req,res) => {
    return res.json(req.user)
})

/**
 * post route
 * store new users
 * use local middleware
 */
server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body
    users.push(name)

    return res.json(users)
})

/**
 * put route
 * update user by index param
 * change the name in the body
 * use local middleware checkUserInArray
 * use local middleware checkUserExists
 */
server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

/**
 * delete route
 * get user by index
 * use local middleware checkUserInArray
 */
server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params
    users.splice(index, 1)

    return res.send()
})

// server listen port 3000
server.listen(3000)