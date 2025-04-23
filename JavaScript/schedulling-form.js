// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInAnonymously} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
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
// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);
//Get firebase auth
const auth = getAuth(app);

//Getting the elements we need button 
const submitBtn = document.getElementById("schedule-btn")

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

    if (pNumber.length === 0) {
        //Email error message
        phonenoError.innerText = 'The phone number field cannot be empty, please enter a valid phone number'
        pNumberInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }else if (!test) {
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

//This function validates the radio selection for the service types
function validateServiceType() {
    
    let isValid = true 

    //service type error msg
    const serviceType = document.getElementById('sterrormsg')

    //Getting the service type values
    const consultation = document.getElementById('consultation')
    const installation = document.getElementById('installation')

    let selectedServiceType = ''

    if (!consultation.checked && !installation.checked) {
        serviceType.innerText = 'Please select one of the available service types'
        isValid = false;
    } else {
        serviceType.innerText = ''
        if (consultation.checked) {
            selectedServiceType = consultation.value
        } else if (installation.checked) {
            selectedServiceType = installation.value
        }
        
        console.log(selectedServiceType)
    }

    return {
        selectedServiceType: selectedServiceType,
        isValid: isValid
    };
}

//function vaidating the address fields
function validateAddress() {

    let isValid = true 
  
    //error messages ids
    const add1Error = document.getElementById('add1errormsg')
    const add2Error = document.getElementById('add2errormsg')

  
    //Getting the input fields 
    const add1Input = document.getElementById("add1")
    const add2Input = document.getElementById("add2")

  
    //Getting the value entered into the input fields
    const add1 = add1Input.value
    const add2 = add2Input.value

  
    //Function for reusable error message
    function getErrorMsg(fieldName, rulesDescription) {
        return `The ${fieldName} you entered is invalid. ${rulesDescription}`;
    }
  
    function getEmptyFieldError(fieldName) {
        return `The ${fieldName} field cannot be left empty. Please enter a valid ${fieldName}.`;
    }
  
    //Regex pattern to be used to validate addresses
    let regex = /^[A-Za-z0-9][A-Za-z0-9\s,.-]*$/
  
    //Regex tests
    const test1 = regex.test(add1)
    const test2 = regex.test(add2)
  
    //Address 1
    if (add1.length === 0) {
        //Address 1 error message
        add1Error.innerText = getEmptyFieldError('address')
        add1Input.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test1) {
        add1Error.innerText = getErrorMsg('address', 'It can only include letters, fullstop, commas, dash and spaces.')
        add1Input.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        add1Error.innerText = ""
        add1Input.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    //Address 2
    if (add2.length > 0 && !test2) {
        add2Error.innerText = getErrorMsg('address', 'It can only include letters, fullstop, commas, dash and spaces.')
        add2Input.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }else {
        add2Error.innerText = ""
        add2Input.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
}


//This function validates the postcode
function validatePostCode() {

    let isValid = true 
  
    //Email error message
    const postcodeError = document.getElementById('postcodeerrormsg')
    //Email Input field
    const postcodeInput = document.getElementById("postcode")
    //Email Input value
    const postcode = postcodeInput.value
  
    //Pattern for validating postcode
    let regex = /[Gg][Ii][Rr]0([Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
  
    let test = regex.test(postcode);
  
    if (postcode.length === 0) {
        //Email error message
        postcodeError.innerText = 'The postcode field cannot be empty, please enter a valid postcode'
        postcodeInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test) {
        postcodeError.innerText = 'The postcode you entered is invalid, Please enter a valid postcode'
        postcodeInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        postcodeError.innerText = ''
        postcodeInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }

  
//This function validates the city/town
function validateCityorTown() {

    let isValid = true 
  
    //Email error message
    const cityortownError = document.getElementById('cityortownerrormsg')
    //Email Input field
    const cityortownInput = document.getElementById("cityortown")
    //Email Input value
    const cityortown = cityortownInput.value
  
    //Pattern for validating city or town
    let regex = /^[A-Za-z][A-Za-z.\-,'\s]*$/
  
    let test = regex.test(cityortown);
  
    if (cityortown.length === 0) {
        //Email error message
        cityortownError.innerText = 'The city or town field cannot be empty, please enter your city or town'
        cityortownInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test) {
        cityortownError.innerText = 'The city or town you entered is invalid, Please enter your city or town'
        cityortownInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        cityortownError.innerText = ''
        cityortownInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }


//function vaidating the time and date
function validateTimeandDate() {

    let isValid = true 
  
    //error messages ids
    const timeError = document.getElementById('timeerrormsg')
    const dateError = document.getElementById('dateerrormsg')

  
    //Getting the input fields 
    const timeInput = document.getElementById("time")
    const dateInput = document.getElementById("date")

  
    //Getting the value entered into the input fields
    const time = timeInput.value
    const date = dateInput.value

  
    //Function for reusable error message
    function getEmptyFieldError(fieldName) {
        return `The ${fieldName} field cannot be left empty. Please enter a valid ${fieldName}.`;
    }
  
  
    //Time 
    if (time.length === 0) {
        //Address 1 error message
        timeError.innerText = getEmptyFieldError('time')
        timeInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    } else {
        timeError.innerText = ""
        timeInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    //Date
    if (date.length === 0) {
        dateError.innerText =  getEmptyFieldError('date')
        dateInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    } else {
        dateError.innerText = ""
        dateInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
}

//This function validates the additional info field
function validateAddinfo() {

    let isValid = true 
  
    //Additional information error message
    const addinfoError = document.getElementById('addinfoerrormsg')
    //Additional information text area
    const addinfoInput = document.getElementById("Info")
    //Additional information Input value
    const addinfo = addinfoInput.value
  
    //Pattern for validating additional information text area
    let regex = /^[a-zA-Z][a-zA-Z0-9!(),.?":|_\=\+;:'"\\/\s]*$/
  
    let test = regex.test(addinfo);
  
    if (addinfo.length > 0 && !test) {
        addinfoError.innerText = 'The additional information you entered is invalid, Please enter valid additional information'
        addinfoInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        addinfoError.innerText = ''
        addinfoInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }





submitBtn.addEventListener('click', (event) => {
    //Prevents the form from submitting
  event.preventDefault()

  const isNameValid = validateName()
  const isEmailValid = validateEmailInput()
  const isPhonenoValid = validatePhonenumber()
  const isServiceTypeValid = validateServiceType().isValid
  const isAddressValid = validateAddress()
  const isPostcodeValid = validatePostCode()
  const isCityorTownValid = validateCityorTown()
  const isTimeandDateValid = validateTimeandDate()
  const isAdditionalInfoValid = validateAddinfo()

  if(isNameValid && isEmailValid && isPhonenoValid && isServiceTypeValid && isAddressValid && isPostcodeValid && isCityorTownValid && isTimeandDateValid && isAdditionalInfoValid){
    
    const firstname = document.getElementById("firstname").value
    const middlename = document.getElementById("middlename").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email-address").value
    const pNumber = document.getElementById("phonenumber").value
    const serviceType = validateServiceType().selectedServiceType
    const add1 = document.getElementById('add1').value
    const add2 = document.getElementById('add2').value
    const postcode = document.getElementById('postcode').value
    const cityortown = document.getElementById('cityortown').value
    const time = document.getElementById('time').value
    const date = document.getElementById('date').value
    const addinfo = document.getElementById('Info').value


    //Signing in user anonymously to link their data to a unique user id 
    signInAnonymously(auth)
        .then(() => {
        const user = auth.currentUser;
        console.log("Signed in anonymously ");

        // Using the user id to store the data in the database
        setDoc(doc(database, 'users', user.uid, 'Appointment', 'Details'), {
            firstName: firstname,
            lastName: lastname,
            middleName: middlename,
            phoneNumber: pNumber,
            email: email,
            serviceType: serviceType,
            addressLineOne: add1,
            addresssLineTwo: add2,
            postCode: postcode,
            cityorTown: cityortown,
            time: time,
            date: date,
            additionalInformation: addinfo
        }).then(() => {

            //Clears all the input fields 
            const myForm = document.getElementById('form')
            myForm.reset()
            //get the pop up message element we need and the x sybmol
            let popUp = document.getElementById("pop-up")
            let remove = document.getElementById("remove")
            let text = document.getElementById("text")

            text.innerText = "Your appointment has been scheduled"
            popUp.classList.add("show")
            remove.classList.add("show")


        });
        }).catch((error)=> {
            console.error("Error signing in or saving data", error)
        });
} else{
    console.log("Form validation failed")
}
})