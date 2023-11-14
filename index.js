const express = require('express')

const app = express()
const port = 8082

app.get('/', (req, res) => {
    res.contentType("application/json");
    res.send(content)
})

app.listen(port, () => {
    console.log(`vzlogger mock listening on port ${port}`)
})


const content = `{ "version": "0.8.3", "generator": "vzlogger", "data": [ { "uuid": "a8232ee0-a4ab-11ec-8d36-211f6b082dc8", "last": 1699969376696, "interval": -1, "protocol": "sml", "tuples": [ [ 1699969376696, 2687 ] ] }, { "uuid": "08232ee0-a4ab-11ec-8d36-211f6b082dc8", "last": 1699969376696, "interval": -1, "protocol": "sml", "tuples": [ [ 1699969376696, 2687 ] ] } ] }`
