const app = require("express")()

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/poopoo", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(8080, () => console.log('hi I\'m listening'))