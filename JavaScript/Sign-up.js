  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"
  //Importing bcrypt
  import bcrypt from "https://esm.sh/bcryptjs@2.4.3";

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
const database = getFirestore(app);

//Getting the elements we need button 
const submitBtn = document.getElementById("sign-in")

//function vaidating the name fields
function validateName() {

  let isValid = true 

  //error messages ids
  const firstNameError = document.getElementById('fnerrormsg')
  const lastNameError = document.getElementById('lnerrormsg')
  const middleNameError = document.getElementById('mnerrormsg')

  //Getting the input fields 
  const firstnameInput = document.getElementById("firstname")
  const lastnameInput = document.getElementById("lastname")
  const middlenameInput = document.getElementById("middlename")

  //Getting the value entered into the input fields
  const firstname = firstnameInput.value
  const lastname = lastnameInput.value
  const middlename = middlenameInput.value

  //Function for reusable error message
  function getErrorMsg(fieldName, rulesDescription) {
      return `The ${fieldName} you entered is invalid. ${rulesDescription}`;
  }

  function getEmptyFieldError(fieldName) {
      return `The ${fieldName} field cannot be left empty. Please enter a valid ${fieldName}.`;
  }

  //Regex pattern to be used to validate names
  let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s][A-Za-zÀ-ÖØ-öø-ÿ\s\-,'\.]*$/

  //Regex tests
  const test1 = regex.test(firstname)
  const test2 = regex.test(lastname)

  //firstname
  if (firstname.length === 0) {
      //First name error message
      firstNameError.innerText = getEmptyFieldError('first name')
      firstnameInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else if (!test1) {
      firstNameError.innerText = getErrorMsg('firstname', 'It can only include letters, fullstop, commas, apostrophe, dash and spaces')
      firstnameInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else {
      firstNameError.innerText = ""
      firstnameInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }


  //lastname
  if (lastname.length === 0) {
      //Last name error message
      lastNameError.innerText = getEmptyFieldError('last name')
      lastnameInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else if (!test2) {
      lastNameError.innerText = getErrorMsg('lastname', 'It can only include letters, fullstop, commas, apostrophe, dash and spaces')
      lastnameInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }
  else
  {
      lastNameError.innerText = ""
      lastnameInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }
  

  //middlename
  const test = regex.test(middlename)
  if (middlename.length > 0 && !test) {
      middleNameError.innerText = getErrorMsg('middlename', 'It can only include letters, fullstop, commas, apostrophe, dash and spaces.')
      middlenameInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  }else {
      middleNameError.innerText = ""
      middlenameInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }

  return isValid
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


//This function validates the phone number
function validatePhonenumber() {

  let isValid = true 

  //phone no error message
  const phonenoError = document.getElementById('phnoerrormsg')

  //Phone number input field
  const pNumberInput = document.getElementById("phonenumber")

  //Phone number input value
  const pNumber = pNumberInput.value

  //Pattern for validating email address
  let regex = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/

  let test = regex.test(pNumber);

  if (pNumber.length > 0 && !test) {
      phonenoError.innerText = 'The phone number you entered is invalid, Please enter a valid phone number'
      pNumberInput.style.boxShadow = '2px 5px #f44336'
      isValid = false;
  } else {
      phonenoError.innerText = ''
      pNumberInput.style.boxShadow = '0 2px #000'
      isValid = true;
  }

  return isValid
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const isNameValid = validateName()
  const isEmailValid = validateEmailInput()
  const isPasswordValid = validatePassword()
  const isPhonenoValid = validatePhonenumber()

  if (isNameValid && isEmailValid && isPasswordValid && isPhonenoValid) {
          //Function that hashes user's password
          function hashPassword() {
              //User's password
              const password = document.getElementById('password')
              const userPassword = password.value;

              //Testing to check if bcrypt is available
              if (typeof bcrypt === 'undefined') {
                  console.error('bcrypt is not loaded');
              } else {
                  console.log('bcrypt is loaded');
              }

              //Generating a salt using bcrypt
              const salt = bcrypt.genSaltSync(10);

              //Hashing the password using the generated salt
              const hash = bcrypt.hashSync(userPassword, salt);

              return hash
          }
          
          //input fields
          const firstname = document.getElementById("firstname").value
          const middlename = document.getElementById("middlename").value
          const lastname = document.getElementById("lastname").value
          const email = document.getElementById("email-address").value
          const password = document.getElementById('password').value
          const hashedPassword = hashPassword()
          const pNumber = document.getElementById("phonenumber").value

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

                  //create user
                  setDoc(doc(database, "users", user.uid), {
                      uid: user.uid,
                      displayName: firstname,
                      lastName: lastname,
                      middleName: middlename,
                      phoneNumber: pNumber,
                      email: user.email,
                      password: hashedPassword
                  })
                  .then(() => {
                      sendEmailVerification(auth.currentUser)
                          .then(() => {
                              // Email verification sent!
                              const name = localStorage.setItem('Name', firstname)
                              window.location.href = "Homepage.html";
                          });

                  })
              })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage, errorCode)
          });
  }
  else {
      console.log('failed')
  }
})