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


// clear aal the error
function clearError(){
    let errors = document.getElementsByClassName('error');
    for( let item of errors){
        item.innerHTML = '';
    }
}

function setErrorMsg(id, error){
// set error inside of the tag id
element = document.getElementById(id);
element.getElementsByClassName('error')[0].innerHTML=error;
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
    if(name === ""){
        setErrorMsg(fname, "name can not be blank");
    }else if( name<=3){
        setErrorMsg(fname, "name length should be at least 3");
    }else{
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
    
 
}   