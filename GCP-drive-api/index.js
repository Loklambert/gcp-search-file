const express = require('express');
const app = express()
var cors = require('cors')

const googleDriveApi = require('./google-drive-api')
const port = 9090


app.use(cors())

app.get('/search', googleDriveApi.searchFiles)
app.get('/download', googleDriveApi.downloadByFileid)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})