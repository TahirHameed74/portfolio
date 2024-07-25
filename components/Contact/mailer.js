import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    "service_9361nvo",
    "template_t7z53yj",
    { to_name: "Tayyab Shahid", from_name: name, email, message },
    {
      publicKey: "Y1OzAOLtKIn9xw6VS",
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;
