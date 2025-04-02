
const energyUsed = document.getElementById('energyused');

const hours = document.getElementById('hours')

function validateApplianceName(event){
    event.preventDefault();

    const errorMessage = document.querySelector('.error')
    const appliance = document.getElementById('appliance');
    let applianceName = appliance.value.trim();
    let appliancevalue = applianceName.replace(/\s+/g, "");
    let regex = /^[a-zA-Z]*$/;
    let test = regex.test(appliancevalue);

    if(applianceName.length === 0){
        errorMessage.innerText = "Please enter the name of your appliance"
        appliance.style.boxShadow = '2px 5px #f44336'
    } 
    else{
        if(test === false){
            errorMessage.innerText = "Name of appliance can only contain letters"
            appliance.style.boxShadow = '2px 5px #f44336'
        }
        else{
            errorMessage.innerText = ""
            appliance.style.boxShadow = '0 2px #000'
        }
    }
}

function validateEnergyUsed(event){
    event.preventDefault();

    const errorMessage = document.querySelector('.error')
    const energyUsed = document.getElementById('energyused');
    let energyUsed2 = energyUsed.value.trim();
    let energyusedValue = energyUsed2.replace(/\s+/g, "");
    let regex = /^[\d]*$/;
    let test = regex.test(energyusedValue);

    if(energyUsed.length === 0){
        errorMessage.innerText = "Please enter the energy used by the appliance in watts per hour"
        energyUsed.style.boxShadow = '2px 5px #f44336'
    } 
    else{
        if(test === false){
            errorMessage.innerText = "Energy used can only contain numbers"
            energyUsed.style.boxShadow = '2px 5px #f44336'
        }
        else{
            errorMessage.innerText = ""
            energyUsed.style.boxShadow = '0 2px #000'
        }
}
}

const form = document.querySelector(".track")

form.addEventListener('submit', (e) => {
    validateApplianceName(e);
    // validateEnergyUsed(e)
    // validateApplianceName(e)
});
// form.addEventListener('submit', validateEnergyUsed);

energyUsed.addEventListener('change', validateEnergyUsed)