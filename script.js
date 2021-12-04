var btns = document.getElementsByClassName('btn');
var display = document.getElementById('display-value')
var operator_value = document.getElementById('operator-value')
var operand1 = null;
var operand2 = null;
var operator = null;
var flag = false;
var op = null;

function run(){
    var value = this.getAttribute('data-value');
    
    if(value=='AC'){
        display.innerText = '';
        operator_value.innerText = '';
        operand1 = null;
        operand2 = null;
        operator = null;
        op=null;
    }

    else if(value=='-' || value=='+' || value=='*' || value=='/' || value=='%'){
        if(op!=null){
            operator = value;
            operator_value.innerText = operator;
        }
        else{
            operator = value;
            op = value;
            flag = true;
            if(display.innerText=='' || display.innerText=='AC'){
                display.innerText = 'Error';
            }
            operator_value.innerText = operator;
            if(operand1!=null){
                var ans = eval(operand1 + " " + operator + " " + parseFloat(display.innerText));
                operand1 = ans;
            }
            else
                operand1 = parseFloat(display.innerText);
        }
    }
    else if(value=='='){
        operator_value.innerText = '';
        operand2 = parseFloat(display.innerText);
        var ans = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = ans;
    }
    else{
        op = null;
        if(display.innerText=='Error' || display.innerText=='AC'){
            display.innerText = '';
        }

        if(flag==true){
            display.innerText = '';
            flag = false;
        }

        display.innerText += value;
    }
}

for(var i = 0;i<btns.length;i++){
    btns[i].addEventListener('click',run);
}