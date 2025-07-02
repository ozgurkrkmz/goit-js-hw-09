const form = document.querySelector('.feedback-form');
form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(form.elements);
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    // console.log(email);
    // console.log(message);
    localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }));
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    console.log({email, message});
    form.reset();
    localStorage.removeItem("feedback-form-state");
});

let data = localStorage.getItem("feedback-form-state");
data = JSON.parse(data);
if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
 }