// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "nam" && password == "123"){
alert ("Login successfully");
window.location = "SELECTION.html"; // Redirecting to other page.
return false;
}
else{
alert("Incorrect Username/Password");
}
}