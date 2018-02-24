var express = require('express');
var db_connection = require('./database');
var dateFormat = require('dateformat');

var router = express.Router();

router.post('/add',function (req,res,next) {
    try {
        var  request_object =  req.body;
        var data = {
            'name': request_object.name,
            'email_address':request_object.email_address,
            'subject':request_object.subject,
            'message':request_object.message,
            'created_at': dateFormat(new Date() ,'yyyy-mm-dd HH:MM:ss'),
            'updated_at': dateFormat(new Date() ,'yyyy-mm-dd HH:MM:ss'),
        };
        var insert_query = "INSERT INTO emails set ?";
        db_connection.query(insert_query,data,function (err, result) {
            if (err) {
                throw err;
            } else {
                var $result_data = {
                    'add_id':result.insertId
                }
                res.json($result_data);
            }
            console.log("1 record inserted");
        });
    } catch (ex) {
        return next(ex);
    }
})


module.exports = router;