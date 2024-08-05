function emailsend(){

    var UserName =  document.getElementById('name').Value;
    var phone = document.getElementById('phone').Value;
    var email = document.getElementById('email').value;
    

    var message = "Name " + UserName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "olonana.nkera@gmail.com",
    Password : "7583405AFEC84E631C8B66E1551BCA0762F2",
    To : 'carltonwaiti150@gmail.com',
    From : "carltonwaiti150@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
    if(message== 'OK') {
        swal("Success", "Message Sent!", "success");
    }
    else{
        swal("Error", "You clicked the button!", "error");
    }
  }
);
}