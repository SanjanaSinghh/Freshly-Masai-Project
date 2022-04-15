function sai(){
    document.getElementById('paymentinfo').style.display='block'
   
}
function sanju(){
   num=document.getElementById('number').value
   n=document.getElementById('date').value
   u=document.getElementById('cvc').value
   if(num.length!==16||n==''||u==''){
       alert("please enter valid input data")
       window.location.reload()
   }
   alert("payment sucsefullllll")
   window.open('./home.html')
}

var c = document.getElementById('c')
c.addEventListener('click', function () {
var content = document.getElementById('show')
if (content.style.display === 'block') {
    content.style.display = 'none'
}
else {
    content.style.display = 'block'
}
})

var c1 = document.getElementById('c1')
c1.addEventListener('click', function () {
var content1 = document.getElementById('show1')
if (content1.style.display === 'block') {
    content1.style.display = 'none'
}
else {
    content1.style.display = 'block'
}
})

var c2 = document.getElementById('c2')
c2.addEventListener('click', function () {
var content2 = document.getElementById('show2')
if (content2.style.display === 'block') {
    content2.style.display = 'none'
}
else {
    content2.style.display = 'block'
}
})

var c3 = document.getElementById('c3')
c3.addEventListener('click', function () {
var content3 = document.getElementById('show3')
if (content3.style.display === 'block') {
    content3.style.display = 'none'
}
else {
    content3.style.display = 'block'
}
})

var c4 = document.getElementById('c4')
c4.addEventListener('click', function () {
var content4 = document.getElementById('show4')
if (content4.style.display === 'block') {
    content4.style.display = 'none'
}
else {
    content4.style.display = 'block'
}
})

var c5= document.getElementById('c5')
c5.addEventListener('click', function () {
var content5 = document.getElementById('show5')
if (content5.style.display === 'block') {
    content5.style.display = 'none'
}
else {
    content5.style.display = 'block'
}
})