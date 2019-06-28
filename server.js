var express = require('express');
var app = express();

let listEmployee = [
    {id:0, name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000}
]

app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/employee/employee', function (req, res) {
    res.status(200).send(listEmployee);
})
app.get('/employee/employee/:id', function (req, res) {
    const id = parseInt(req.params['id'], 10);
    const employee = listEmployee.filter(item => item.id === id)
    res.status(200).send(employee);
})
app.post('/employee/employee', function (req, res) {
    const employee = req.body;
    employee.id = listEmployee[listEmployee.length -1].id +1;
    console.log(employee.id);
    listEmployee.push(employee)
    res.send('Hello World!');
})
app.put('/employee/employee', function (req, res) {
    res.send('Hello World!');
})
app.delete('/employee/employee', function (req, res) {
    res.send('Hello World!');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});