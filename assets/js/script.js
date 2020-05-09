var myform = document.getElementById('myform');
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var radio1 = document.getElementById("male");
var radio2 = document.getElementById("female");
var address = document.getElementById("address");
var condition = document.getElementById("condition");
// var reset = document.getElementById("reset");

myform.addEventListener('submit', validation);
document.getElementById("submit").addEventListener('click', validation);

// debugger;

//validate form
function validation(e){
    e.preventDefault();
   if(first_name.value == "")
    {
        document.getElementById("fname_error_msg").innerHTML = "Pleae fill the Details.";
        document.getElementById("fname_error_msg").style.visibility = "visible";
        // first_name.style.border = "1px solid red";
    }
    else if(!isNaN(first_name.value)){
        document.getElementById("fname_error_msg").innerHTML = "Only characters are allowed.";
        document.getElementById("fname_error_msg").style.visibility = "visible";
    }
    if(last_name.value == "")
    {
        document.getElementById("lname_error_msg").innerHTML = "Pleae fill the Details.";
        document.getElementById("lname_error_msg").style.visibility = "visible";
        // last_name.style.border = "1px solid red";
    }
    else if(!isNaN(last_name.value))
    {
        document.getElementById("lname_error_msg").innerHTML = "Only characters are allowed.";
        document.getElementById("lname_error_msg").style.visibility = "visible";
    }
   if((radio1.checked == 0) && (radio2.checked == 0))
    {
        document.getElementById("radio_error_msg").innerHTML = "Pleae fill the Details.";
        document.getElementById("radio_error_msg").style.visibility = "visible";
        // gender.style.border = "1px solid red";
    }
    if(address.value == "")
    {
        document.getElementById("address_error_msg").innerHTML = "Pleae fill the Details.";
        document.getElementById("address_error_msg").style.visibility = "visible";
        // address.style.border = "1px solid red";
    }
    if(condition.checked == 0 )
    {
        document.getElementById("condition_error_msg").innerHTML = "Pleae fill the Details.";
        document.getElementById("condition_error_msg").style.visibility = "visible";
        // condition.style.border = "1px solid red";
    }

    createUser(first_name, last_name, address);

}


//reset form.
document.getElementById("reset").addEventListener('click', resetform);
function resetform(){
    location.reload();
}


var users = [];

function  createUser(first_name, last_name, address){
    var user = {
        first_name : first_name,
        last_name : last_name,
        address : address   
    }
    users.push(user);
    console.log(users);
}