function result(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = document.getElementById("result");
    let operator = document.getElementsByName("operator")[0].value;
    
        result.style.background="white";
        result.style.color='black';
        if(operator === '+'){
            result.value = num1 + num2;
        }else if(operator === '-'){
            result.value = num1 - num2;
        }else if(operator === '*'){
            result.value = num1 * num2;
        }else if(operator === '/'){
            if(num2 === 0){
                result.value = '연산불가';
                result.style.background='red';
                result.style.color='white';
            } else{
                result.value = num1 / num2;
            }
        }else if(operator === '%'){
            if(num2 === 0){
                result.value = '연산불가';
            } else{
                result.value = num1 % num2;
            }
        }
    }