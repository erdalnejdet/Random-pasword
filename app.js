const getRamdomLower= ()=>{
    return String.fromCharCode(Math.floor(Math.random()* 26)+97)
}
const getRamdomOpper= ()=>{
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65)
}
const getRamdomnumber= ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}


const getRamdomSymbol= ()=>{
    const Symbol = '!@$%&$*'
   return Symbol[Math.floor(Math.random()*Symbol.length)]
}

const randomFunctions = {getRamdomLower,getRamdomOpper,getRamdomnumber,getRamdomSymbol}

const generatePassword = ()=>{
    const length = 16
     let generatePassword =''
     for(let x = 0; x < length;x++)
     generatePassword += Object.values(randomFunctions) [Math.floor(Math.random()*4)]()
return generatePassword

    }

const spanResult = document.getElementById('result')
const generatebutton = document.getElementById('generate')
const clipboardbutton = document.getElementById('clipboard')


generatebutton.addEventListener('click',()=>{
    spanResult.innerText = generatePassword()
})

clipboardbutton.addEventListener('click',()=> {
    const password = spanResult.innerText
    if(!password)
    return
    const textarea = document.createElement('textarea')

textarea.value = generatePassword
document.body.appendChild(textarea)
textarea.select()
document.execCommand('copy')
textarea.remove()
Swal.fire(
  'Başarılı',
  'Kopyalandı',
  'success'
)


})



