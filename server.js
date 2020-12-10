const express = require('express')

const app = express()

app.use(static('website'))

app.listen(3000, () => {
    console.log('Running on localhost:3000')
});


app.get('/', (req, res) => {
    res.sendFile('/website/index.html');
})