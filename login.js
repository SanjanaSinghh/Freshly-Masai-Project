document.querySelector('form').addEventListener('submit',logfn);
function logfn(){
var regisUs = JSON.parse(localStorage.getItem('usdata'));
if(regisUs==null){
    alert('not found')
    window.location.reload()
    return
}
event.preventDefault();
var givemail = document.querySelector('#email').value;
var givpass = document.querySelector('#password').value;

regisUs.forEach(usdata => {
   if(usdata.email===givemail && usdata.password===givpass){
       alert('Login Successful');
       localStorage.setItem('curser',name)
       sanjana=true
       window.location.href = 'index.html';
   }
  
});
if(sanjana==false){
   alert("invalid credentials")
}

}