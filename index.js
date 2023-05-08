const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const {
    CountriesRouters,
    RegionsRouters,
    CitiesRouters,
} = require('./routers');

const app = express()

app.use(cors());
app.use(express.json())

app.use('/api', CountriesRouters);
app.use('/api', RegionsRouters);
app.use('/api', CitiesRouters);

app.get('/', (req, res) => {
    console.log('====================================');
    console.log('aaaaaaaaaaaaaaa====');
    console.log('====================================');
    res.send({
        name: 'llllllllll'
    })
})


app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${process.env.PORT}`)
})
