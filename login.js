function validation(){

    var username=document.formlog.username.value;  
    var password=document.formlog.password.value; 
        if(username == null || username == ""){
            alert("Username cannot be blank.");
            return false;
        }
        else if(password.length<8){
            alert("Password should be at least 8 characters long.");
            return false;
        }

    }