const express = require('express');
const app = express()
const cors = require('cors')
const userRouter = require('./router/v1/user.route')
const port = process.env.PORT || 5000;
const data = require('./data.json');



app.use(express.json())
app.use(cors())

app.use('/user/all', userRouter)
app.use(userRouter)
app.use(userRouter)

app.get('/all', (req, res) => {
    const randomMonth = data[Math.floor(Math.random() * (data.length)) + 1];
    res.send(randomMonth)
})

app.post('/user', (req, res) => {
    const user = req.body;
    const result = { data: user }
    res.send(result)

})

app.get('/', (req, res) => {
    res.send('assignment server is running')
})

app.listen(port, () => {
    console.log(`assignment server is running on port ${port}`)
})