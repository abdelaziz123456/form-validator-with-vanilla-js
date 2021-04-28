const form=document.querySelector('#form');
const userName=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const password2=document.querySelector('#password2');

const unError=document.querySelector('.username-err');
const emError=document.querySelector('.email-err');
const passError=document.querySelector('.password-err');
const pass2Error=document.querySelector('.password2-err');






// changing styling functions


const showError=function(elem,message){
    elem.classList.remove('success');
    elem.classList.add('error');
    message.classList.add('errtext')
    message.classList.remove('hidden')

}

const showSuccess=function(elem,message){
    elem.classList.add('success');
    elem.classList.remove('error');
    message.classList.add('hidden')
}



// event listener
form.addEventListener('submit',function(e){

    // preventDefault is very important to complete submitting and relaod the page
    e.preventDefault()


    //username input

    if(userName.value.length>=3){
        showSuccess(userName,unError)

    }else{

        unError.textContent=`this should be at least 3 characters`

        showError(userName,unError)
        
        
    }


     //email input


    if(email.value.includes('@') &&email.value.includes('com')&&email.value.includes('.')){
         showSuccess(email,emError)
      
     }else{

        emError.textContent=`it's not valid email`

        showError(email,emError)

    }



     if(password.value.length >= 6){
         showSuccess(password,passError)

     }else{
         passError.textContent=`it should be at least 6 characters`

         showError(password,passError)

     }

    if(password2.value.length >= 6){
        if(  password2.value===password.value){
            showSuccess(password2,pass2Error)

        }else{
            pass2Error.textContent=`two passwords are not identical`

         showError(password2,pass2Error)
        }
         

     }else{
         pass2Error.textContent=`it should be at least 6 characters`

         showError(password2,pass2Error)

     }

    

    
})
