
// console.log(string)

// const regExp=/[Yy]/



// // const regExp=new RegExp("a","i")




// console.log(string.match(regExp))


// const letter ="Aa1aaaaaBbb3bbCcccc2Dddd"
//flags
// const regExp=/[a-c]/ig
//d-numbers
//w-all
//g i - global
// const regExp=/[A-Z]/gi
// console.log(letter.replace(regExp,"*"))


// const phoneRegExp=/^\+996\d{3}-\d{2}-\d{2}-\d{2}/
// const phoneInput=document.querySelector(".phoneInput")
// const phoneCheck=document.querySelector(".phoneCheck")
// const phoneResult=document.querySelector(".phoneResult")

// phoneCheck.addEventListener('click',()=>{
//     if (phoneRegExp.test(phoneInput.value)) {
//         phoneResult.textContent="ok )"
//     } else{
//         phoneResult.textContent="not okay ("
//     }
// })
const mailRegExp=/^(?=.*[@.])[a-zA-Z0-9@.]$/
const passwordRegExp=/^.{4,16}$/

const mailInput=document.querySelector('.mailInput')
const passwordInput=document.querySelector('.passwordInput')
const loginResult=document.querySelector('.loginResult')
const check=document.querySelector('.Check')

check.addEventListener('click',()=>{
    if(mailRegExp.test(mailInput.value)){
        loginResult.textContent="Вы успешно прошли регистрацию!"
    } else{
        loginResult.textContent="Ошибка при вводе электронной почты."
    }
    if(passwordRegExp.test(passwordInput.value)){
    loginResult.textContent="Вы успешно прошли регистрацию!"
    } else(
        loginResult.textContent="Ошибка при вводе пароля."
    )
})
