const express = require('express')
const cors = require('cors')
require(
    'dotenv'
).config()

const fs = require('fs');




const app = express()
const port = process.env.BACKEND_PORT || 3000


app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.send('Hello to backend.'))



app.get('/products', function (req, resp) {
    return resp.sendFile(__dirname + '/data.json')
})




app.post('/purchase', function (req, resp) {
    console.log("Purchase Request with", req.body.product);
    let product = req.body.product

    data = []
    const fs = require("fs");
    fs.readFile("./purchased.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        data = JSON.parse(jsonString)
        data = [...data, product]
        let obj = JSON.stringify(data)
        console.log("Finale OBJECT", obj);
        fs.writeFile('./purchased.json', obj, () => { })

    });

    resp.send({ 'product': product })
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))