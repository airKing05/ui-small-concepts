console.log("index.js thbf")

// get variable form the html page
const form = document.getElementById('formData')
const name = document.getElementById('fname');
const email = document.getElementById('femail');
const phone = document.getElementById('fphone');
const password = document.getElementById('fpassword');
const cPassword = document.getElementById('fcPassword');

// add event listener to form to submit the data
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
})

// if all error are gone then submit the form
function submitForm(username){
    let errors = document.getElementsByClassName('error');
    for( let item of errors){
        if(item.innerText != ''){
          return false
        }
     }
    
    location.href = `submit.html?username=${username}`
    alert('from submit')
}

// clear aal the error
function clearError(id){
    const formControl = id.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';

}

// set error message
function setErrorMsg(id, error){
// set error inside of the tag id
const formControl = id.parentElement;
const small = formControl.querySelector('small');
//formControl.className = "form-control error"
small.innerText = error;
// let element = document.getElementById(id)
// element.getElementsByClassName('error')[0].innerHTML=error;
}

// if no error occur then success() will called
function setSuccess(id){
    const formControl = id.parentElement;
    formControl.className =  "form-control success";
    clearError(id);
}

//email more validation
function isEmail(email){
    let atSymbol = email.indexOf('@');
    // at symbol should not be at starting
    if (atSymbol<1) return false;

    let dot = email.lastIndexOf('.');                                  //abcd@gm.in
    // at least 2 char should be presented in between @ and . // like abcd@gmail.com
    if(dot<=atSymbol + 2) return false;
    // . ki position last me nahi honi chahiye   like - abc@gmail.
    if(dot === email.length - 1) return false;

    return true;

}

// input field validation form
const validateForm =() =>{
    // remove the white space form the data of front and back side 
    const name = fname.value.trim();
    const email = femail.value.trim();
    const phone = fphone.value.trim();
    const password = fpassword.value.trim();
    const cPassword = fcPassword.value.trim();
    
    // if field is empty the call setErrorMsg() function else setSuccess()
    // name validation
    if (name === "") {
        setErrorMsg(fname, "name can not be blank");
    } else if (name.length<3) {
        setErrorMsg(fname, "name is not valid");
    } else {
        setSuccess(fname);
    } 

    //email validation
    if (email === "") {
        setErrorMsg(femail, "email can not be blank");
    } else if (!isEmail(email)) {
        setErrorMsg(femail, "email is not valid");
    } else {
        setSuccess(femail);
    }
    // phone validation
    if (phone === "") {
        setErrorMsg(fphone, "phone number can not be blank");
    } else if (phone.length != 10) {
        setErrorMsg(fphone, "phone number is not valid");
    } else {
        setSuccess(fphone);
    }
    // password validation
    if (password === "") {
        setErrorMsg(fpassword, "password can not be blank");
    } else if (password.length <= 6) {
        setErrorMsg(fpassword, "password should be at least 6 digit");
    } else {
        setSuccess(fpassword);
    }
    // confirm password validation
    if (cPassword === "") {
        setErrorMsg(fcPassword, "confirm password can not be blank");
    } else if (password != cPassword) {
        setErrorMsg(fcPassword, "confirm password and password are not equal");
    } else {
        setSuccess(fcPassword);
    }

    // if all validation completed then submit form
    submitForm(name)
}   