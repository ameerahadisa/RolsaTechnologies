function toggle(arrowDown, arrowUp, answerDiv){
    arrowDown.addEventListener('click', ()=>{
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        answerDiv.classList.remove("hide");
        answerDiv.classList.add("show");
    });
    
    arrowUp.addEventListener('click', ()=>{
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        answerDiv.classList.remove("show");
        answerDiv.classList.add("hide");
    });
}

const questionContainers = document.querySelectorAll('.Question');

questionContainers.forEach(questionContainer => {
    const arrowUp = questionContainer.querySelector('.up');
    const arrowDown = questionContainer.querySelector('.down');
    const answerDiv = questionContainer.querySelector('.answer');
    toggle(arrowDown, arrowUp, answerDiv);
});


