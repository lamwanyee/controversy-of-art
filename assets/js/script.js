function sendMail(){
    let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subjec").value,
    message : document.getElementById("message").value,
}
    emailjs.send("service_hus2fec","service_hus2fec",parms).then(alert("Email Sent!!!"))
}