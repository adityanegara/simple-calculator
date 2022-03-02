alert("testing one");
const inputOne = document.getElementById('numberOne');
const inputTwo = document.getElementById('numberTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () => {
    const inputOneValue = inputOne.value;
    const inputTwoValue = inputTwo.value;
    if(validation(inputOneValue, inputTwoValue)){
        result.innerHTML = parseInt(inputOne.value) + parseInt(inputTwo.value);
    }else{

    }
});

const validation = (inputOne, inputTwo) =>{
    console.log(inputOne);
    console.log(inputTwo);
    if((numberOne == false)  || (numberTwo == false) || (isNaN(numberOne)) || (isNaN(numberTwo))){
        return false;
    }else{
        return true;
    }
}

