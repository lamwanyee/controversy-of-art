function sendMail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");s
      return;
    }

    let parms = {
      name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send("service_hus2fec", "template_u4rf28f", parms)
      .then(() => alert("Email sent successfully!"))
      .catch((error) => alert("Failed to send email: " + JSON.stringify(error)));
  }
