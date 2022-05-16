const khayamPascal = (numb) => {
    
    return 11**numb
    
}    


// function btn(abc){

//     let inputValue = document.getElementById("number-reciving-input").value
//     khayamPascal(inputValue);

//     for (let i = 0; i <= inputValue; i++) {
//         console.log(khayamPascal(i))
//     }
// }


const subBtn = document.querySelector(".subBtn").addEventListener ("click", function(event) {
    // if (event.key === "Enter") {
        //     // let inputValue = document.getElementById("number-reciving-input").value
    //     document.getElementById("subBtn").click();
    // }
       
    let numberInput = document.getElementById("number-reciving-input").value;    
    let secondNumberInput = document.getElementById("second-number-reciving-input").value;
    
    if(numberInput === '' || secondNumberInput === ''){
        alert("Please Fill All Required Field");
        return false;
    };

    khayamPascal(secondNumberInput);
    
    for (let i = numberInput; i <= secondNumberInput; i++) {
        console.log(khayamPascal(i));  
    }    
});    





//styling inputs

let calculatingAreaStyle = document.querySelector("#calculating-area");
calculatingAreaStyle.style.marginBottom = '20px';


let numberInput = document.getElementById("number-reciving-input");
numberInput.style.border = 'none';
numberInput.style.outline = 'none';
numberInput.style.borderBottom = '1px solid black';

let secondNumberInput = document.getElementById("second-number-reciving-input");
secondNumberInput.style.border = 'none';
secondNumberInput.style.outline = 'none';
secondNumberInput.style.borderBottom = '1px solid black';


//delete button

const deleteBtn = document.querySelector('#deleter')
deleteBtn.addEventListener('click', function(event){
    const deletableSection = document.querySelector('#calculating-area');
    if(deleteBtn.checked){
        deletableSection.style.display = "none";
    } else {
        deletableSection.style.display = "block"
    }
});


//changing color button 

const colorChanger = document.querySelector('#colorChanger')

colorChanger.addEventListener('click', function (event){

    let firstLabel = document.querySelector('.number-input-label')
    let secondLabel = document.querySelector('.second-number-input-label')


    if(colorChanger.checked){
        numberInput.style.borderBottom = '1px solid red';
        secondNumberInput.style.borderBottom = '1px solid red';
        firstLabel.style.color = 'red'
        secondLabel.style.color = 'red'
    } else {
        numberInput.style.borderBottom = '1px solid black';
        secondNumberInput.style.borderBottom = '1px solid black';
        firstLabel.style.color = 'black'
        secondLabel.style.color = 'black'
    }

});