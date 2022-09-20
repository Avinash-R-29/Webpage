function login()
{
    let user=document.getElementById("user_id").value;
    let password=document.getElementById("user_password").value;
    if(user == "admin" && password == "123456"){
        alert("Login Sucessfull");
        window.location.replace("Welcome_page.html");
       // locate="Project1.html";
        return true;
    }
    else{
            alert("Login failed");
            alert("User id = admin and Password = 123456")
            return false;
        }
}