//hanle open/close modal account
    const btnLogin = document.querySelector('.nav-account--btn:first-child')
    const btnRegister = document.querySelector('.nav-account--btn:last-child')
    const modal = document.getElementById('modal')
    const closeItem = document.querySelector('.modal-close')
    var registerForm = document.querySelector('#form-register')
    var loginForm = document.querySelector('#form-login')
    const linkRegister = document.querySelector('.account-link--register')
    const linkLogin = document.querySelector('.account-link--login')
    const closeAccount = document.querySelector(' .close-modal')
function startAccount(){
    btnLogin.addEventListener('click', openModal)
    btnLogin.addEventListener('click', openLoginForm)
    linkLogin.addEventListener('click', openLoginForm)
    btnRegister.addEventListener('click', openModal)
    btnRegister.addEventListener('click', openRegisterForm)
    linkRegister.addEventListener('click', openRegisterForm)
    closeItem.addEventListener('click', closeModal)
    closeAccount.addEventListener('click', closeModal)
}
startAccount()

function openModal(){
    modal.style.display = 'block'
}
function closeModal(){
    modal.style.display = 'none'
}

function openLoginForm(){
    loginForm.style.display = 'block'
   registerForm.style.display = 'none'
}

function openRegisterForm(){
   registerForm.style.display = 'block'
    loginForm.style.display = 'none'
}



// check form
function Validator(options){
    const formLogin = document.querySelector(options.form_login)
    const formRegister = document.querySelector(options.form_register)
    function Validate(rule, inputElement){
       var message = inputElement.parentElement.querySelector(options.message)
       var errorMessage = rule.test(inputElement.value)
       var formGroup = inputElement.parentElement
       if(errorMessage){
            message.innerHTML = errorMessage
            formGroup.classList.add('active')
       }else{
            message.innerHTML = ''
            formGroup.classList.remove('active')
       }
       if(inputElement){
           inputElement.oninput = function(){
            message.innerHTML = ''
            formGroup.classList.remove('active')
           }
       }
    }
    options.rules.forEach(function(rule){
        var inputElement = formRegister.querySelector(rule.option)
        var inputElementLogin = formLogin.querySelector(rule.option)
        if(inputElement){
            inputElement.onblur = function(){
                Validate(rule, inputElement)
            }
        } 
        if(inputElementLogin){
            inputElementLogin.onblur = function(){
                    Validate(rule, inputElementLogin)
            }
        }
    })
}

Validator.isFullname = function(option){
    return {
        option,
        test(value){
            return value ? undefined : "Please input your name here!"
        }
    }
}
Validator.isFullnameRGT =  function(option){
    return {
        option,
        test(value){
            return value ? undefined : "Please input your name here!"
        }
    }
}
Validator.isPassword = function(option, min){
    return {
        option,
        test(value){
             return value >= min ? undefined : `Please input at least ${min} charectors!`
        }
    }
}
Validator.isPasswordRGT = function(option, min){
    return {
        option,
        test(value){
             return value.length >= min ? undefined : `Please input at least ${min} charectors!`
        }
    }
}
Validator.isPasswordAgain = function(option, password){
    return {
        option,
        test(value){
            return value === password() ? undefined : 'Password incorrect!'
        }
    }
}
Validator.isEmail = function(option){
    return {
        option,
        test(value){
            const checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return checkMail.test(value) ? undefined : 'Invalid email!'
        }
    }
}
Validator({
    form_login: "#form-login",
    form_register: "#form-register",
    message: ".form-message",
    rules:[
        Validator.isFullname('#fullname'),
        Validator.isPassword('#password', 6),
        Validator.isFullnameRGT('#fullname-rgt'),
        Validator.isEmail('#email'),
        Validator.isPasswordRGT('#password-rgt', 6),
        Validator.isPasswordAgain('#password-again', function(){
            return document.querySelector('#password-rgt').value
        })
    ]
})