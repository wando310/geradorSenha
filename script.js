
document.querySelector('.bnt-rendom').addEventListener('click',generatePassword)

const alphabetArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    '!', '@', '#', '$', '%', '&', '*',
    '/', '?', '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '0',
]

let count = 0

function generatePassword(){
    count++

    const countTotal = count < 10 ? '0'+count : count

    document.querySelector('.count-senha').innerHTML = `Senha Nº <span class="color"> ${countTotal}</span>` 

    const rendom = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom1 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom2 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom3 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom4 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom5 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom6 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom7 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom8 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom9 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom10 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom11 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]
    const rendom12 = alphabetArray[Math.floor(Math.random() * alphabetArray.length)]

    document.querySelector('.password').innerHTML = `< 
    ${rendom}
    ${rendom1}
    ${rendom2}
    ${rendom3}
    ${rendom4}
    ${rendom5}
    ${rendom6}
    ${rendom7}
    ${rendom8}
    ${rendom9}
    ${rendom10}
    ${rendom11}
    ${rendom12}
    >
    `
}