//Getting the elements we need button 
const submitBtn = document.getElementById("reset")


function validateEmail(event){

event.preventDefault()

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

submitBtn.addEventListener("click", validateEmail)