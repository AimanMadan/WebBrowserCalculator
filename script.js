class Calculator {
    constructor(firstOpandTextElement, secondOpandTextElement) {
        this.firstOpandTextElement = firstOpandTextElement
        this.secondOpandTextElement = secondOpandTextElement
        this.clear()
    }

    clear() {

        this.first_op ='';
        this.second_op ='';
        this.op = undefined;
    }

    delete() {
        
    }

    appendNumber(number) {

    }

    chooseOp(op) {

    }

    compute() {

    }

    updateDisplay() {

    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-op]')
const equalsButtons = document.querySelector('[data-equals]')
const delButtons = document.querySelector('[data-del]')
const ACButton = document.querySelector('[data-all-clear]')

const firstOpandTextElement = document.querySelector('[data-first_op]')
const secondOpandTextElement = document.querySelector('[data-second_op]')

