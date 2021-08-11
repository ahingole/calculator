let screen = document.getElementById('screen');
buttons = document.querySelectorAll('td');
let Valuescreen = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('butten text', buttonText);
        if (buttonText == '*') {
            Valuescreen += buttonText;
            screen.value = Valuescreen;
        }
        else if (buttonText == 'C') {
            Valuescreen = " ";
            screen.value = Valuescreen;
        }
        else if ( buttonText=='backspace') {
            Valuescreen = '';
            // screen.value=screen.value.slice(0,-1);
            screen.value=screen.value.substring(0, screen.value.length-1);
            // screen.value=screen.value.substr(1, screen.value.length);



        }
        else if (buttonText == '=') {
            screen.value = eval(Valuescreen)

        }
        else {
            Valuescreen += buttonText;
            screen.value = Valuescreen;

        }

    })
}








// const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  

// // accept the number from the user through prompt box  
// const number1 = parseFloat(prompt ('Enter the first number: '));  
// const number2 = parseFloat(prompt ('Enter the second number: '));  

// let result; // declaration of the variable.  

// // use if, elseif and else keyword to define the calculator condition in JavaScript.  
// if (operator == '+') { // use + (addition) operator to add two numbers  
//     result = number1 + number2;  
// }  
// else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
//     result = number1 - number2;  
// }  
// else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
//     result = number1 * number2;  
// }  
// else {  
//     result = number1 / number2; // use / (division) operator to divide two numbers  
// }  

// // display the result of the Calculator  
// window.alert(" Result is" + result); 