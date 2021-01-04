let button = document.querySelector('button')
let email = document.querySelector('#exampleInputEmail1')
let password = document.querySelector('#exampleInputPassword1')


button.addEventListener('click',(e)=>{
    e.preventDefault()
    if (email.value.length<=4){
        email.value = 'low'
    }
    else {
        email.value = 'Correct'
    }
    if (password.value.length <=4){
        password.style.backgroundColor = 'red'
    } else {
        password.style.backgroundColor = 'green'
    }

})