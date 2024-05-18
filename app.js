const form = document.getElementById('form');
const button = document.getElementById('button');
const email = document.querySelector('.email');

console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value;

    if (!validEmail(emailVal) || emailVal === '') {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
    console.log(emailVal)
   
});


//validate email
function validEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  }