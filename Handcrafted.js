function verify(){
    let email = document.getElementById("input").value;

    if(correct(email)){
    }
    else{
        document.getElementById("error").innerHTML="not valid";
        document.getElementById("error").style.display='block';

    }
}
function correct(email)
{
    let formate=/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[a-zA-z]{3,4}$/;

    return formate.test(email);
}
function verifyl(){
    let email = document.getElementById("input").value;

    if(correct(email)){
    }
    else{
        document.getElementById("errorl").innerHTML="not valid";
        document.getElementById("errorl").style.display='block';

    }
}