const router = require('express').Router()
const path = require("path");
const nodemailer = require('nodemailer');
const fs = require('fs')

let transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
        user: 'demo@visageint.org',
        pass: 'demo_@@1'
    }
});


router.route('/visit').post(visitEmail);



// send email on visit

async function visitEmail(req, res) {
    var ipInfo = req.body;
    console.log('[+] Sending visit email')
    res.send('done')
    var data = `Rohail Javed Visitor's Information is as follow
      Ip = ${ipInfo.query}
      Country = ${ipInfo.country}
      City = ${ipInfo.city}
      Country Code = ${ipInfo.country}
      RegionName = ${ipInfo.region}
      Internet Service Provider = ${ipInfo.org}
      latitude and longitude = ${ipInfo.loc}
      Org = ${ipInfo.org}
      IP Timezone = ${ipInfo.timezone}
      Client Timezone = ${ipInfo.cTimeZone}
      Zip Code = ${ipInfo.postal}
      Visit Date & Time = ${ipInfo.time}`;

      await transporter.sendMail({
        from: '"Rohail Javed Portfolio" <rohailjaved@gmail.com>',
        to: 'roadside16@gmail.com',
        subject: '[Rohail Javed] Visitor Information',
        text: data,
    });
    console.log('[+] Visit email sent to admin')

}


module.exports = router;
