//Getting the pop-up and the x 
let popUp = document.getElementById("pop-up")
let remove = document.getElementById("remove")

remove.addEventListener('click', ()=>{
    popUp.classList.remove('show')
    popUp.classList.add('hide')
})