


const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
   

    if (form.email.value === "" || form.password.value === "") {
         alert("Please fill in all the fields!");
    };

    // const formData = new FormData(event.currentTarget);
    // console.log(formData);

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;
 
    const formData = {
        email,
        password,
    }
    console.log(formData);
    
    form.reset();
};







