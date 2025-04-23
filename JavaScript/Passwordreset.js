  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  // import {  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"


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
const submitBtn = document.getElementById("reset")

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

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const isEmailValid = validateEmailInput()

  if (isEmailValid) {
          
      //input fields
      const email = document.getElementById("email-address").value

      sendPasswordResetEmail(auth, email)
      .then(() => {
        //get the pop up message element we need and the x sybmol
        let popUp = document.getElementById("pop-up")
        let remove = document.getElementById("remove")
        let text = document.getElementById("text")

        text.innerText = "Password email reset will be sent if account with email address exists"
        popUp.style.marginLeft = '630px'
        popUp.classList.add("show")
        remove.classList.add("show")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }
})

