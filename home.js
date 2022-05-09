document.querySelector('form').addEventListener('submit',signfrm)
var usdata;
if(localStorage.getItem('usdata')===null){
    usdata = []
}
else{
    usdata = JSON.parse(localStorage.getItem('usdata'));
}
function signfrm(){
    event.preventDefault()
    var usob = {
        email: document.querySelector('#mail').value,
        password: document.querySelector('#password').value,
    }
    if(usob.email=='' || usob.password==''){
   alert('Please fill all the required credentials')
   return
    }
    usdata.push(usob);
    localStorage.setItem('usdata',JSON.stringify(usdata));
    alert('User signed in succesfully!')
     window.location.href = 'Plan1.html'
}
