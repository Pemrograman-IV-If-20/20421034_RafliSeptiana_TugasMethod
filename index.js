const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//jika params dan query bersama maka params didahulukan
app.post('/mhs/:alamat/:umur/:agama/:ibu', function (req, res) {
  res.json({
    nama : req.query.nama,
    npm : req.body.npm,
    alamat : req.params.alamat,
    umur: req.params.umur,
    hobi: req.body.hobi,
    agama: req.params.agama,
    semester: req.query.semester,
    status: req.body.status,
    ibu: req.params.ibu,
    prodi: req.body.prodi

})
});

app.listen(3000);
console.log("server ready")
