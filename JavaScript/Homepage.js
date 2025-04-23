const name = localStorage.getItem('Name');
console.log('name', name)
let displayName = document.getElementById('username')

displayName.innerText = name

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInAnonymously  } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbzB4HpiloXoA6Kipmvh_scD2ynEUhE7c",
    authDomain: "rolsatechsolutions.firebaseapp.com",
    projectId: "rolsatechsolutions",
    storageBucket: "rolsatechsolutions.firebasestorage.app",
    messagingSenderId: "663284555987",
    appId: "1:663284555987:web:1ed93ad09efb5d3e117426"
  };

// Initialize Firebase, auth and database
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);


//Submit-button to submit the user's input
const submitBtn = document.getElementById("sub-btn")



//This function stores the data into the database
function databaseStorage(event){
    //Prevents the form from being submitted
    event.preventDefault();
    
    //input fields
    const email = document.getElementById("email-address").value

    //Email error message
    const emailError = document.getElementById('emailerrormsg')

    //Signing in user anonymously to link their data to a unique user id 
    signInAnonymously(auth)
    .then(() => {
      const user = auth.currentUser;
      console.log("Signed in anonymously ");
      // Using the user id to store the email address
      setDoc(doc(database, 'users', user.uid, 'Info', 'Newsletter'), {
          Email: email,
          Subscribed:true
      });
      //Clears all the input fields 
      const myForm = document.getElementById('form')
      myForm.reset()
      //Success message
      emailError.innerText = 'You have subscribed to our newsletter'
      emailError.style.color = '#108b49'
      emailError.style.fontSize = '14px'
      isValid = false;

      
  })
  .catch((error) => {
    console.error("Anonymous sign-in failed ", error);
  });

}


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

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    let validEmail = validateEmailInput();
    if (!validEmail) return;

    await databaseStorage(event)
})