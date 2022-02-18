import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000

const staticsPath = path.join(__dirname, 'dist')
app.use(express.static(staticsPath))

app.listen(port, () => 'Server on port ' + port)
