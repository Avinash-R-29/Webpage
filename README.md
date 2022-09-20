 #Welcome page:HTML
 
 <html>
    <head>
    <title>
        Welcome Page
    </title>
    <script type="text/javascript" scr="">
    </script>
    <link rel="stylesheet" type="text/css" href="Welcome_page.css">
    </head>
    <body>
        <div id="welcome-head">
            <header>
                <nav>
            <ul>
                <li>
                    <abbr title=" Menu"><a href=" ">Menu</a></abbr>
                </li>
                <li>
                    <abbr title="About Us"><a href=" ">About Us</a></abbr>
                </li>
                <li>
                <abbr title ="Events"><a href=" ">Events</a></abbr>
                </li>
                <li>
                    <abbr title="New User"><a href="Register_page.html">New user</a></abbr>
                </li>
                <li>
                    <abbr title ="Login"><a href="Login_page.html">Login</a></abbr>
                </li>
            </ul>
        </nav>
        </header><br><br><br>
        <div class="bodyinfo">
            <h3 style="text-align:center; color:black">
                Welcome to the Sample web-page
            </h3>
        </div>
        </div>
    </body>
</html>

# Welcome_pase:CSS

nav{
    /*height:70px;
    width:100%;
    background-color: rgb(161, 157, 157);*/
    color: black;
    position:fixed;
}
nav li{
    display:inline;
    float:inline-start;
    font-style:initial;
    font-weight:bolder;
    font-size: large;
    padding-left: 50px;
}
nav li:hover{
    background-color: rgb(50, 176, 208);
}
nav a{
    width:90px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 20px;
    color: rgb(32, 34, 32);
}    
#welcome-head .bodyinfo{
    /*background-color: gray;*/
    text-decoration:solid;
    text-align: center;
    font-size: medium;
    font-size: larger;
    /*padding-left: 100px;*/
}
p{
    padding-top: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25;
}
body{
    background: url(img5.png) no-repeat center/cover;
}
#welcome-head .aboutkmf{
    font-size:25;
}
h3{
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: white;
    height:30px;
    width:fixed;
    text-align: center;
}

#login_page:HTML

<html>
    <head>
        <title>
            School Register book
        </title>
    <link rel="stylesheet"  type="text/css"  href="Login_page.css"></head>
    <script type="text/javascript" src="Login_page.js"></script>
        <body>
            <h2>Welcome to Login Page</h2><hr>
            <div class="login">
            <label><table align="center" border="0">
                <tr>
                    <th>
                Name : </th><th><input type="text" placeholder="Enter the user name" id="user_id" required><br><br>
                    </th>
                </tr>
                <tr>
                    <th>
                Password : </th><th><input type="password" placeholder="Enter the Password" id="user_password" required>
                </th>
                </tr>
            </table>
                </label>
            </div>
            <footer>
                    <a href="Register_page.html"><input type="button" value="Signup"></a>
                    <input type="Submit" value="Login" onclick="login()">
            </footer>
        </body>
</html>

#login page :CSS
body{
    background: url(img1.jpg) no-repeat center/cover;
    position:relative;
    text-align: center;

}
h2{
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: aliceblue;  
}
input:hover[type="value"]{
    width: 100px;
}
.tablemain{
    width: 20%;
    grid-gap: 30px;
    padding-left:500px;
}
td{
    width: 100%;
    
}
.login{
    text-align: center;
    padding-top: 10px;
}
footer{
    padding-top: 20px;
    padding-left: 50px;
}

#login:javascript
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
#Signup_page:HTML
<html>
    <head>
        <title>
        Register Page
        </title>
    <script type="text/javascript" src="Register_page.js"></script>
    <link rel="stylesheet" type="text/css" href="Register_page.css">
    </head>
    <body>
        <div id="heading-page">     
        <table border="0" align="center">
            <thead>
                <tr>
                    <th colspan="6"><h2>Welcome to New Registration<hr></h2></th>
                </tr>
                <hr>
                <tr>
                    <th>
                        User Name :
                    </th>
                    <td>
                        <input type="text" id="u_name" placeholder="Username">
                    </td>
                    <th>
                        Phone number :
                    </th>
                    <td>
                        <input type="number" id="p_number" placeholder="Phone Number">
                    </td>
                    <th>
                        Email Id : 
                    </th>
                    <td>
                        <input type="email" id="u_email" placeholder="Enter Mail Id">
                    </td>
                </tr>
                <tr>
                    <th>
                    Address:
                    </th>
                    <td>
                        <textarea id="u_date" placeholder="Address"></textarea>
                    </td>
                    <th>
                    City
                    </th>
                    <td>
                        <input type="text" id="u_city" placeholder="Enter city">
                    </td>
                    <th>
                        Pincode :
                        </th>
                        <td>
                            <input type="text" id="u_pincode" placeholder="Enter Ppincode">
                        </td>
                        </tr>
                    <th>
                    State
                    </th>
                    <td>
                        <input type="text" id="u_state" placeholder="Enter state">
                    </td>
                    <th>
                        Country Name : 
                    </th>
                    <td>
                        <input type="text" id="u_country" placeholder="Enter the Country">
                    </td>
                    <th>
                        Company Name : 
                    </th>
                    <td>
                        <input type="text" id="u_cmpny" placeholder="Enter company name">
                    </td>
                    </tr>
                    <th>
                        Occupation : 
                    </th>
                    <td>
                        <input type="text" id="u_ocuption" placeholder="Enter occupation">
                    </td>
                    <th>
                        Year of Experience :
                        </th>
                        <td>
                            <input type="number" id="u_experience" placeholder="Enter Experience">
                        </td>
                </tr>
            </thead>
        </table><hr><br>
        <div align="center">
            <a href="Login_page.html"><input type="button" value="Back"></a>
        <a href="Welcome_page.html"><input type="submit" id="login_submit" onclick="submit()"></a>
        </div>
    </div>
    </body>
    </html>
#Signup:CSS

h4{
    color: black;
    background-color: azure;
}
body{
    color:#2f2f33;
    background: url(img1.jpg) no-repeat center/cover;
    
}
input{
  border-style:solid;
}
table{
    border: 3;
    padding-inline: 20px;
    border-spacing:15px;
}
h2{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
}

#Signup:javascript

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

    
