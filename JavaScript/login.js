  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbzB4HpiloXoA6Kipmvh_scD2ynEUhE7c",
  authDomain: "rolsatechsolutions.firebaseapp.com",
  projectId: "rolsatechsolutions",
  storageBucket: "rolsatechsolutions.firebasestorage.app",
  messagingSenderId: "663284555987",
  appId: "1:663284555987:web:1ed93ad09efb5d3e117426"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication 
const auth = getAuth();

//Getting the elements we need button 
const submitBtn = document.getElementById("login")

//This function validates the email address
function validateEmailInput() {

  let isValid = true 

  //Email error message
  const emailError = document.getElementById('emailerrormsg')
  //Email Input field
  const emailInput = document.getElementById("email-address")
  //Email Input value
  const email = emailInput.value

  //Pattern for validating email address
  let regex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

  let test = regex.test(email);

  if (email.length === 0) {
      //Email error message
      emailError.innerText = 'The email field cannot be empty, please enter a valid email address'
      emailInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else if (!test) {
      emailError.innerText = 'The email address you entered is invalid, Please enter a valid email address'
      emailInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else {
      emailError.innerText = ''
      emailInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }

  return isValid
}

//This function validates the Password 
function validatePassword() {

  let isValid = true 

  //Password error message
  const pwdError = document.getElementById('pwderrormsg')

  //Password input field
  const passwordInput = document.getElementById("password")

  //Password input value
  const password = passwordInput.value


  //Pattern for validating Password
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  let test = regex.test(password);

  if (password.length === 0) {
      //Password error message
      pwdError.innerText = 'The password field cannot be empty, please enter a valid password'
      passwordInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else if (!test) {
      pwdError.innerText = 'The password you entered is invalid, It must include uppercase letter, lowercase leteer, number and special characters'
      passwordInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
      }
  else {
      pwdError.innerText = ''
      passwordInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }

  return isValid
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const isEmailValid = validateEmailInput()
  const isPasswordValid = validatePassword()

  if (isEmailValid && isPasswordValid) {
          
      //input fields
      const email = document.getElementById("email-address").value
      const password = document.getElementById('password').value

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Logged in")
          //Clears all the input fields 
          const myForm = document.getElementById('form')
          myForm.reset()
        //get the pop up message element we need and the x sybmol
        let popUp = document.getElementById("pop-up")
        let remove = document.getElementById("remove")
        let text = document.getElementById("text")
    
        text.innerText = "Login successful"
        popUp.classList.add("show")
        remove.classList.add("show")
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        //get the pop up message element we need and the x sybmol
        let popUp = document.getElementById("pop-up")
        popUp.style.marginLeft = '380px'
        let remove = document.getElementById("remove")
        let text = document.getElementById("text")
    
        text.innerText = "Please enter the valid credentials"
        popUp.classList.add("show")
        remove.classList.add("show")
    });
  }
})
