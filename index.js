const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json()); 

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Employee',
    multipleStatement : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log("DB connection succeded.");
      else
    console.log("DB connection failed \n Error : " + JSON.stringify(err,undefined,  2));
});

app.listen(3002,()=>console.log('Express server is running at port no: 6000'));

// Get all employess
app.get('/employees',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee',(err, rows, feilds )=>{
        if (!err)
        res.send(rows);
        else
        console.log(err)
    })
})
//get an employee

app.get('/employees/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employee WHERE EmpID = ?',[req.params.id],(err, rows, feild)=>{
        if (!err)
        res.send(rows);
        else                                                                                                                                                                                                                                                                     
        console.log(err);
    })
});

//delete an employess
app.delete('/employees/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM employee WHERE EmpID = ?',[req.params.id], (err, rows, feilds )=>{                                                                                                                                                                                                                                                                                                                                                                                   
        if (!err)
        res.send("Deleted Sucessfully.");
        else
        console.log(err)    
    })
});
//insert an employess
app.put('/employees',(req,res)=>{
    let emp= req.body;
    var sql = "SET @EmpID=? ;SET @Name =? ; SET @EmpCode=?; SET @Salary=?;\
    Call EmployeeAddOrEdit(@EmpID,@Name, @EmpCode,@Salary)"
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,empSalary],[req.params.id],(err, rows, feild)=>{       
    if (!err)
        res.send("Updated Succesfully.")
        else
        console.log(err)
    
    })
})
