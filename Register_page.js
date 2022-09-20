function submit() {    
    var u_name=document.getElementById("u_name").value;
    var phnnum=document.getElementById("p_number").value;
    var regdate=document.getElementById("u_date").value;
    var pan=document.getElementById("u_pancard").value;
    var adar=document.getElementById("u_aadhar").value;
    var u_email=document.getElementById("u_email").value;
    let u_id=document.getElementById("user_id").value;
    let u_password=document.getElementById("user_password").value;


    if(u_name != 0 && phnnum != 0 && regdate != 0 && pan != 0 && adar != 0 && u_email != 0)
    {
        if( u_id !=0 && u_password !=0)
        {
        //document.writeln("Registration completed");
        alert("Registration completed");
        window.location.replace("");
        return true;
        }
    }
    else {
        alert("Some of the fields are missing...!")
        return false;
    }
}
submit();