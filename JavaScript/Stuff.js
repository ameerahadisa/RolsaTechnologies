submitBtn.addEventListener('click', (event) =>{
    //Stops the form from submitting
    event.preventDefault()
  
    //Getting the email and password values
    const emailInput = document.getElementById("email-address")
    const passwordInput = document.getElementById("password")
  
    const email = emailInput.value
    const password = passwordInput.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Logged in")
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
  )
  