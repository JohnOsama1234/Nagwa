const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const wordRoutes = require('./routes/allRoutes');
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use("/api", wordRoutes);

app.listen(PORT, (err) => {
    if (!err)
        return console.log(
            `*------------------Server Starts on PORT (${PORT})---------------------*`
        );
});