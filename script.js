class Calculator {
    constructor(firstOpTextElement, secondOpTextElement) {
        this.firstOpTextElement = firstOpTextElement  
        this.secondOpTextElement = secondOpTextElement  
        this.clear()
    }

    clear() {
        this.first_op = '';  // Initialized the operands
        this.second_op = '';  // Initialized the operands
        this.op = undefined;
    }

    delete(del) {
        this.second_op = this.second_op.toString().slice(0, -1)
    }

    appendNumber(number) {
        
        if(number === '.' && this.second_op.includes('.')) return //limits one time use for the "."
        this.second_op = this.second_op.toString() + number.toString();  // Appended the number to the second operand
    }

    chooseoperation(operation) {
        if (this.second_op === '') return;
        if (this.first_op !== '') {
            this.compute()
        }

        this.operation = operation
        this.first_op = this.second_op
        this.second_op = ''
        }

    

    compute() {
        let computation;
        const prev = parseFloat(this.first_op);
        const current = parseFloat(this.second_op);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {  // Changed 'op' to 'operation'
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.second_op = computation;
        this.operation = undefined;  // Changed 'op' to 'operation'
        this.first_op = '';
    }

    updateDisplay() {
        this.secondOpTextElement.innerText = this.second_op;
        this.firstOpTextElement.innerText = this.first_op;
    }
}

//linking constants to the HTML Elements

//Buttons HTML --> JS
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-del]')
const ACButton = document.querySelector('[data-all-clear]')

//Operands HTML --> JS
const firstOpTextElement = document.querySelector('[data-first_op]')
const secondOpTextElement = document.querySelector('[data-second_op]')

//Creating a new calculator object and passing the first and second operand elements to it
const calculator = new Calculator(firstOpTextElement, secondOpTextElement) 


//Numbers Buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})  

//Operations Buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseoperation(button.innerText)
        calculator.updateDisplay()
    })
})

//All-Clear Button
ACButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
    })

//delete Button
delButton.addEventListener('click', button => {
        calculator.delete()
        calculator.updateDisplay()
    })

//equals Button
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})