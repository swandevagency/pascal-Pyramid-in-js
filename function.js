const khayamPascal = (numb) => {
    
    return 11**numb
 
}



function btn(abc){

    let inputValue = document.getElementById("number-reciving-input").value
    khayamPascal(inputValue);

    for (let i = 0; i <= inputValue; i++) {
        console.log(khayamPascal(i))
    }
}







