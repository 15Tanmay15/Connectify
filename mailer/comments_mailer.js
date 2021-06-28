const nodeMailer = require('../config/nodemailer');

// another way of exporting a method
exports.newComment = (comment) => {
    let htmlString = nodeMailer.renderTemplate({comment: comment}, '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from: 'codeial.com',
        to: comment.user.email,
        subject: 'New comment published',
        html: htmlString
    }, (err, info) => {
        if(err){
            console.log('Error in sendind mail', err);
            return;
        }

        // console.log("Message sent", info);
        return;
    });
};