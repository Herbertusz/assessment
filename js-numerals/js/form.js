import Numeral from './numeral.js';

/**
 * Form handler functions
 * @type {Object}
 */
const Form = {

    /**
     * WError messages
     * @type {Object}
     */
    error : {
        invalidNumber : 'The number you provided is invalid'
    },

    /**
     * Attach event handlers
     */
    init : function(){
        document.addEventListener('DOMContentLoaded', domEvent => {
            document.querySelector('[name="number"]').addEventListener('keypress', event => {
                Form.numberField(event);
            });
            document.querySelector('[name="submit"]').addEventListener('click', event => {
                Form.submitField();
            });
        });
    },

    /**
     * Number field keypress event handler
     * @param {Event} event - Event object
     */
    numberField : function(event){
        if (event.key === 'Enter'){
            Form.submitField();
        }
        if (!/^[0-9]$/.test(event.key)){
            event.preventDefault();
        }
    },

    /**
     * Submit button click event handler
     */
    submitField : function(){
        let text;
        const element = document.getElementById('output');
        const numStr = document.querySelector('[name="number"]').value;
        if (/^[0-9]+$/.test(numStr)){
            // valid number
            text = Numeral.numberToString(numStr);
            element.classList.remove('error');
        }
        else {
            // invalid number
            text = Form.error.invalidNumber;
            element.classList.add('error');
        }
        element.innerHTML = text;
    }

};

export default Form;
