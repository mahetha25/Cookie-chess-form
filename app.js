function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");


    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(input.type === "text" && validateUser(input))
            {
                nextSlide(parent,nextForm);
            } else if (input.type === 'email' && validateEmail(input)){
                nextSlide(parent,nextForm);
            } else if(input.type === 'number' && allnumeric(input)){
                nextSlide(parent,nextForm);
        } else {
            parent.style.animation = "shake 0.5s ease";
        }
    });
    });
}

function validateUser(user){
    if(user.value.length < 7) {
        error('rgb(189,87,87)');
        alert('Enter first and last name');
    } else {
        error("rgb(87, 189, 130)");
        return true;
    }
}

function validateEmail(email){
    
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        error("rgb(87, 189, 130)");
        return true;
    } else {
        error('rgb(189,87,87)');
        alert('Has to include @');
    }
}

function allnumeric(inputtxt){
    if(inputtxt.value.length < 3) {
        error('rgb(189,87,87)');
        alert('Congradulations on entering the Cookie-cup, on your arrival at the competion you will be screened for the Coronavirus.')
        return true;
    } else {
        alert('Enter your age');
        error("rgb(87, 189, 130)");
        
    }
   } 

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    document.body.style.backgroundColor = "rgb(87, 189, 130)";
}

function error(color) {
    document.body.style.backgroundColor = color;
}




animatedForm();
