const khayamPascal = (numb) => {
    
    return 11**numb
}

const numberRecived = document.getElementById("#number-reciving-input");
const numb = 4

for (let i = 0; i <= numb; i++) {
    console.log(khayamPascal(i))
}

