const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    let x = 1;
    let y = 2;

    let c = x + y;

    return res.send('hello world')
})

// localhost = 127.0.0.1
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))