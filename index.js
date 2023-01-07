const express = require("express")
const app = express()
const killerPerks = require("./killer-perks.json")
const survivorPerks = require("./survivor-perks.json")
let port = process.env.PORT || 3000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/killer-perks", (req, res) => {
  res.send(killerPerks)
})

app.get("/survivor-perks", (req, res) => {
  res.send(survivorPerks)
})

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`)
})
