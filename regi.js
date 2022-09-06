var button =  document.getElementById('login');
var email = document.getElementById('email');
var pass = document.getElementById('pass');

button.addEventListener('click', () => {
    if (email == 'singhvinni1184@gmail.com'){
        if (pass == 'viraaj08'){
            alert('Welcome');
        }
        else{
            alert('Wrong Password');
        }
    }
    else{
        alert('no email found');
    }
})