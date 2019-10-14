const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require(body-parser);

app.get(bodyparser.json()); 

var mysqlConnection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234'
    database: 'Office'
    multipleStatement : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log("DB connection succeded.")
    else
    console.log("DB connection failed \n Error : " + JSON.stringify(err,undefined,  2))
})

app.listen(3000,()=>console.log('Express server is running at port no: 3000'));
// Get all employess
app.get('/employes',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Employee',(err, rows, feild)=>{
        if (err)
        res.send(rows);
        else
        console.log(err)
    })
})
//get an employee

app.get('/employes/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?',[req.params.id](err, rows, feild)=>{
        if (err)
        res.send(rows);
        else                                                                                                                                                                                                                                                                          
        console.log(err)
    })
});

//delete an employess
app.get('/employes/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?',[req.params.id](err, rows, feild)=>{                                                                                                                                                                                                                                                                                                                                                                                                           * FROM Employee WHERE EmpID = ?',[req.params.id](err, rows, feild)=>{
        if (!err)
        console.log("Deleted Sucessfully.")
        else
        console.log(err)
    })
});

//insert an employess
app.post('/employes',(req,res)=>{
    var sql = "SET @EmpID=? ;SET @Name =? ; SET @EmpCode=?; SET @Salary=?;\
    Call EmployeeAddOrEdit(@EmpID=?,@Name =?, @EmpCode=?,@Salary=?)"
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,empSalary],[req.params.id](err, rows, feild)=>{                                                                                                                                                                                                                                                                                                                                                                                                           * FROM Employee WHERE EmpID = ?',[req.params.id](err, rows, feild)=>{
        if (!err)
        res.send(rows);
        else
        console.log(err)
    })
});