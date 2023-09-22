var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ifcphrw@gmail.com',
    pass: ' nlwb shxz xsyz qbmu'
  }
});

var mailOptions = {
  from: 'ifcphrw@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Paulo Henrique da Rosa Wernke 2B - nlwb shxz xsyz qbmu'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 