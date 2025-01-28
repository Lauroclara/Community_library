import nodemailer from 'nodemailer';
import 'dotenv/config.js'

const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user:'porcess.env.EMAIL',
        pass:'process.env.PASS'
    },
});

function sendEmail(email, bookTitle, dueDate) {  
  const mailOptions = { 
    from: process.env.EMAIL,
    to: email,
    subject: 'Reminder: Book Due Date Approaching',
    html: `
     <div style="font-family: Arial, sans-serif; pedding: 20px; color: #333;">
  <h2 style ="color: #f60";>Community Library Reminder</h2>
  <p>Dear user,</p>
  <p>This is a merindedr that the book <strong> "${bookTitle}".</strong> is due on 
  <strong> ${dueDate} </strong>.</p>
  <p>PLease make sure to return or renew it on time.</p>
  <p>Best regards,<br>Your Community Library</p>
  </div>
  `,  
  };
 transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error("Error sending email:", err);
    } else {
        console.log("Email sent:", info.response);
    }
 });

}


export default sendReminderEmail;
