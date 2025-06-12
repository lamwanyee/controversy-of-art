function sendMail(){
    let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
}
    emailjs.send("service_hus2fec","template_ldq07bk",parms).then(alert("Email Sent!!!"))
}