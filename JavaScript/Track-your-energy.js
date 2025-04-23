let submitBtn = document.getElementById('track-Btn')

//This function validates the name of applicance
function validateName() {

    let isValid = true 
  
    //Name of appliance error message
    const applianceError = document.getElementById('nameerrormsg')
    //Name of appliance Input field
    const applianceInput = document.getElementById("appliance")
    //Name of appliance Input value
    const appliance = applianceInput.value
  
    //Pattern for validating name of appliance
    let regex = /^[A-Za-z][A-Za-z.\-,'\s]*$/
  
    let test = regex.test(appliance);
  
    if (appliance.length === 0) {
        applianceError.innerText = 'The appliance field cannot be empty, please enter the name of the appliance'
        applianceInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test) {
        applianceError.innerText = 'The name of the appliance you entered is invalid, Please enter the name of the appliance'
        applianceInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        applianceError.innerText = ''
        applianceInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }

  //This function validates the energy used
function validateEnergy() {

    let isValid = true 
  
    //Energy used error message
    const energyusedError = document.getElementById('energyusederrormsg')
    //Energy used Input field
    const energyusedInput = document.getElementById("energyused")
    //Energy used Input value
    const energyused = energyusedInput.value
  
    //Pattern for validating energy used
    let regex = /^\d*\.?\d+$/
  
    let test = regex.test(energyused);
  
    if (energyused.length === 0) {
        //Email error message
        energyusedError.innerText = 'The energy used field cannot be empty, please enter the energy used in Watts per hour'
        energyusedInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test) {
        energyusedError.innerText = 'The energy you entered is invalid, Please enter the energy used in Watts per hour'
        energyusedInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        energyusedError.innerText = ''
        energyusedInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }

  //This function validates the number of hours
function validateHours() {

    let isValid = true 
  
    //Hours error message
    const hoursError = document.getElementById('hourserrormsg')
    //Hours Input field
    const hoursInput = document.getElementById("hours")
    //Hours Input value
    const hours = hoursInput.value
  
    //Pattern for validating hours
    let regex = /^\d*\.?\d+$/
  
    let test = regex.test(hours);
  
    if (hours.length === 0) {
        hoursError.innerText = 'The hours field cannot be empty, please enter the number of the hours used per day'
        hoursInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    } else if (hours > 24) {
        hoursError.innerText = 'The number of hours cannot be more than 24 hpurs, please enter the number of the hours used per day'
        hoursInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else if (!test) {
        hoursError.innerText = 'The number of the hours you entered is invalid, Please enter the number of the hours used per day'
        hoursInput.style.boxShadow = '2px 5px #f44336'
        isValid = false;
    }
    else {
        hoursError.innerText = ''
        hoursInput.style.boxShadow = '0 2px #000'
        isValid = true;
    }
  
    return isValid
  }

  
submitBtn.addEventListener('click', (event) => {
    //Prevents the form from submitting
  event.preventDefault()

  let isNameValid = validateName()
  let isEnergyValid = validateEnergy()
  let isHoursValid = validateHours()


    if(isNameValid && isEnergyValid && isHoursValid){
            //Name of appliance Input field
            const applianceInput = document.getElementById("appliance")
            //Name of appliance Input value
            const appliance = applianceInput.value

            //Energy used Input field
            const energyusedInput = document.getElementById("energyused")
            //Energy used Input value
            const energyused = energyusedInput.value
            
            //Hours Input field
            const hoursInput = document.getElementById("hours")
            //Hours Input value
            const hours = hoursInput.value

            const Section = document.getElementById('energytracker')


            const clonedSection = Section.cloneNode(true)

            const applianceElement = clonedSection.querySelector('#Appliance');
            if (applianceElement) {
                applianceElement.innerText =  appliance; // Update text for Appliance
            }
            
            const energyusedElement = clonedSection.querySelector('#Energycalculated');
            if (energyusedElement) {
                energyusedElement.innerText = (energyused/hours)/1000 ; // Update text for EnergyUsed
            }

            
            // **Append the cloned section to a container or the body**
            const container = document.getElementById('containerr'); // Assuming you want to append to #containerr
            container.appendChild(clonedSection);
    }
})
    