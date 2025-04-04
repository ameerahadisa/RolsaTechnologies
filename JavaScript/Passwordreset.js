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


submitBtn.addEventListener('click', (event) =>{
  //Stops the form from submitting
  event.preventDefault()

  //Getting the email and password values
  const emailInput = document.getElementById("email-address")
  const email = emailInput.value

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
);



