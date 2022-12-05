const express = require('express');
const app = express();


app.use(express.json());
app.get('/api', (req, res) => {
    console.log('sending data from /api...')
    res.send({data: 'Hello World!'})
})

app.listen(5000, ()=> {console.log("Server started on port 5000...")})