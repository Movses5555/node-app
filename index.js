const express = require('express');
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


app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${process.env.PORT}`)
})
