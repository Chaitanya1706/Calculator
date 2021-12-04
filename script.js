var btns = document.getElementsByClassName('btn');
var display = document.getElementById('display-value')
var operator_value = document.getElementById('operator-value')
var operand1 = null;
var operand2 = null;
var operator = null;
var flag = false;
var op = null;
var afterAns = false;

function run(){
    var value = this.getAttribute('data-value');
    
    if(value=='AC'){
        display.innerText = '';
        operator_value.innerText = '';
        operand1 = null;
        operand2 = null;
        operator = null;
        op=null;
        afterAns = false;
        flag = false;
    }

    else if(value=='delete'){
        if(afterAns==true){
            operand1 = null;
            operand2 = null;
            operator = null;
            op=null;
            afterAns = false;
            flag = false;
        }
        var str = display.innerText;
        var l = str.length;
        display.innerText = str.substring(0,l-1);
        
    }

    else if(value=='-' || value=='+' || value=='*' || value=='/' || value=='%'){
        if(display.innerText==''&&value=='-'){
            display.innerText += value;
            
        }
        else{
            if(op!=null){
                operator = value;
                operator_value.innerText = operator;
            }
            else{
                
                op = value;
                if(display.innerText=='' || display.innerText=='AC'){
                    display.innerText = 'Error';
                }
                operator_value.innerText = op;
                if(operand1!=null){
                    var ans = eval(operand1 + " " + operator + " " + parseFloat(display.innerText));
                    operand1 = ans;
                    display.innerText = ans;
                }
                else
                    operand1 = parseFloat(display.innerText);
                
                operator = value;
                flag = true;
            }
        }
    }
    else if(value=='='){
        operator_value.innerText = '';
        operand2 = parseFloat(display.innerText);
        var ans = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = ans;
        afterAns = true;
    }
    else{
        if(afterAns==true){
            display.innerText = '';
            operator_value.innerText = '';
            operand1 = null;
            operand2 = null;
            operator = null;
            op=null;
        }
        afterAns = false;
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