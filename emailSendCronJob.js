var express = require('express');
var db_connection = require('./database');
const nodemailer = require('nodemailer');
var dateFormat = require('dateformat');
var cron = require('node-cron');
var router = express.Router();

/**
 * node mailer config
 */
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'wyyynac4ebdrl5z6@ethereal.email',
        pass: 'VSgHjJ64WmCUhBBqJW'
    }
})

cron.schedule('* * * * *', function(){
    var now = dateFormat(new Date() ,'yyyy-mm-dd HH:MM:ss');
    var now_string = now.toString();
    // var get_emails_query= 'select * from emails T where TIME_TO_SEC (TIMEDIFF("'+now_string+'",T.updated_at))/3600  > 1 AND `is_sent`= 0 LIMIT 10' ;
    var get_emails_query= 'select * from emails where `is_sent`= 0 LIMIT '+ process.env.NO_OF_EMAILS_SENT_AT_TIME ;

    db_connection.query(get_emails_query,function (err ,result , fields) {
        if (err) {
            throw err;
        } else {
            var email_send_result = emailSend(result)
            if (email_send_result !== null) {
                // res.json( ' Emails successfully sent');
            } else {
                // res.json('No Emails to send!!!');
            }
        }
    })
});


router.get('/sendEmails',function (req,res) {
    // setup email data with unicode symbols

    // var now = dateFormat(new Date() ,'yyyy-mm-dd HH:MM:ss');
    // var now_string = now.toString();
    // // var get_emails_query= 'select * from emails T where TIME_TO_SEC (TIMEDIFF("'+now_string+'",T.updated_at))/3600  > 1 AND `is_sent`= 0 LIMIT 10' ;
    // var get_emails_query= 'select * from emails where `is_sent`= 0 LIMIT '+ process.env.NO_OF_EMAILS_SENT_AT_TIME ;
    //
    // db_connection.query(get_emails_query,function (err ,result , fields) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         var email_send_result = emailSend(result)
    //         if (email_send_result !== null) {
    //             res.json( ' Emails successfully sent');
    //         } else {
    //             res.json('No Emails to send!!!');
    //         }
    //     }
    // })
})

/**
 * sending emails using node mailer and update database
 * @param result
 * @returns {*}
 */

function emailSend(result) {
    if (result.length > 0) {
        for (var i=0;i<result.length;i++) {
            var mailOptions = {
                from: ''+result[i].email_address, // sender address
                to: 'bar@example.com, baz@example.com', // list of receivers
                subject: ''+result[i].subject, // Subject line
                text: ''+result[i].message, // plain text body
                html: '<b>'+result[i].message+'</b>' // html body
            };
            var sent = false;
            // send mail with defined transport object
            var sent = transporter.sendMail(mailOptions,function (error, info){
                if (error) {
                    return console.log(error);
                } else {
                    // console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    return  true;
                };
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                // return nodemailer.getTestMessageUrl(info);
            })
            if (sent != false) {
                var  sent_id = result[i].id;
                var updated_time = dateFormat(new Date() ,'yyyy-mm-dd HH:MM:ss');
                var update_sent_mail_query = 'UPDATE emails SET is_sent =1 , updated_at = "'+updated_time+'" WHERE id ='+ sent_id;
                db_connection.query(update_sent_mail_query,function (err,result) {
                    if (err) {
                        throw err;
                    } else {
                        // console.log('id => '+sent_id+' has successfully updated its is_sent field');
                    }
                })
            }
        }
        return true;
    } else {
        return null;
    }
}

module.exports = router;
