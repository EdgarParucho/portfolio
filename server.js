const express = require('express')
const path = require('path')

const app = express()
const staticsPath = path.join(__dirname, 'dist')

const port = process.env.PORT || 3000

app.use(express.static(staticsPath))

app.listen(port, () => console.log(`Server on port ${port}`))
