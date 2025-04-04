  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"


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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Getting the elements we need button 
const submitBtn = document.getElementById("sign-in")

storeUserData(){
  const firstNameInput = document.getElementById('firstname')
  const lastNameInput = document.getElementById('lastname')
  const middleNameInput = document.getElementById('middlename')
  const phonenumberInput = document.getElementById('phonenumber')
  const emailInput = document.getElementById("email-address")
  const passwordInput = document.getElementById("password")

  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const middleName = middleNameInput.value
  const phonenumber = phonenumberInput.value
  const email = emailInput.value
  const password = passwordInput.value 
  const userId = 0 
  
  await setDoc(doc(db, "Firstname", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
}

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
      //get the pop up message element we need and the x sybmol
      let popUp = document.getElementById("pop-up")
      let remove = document.getElementById("remove")
      let text = document.getElementById("text")

      text.innerText = "Account created"
      popUp.classList.add("show")
      remove.classList.add("show")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode)
    })
    }


);

sendEmailVerification(auth.currentUser)
.then(() => {
  // Email verification sent!
  // ...
})

