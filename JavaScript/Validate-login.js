//Getting the elements we need button 
const submitBtn = document.getElementById("login")


function validateEmail(){
    
  //Getting the email values
  const emailInput = document.getElementById("email-address")
  const emailErrorMsg = document.getElementById("emailerror")
  const email = emailInput.value
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let isValid = regex.test(email)


  if(email.length === 0 ){
        emailErrorMsg.innerText = "Please enter your email address"
        emailInput.style.boxShadow = '2px 5px #f44336'
        
    } else if(isValid === false){
        emailErrorMsg.innerText = "Please your email in a correct format"
        emailInput.style.boxShadow = '2px 5px #f44336'
    } else{
        emailErrorMsg.innerText = ""
        emailInput.style.boxShadow = '0 2px #000'
    }

}

function validatepassword(){
    //getting password values
    const passwordInput = document.getElementById("password")
    const pwdErrorMsg = document.getElementById("pwderror")
    const password = passwordInput.value

    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    let isValid = regex.test(password)

if(password.length === 0){
    pwdErrorMsg.innerText = "Please enter your password"
    passwordInput.style.boxShadow = '2px 5px #f44336'
} else if(isValid === false){
    pwdErrorMsg.innerText = "Please your password in a correct format"
    passwordInput.style.boxShadow = '2px 5px #f44336'
} else{
    pwdErrorMsg.innerText = ""
    passwordInput.style.boxShadow = '0 2px #000'
}

}

submitBtn.addEventListener('click', () => {
    validateEmail()
    validatepassword()
})
