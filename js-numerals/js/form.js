// const Numeral = require('./numeral.js');
import Numeral from './numeral.js';

const Form = {

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

    numberField : function(event){
        if (event.key === 'Enter'){
            Form.submitField();
        }
        if (!/[0-9]/.test(event.key)){
            event.preventDefault();
        }
    },

    submitField : function(){
        const numStr = document.querySelector('[name="number"]').value;
        const text = Numeral.numberToString(numStr);
        document.getElementById('output').innerHTML = text;
    }

};

export default Form;
