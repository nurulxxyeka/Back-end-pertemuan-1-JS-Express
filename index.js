const express = require('express');
const app =express();
const port = 2000;

app.get('/', (req, res) => {
    res.send(`hari ini kita puasa`)
});

app.delete('/', (req,res) => {
    res.send(`hapus data`)
});

app.post('/', (req,res) => {
    res.send(`data telah di update`)
});

app.listen(port,() => {
    console.log(`server telah tersambung pada port: ${port}`)
});