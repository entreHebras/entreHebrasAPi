import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "entrehebras06@gmail.com",
    pass: "ixbi hoxi djea hkmu",
  },
});

transporter.verify().then(() => {
  console.log("REady for send emails");
});

