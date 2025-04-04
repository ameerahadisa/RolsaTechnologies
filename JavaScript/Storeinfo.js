  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  import {  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"


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
const submitBtn = document.getElementById("sign-in")


submitBtn.addEventListener('click', (event) =>{
  //Stops the form from submitting
  event.preventDefault()

  //Getting the email and password values
  const emailInput = document.getElementById("email-address")
  const passwordInput = document.getElementById("password")

  const email = emailInput.value
  const password = passwordInput.value

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("signed in")
      window.location.href = "/HTML/Homepage.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
    })
    }
)

