
function changetheme() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("dark-theme");
 }
 function validate(){
  
    var name=document.forms["myform"]["name"].value;
    var password=document.forms["myform"]["password"].value;
    var lastname=document.forms["myform"]["lastname"].value;
    var info =document.forms["myform"]["info"].value;
    var pass = password.toUpperCase();
    var error =0;
    var i=0;
   
       while(i<10){
        localStorage.setItem("firstname", name)[i];
        localStorage.setItem("email", info)[i];
        localtorage.setItem("password", password)[i];
        break;
       }
       i++;
  
        
        if( name == 'null'){
         document.getElementById('error_name').innerHTML = "Name should not null";
         document.getElementById('name-field').classList.add("error-border");
         error++;
        }
        else if( name == ''){
         document.getElementById('error_name').innerHTML = "Please Enter Name";
         document.getElementById('name-field').classList.add("error-border");
        
         error++;
        }
        else if( !isNaN(name)){
         document.getElementById('error_name').innerHTML = "Name Should not Number";
         document.getElementById('name-field').classList.add("error-border");
         error++;
        }
        else{
         document.getElementById('error_name').innerHTML = "";
         document.getElementById('name-field').classList.remove("error-border");
         document.getElementById('name-field').classList.add("green-border");
        }
        if( password == ''){
         document.getElementById('error_password').innerHTML = "Please Enter Password";
         document.getElementById('password-field').classList.add("error-border");
         error++;
        }
        else if( pass == 'PASSWORD' ){
         document.getElementById('error_password').innerHTML = "Password Should not password";
         document.getElementById('password-field').classList.add("error-border");
         error++;
        }
        else{
         document.getElementById('error_password').innerHTML = "";
         document.getElementById('password-field').classList.remove("error-border");
         document.getElementById('password-field').classList.add("green-border");
        }
 
        if(info == ''){
         document.getElementById('error_email').innerHTML = "Please Enter Detail";
         document.getElementById('info-field').classList.add("error-border");
         error++;
        }
        else{
         document.getElementById('error_email').innerHTML = "";
         document.getElementById('info-field').classList.remove("error-border");
         document.getElementById('info-field').classList.add("green-border");
        }
        
 
        if( error == 0){
         return true;
        
       
        }
        else{
         return false;
        }
 
        
        
 
   
 }
 const inpt =document.querySelector("input");
  inpt.addEventListener('keyup',(e)=>{
       validate();
 });
  const eyeicon = document.querySelector(".bx-show");

  eyeicon.addEventListener('click',function(){
        const pinput = document.getElementById('password-field');
        if(pinput.type == 'password'){
            pinput.type='text';
            eyeicon.classList.replace('fa-eye-slash','fa-eye');
        }
        else{
            pinput.type='password';
            eyeicon.classList.replace('fa-eye','fa-eye-slash');
        }
  });
   
  

 

  localStorage.setItem("verify",'yes');