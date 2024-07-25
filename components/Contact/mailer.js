import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { to_name: "Tayyab Shahid", from_name: name, email, message },
    {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;
