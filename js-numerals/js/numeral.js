const Numeral = {

    /**
     * Notations for the regular number names (can be expanded if needed)
     * @type {Array}
     */
    numberNotations : ['', 'thousand', 'million', 'billion', 'trillion'],

    /**
     * If the numberNotations should be expanded, the number text will be this
     * @type {String}
     */
    shouldExpandMessage : 'The numberNames array should be expanded to format this number into text!',

    /**
     * Reverse a string
     * @param {String} str - original strng
     * @return {String} reverted string
     */
    reverseString : function(str){
        return [...str].reverse().join('');
    },

    /**
     * Convert a 3-digits number chunk to text
     * @param {String} numStr - the number in string form
     * @return {String} the number in english text format
     */
    numberPartToString : function(numStr){
        let a, b, c;
        const num = Number(numStr);
        numStr = (`000${numStr}`).slice(-3);  // pad with leading 0-s
        const rev = Numeral.reverseString(numStr);
        const numbers = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
        ];
        const preDecimals = [
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        const decimals = [
            '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        const A = num % 10;
        const B = Math.floor(num / 10) % 10;
        const C = Math.floor(num / 100);
        a = numbers[A];
        b = decimals[B];
        c = `${numbers[C]} hundred`;
        if (B === 1){
            a = '';
            b = preDecimals[A];
        }
        if (num > 20 && a !== '' && b !== ''){
            a = `-${a}`;
        }
        if (C === 0){
            c = '';
        }
        if (`${b}${a}` !== '' && c !== ''){
            c = `${c} and `;
        }
        return `${c}${b}${a}`;
    },

    /**
     * Convert a number to text
     * @param {String} numStr - the number in string form
     * @return {String} the number in english text format
     */
    numberToString : function(numStr){
        let numberNames, reverseChunks;
        const nameArray = [];
        const num = Number(numStr);
        if (num > 1000 && num < 2000){
            // handle this exceptional case
            numberNames = ['', 'hundred'];
            reverseChunks = Numeral.reverseString(numStr).match(/.{1,2}/g).map(chunk => Numeral.reverseString(chunk));
            reverseChunks.forEach((chunk, index) => {
                let part = Numeral.numberPartToString(chunk) &&
                    `${Numeral.numberPartToString(chunk)} ${numberNames[index]}`;
                if (chunk !== '00' && index === 0){
                    part = `and ${part}`;
                }
                nameArray.push(part);
            });
        }
        else {
            // regular case
            numberNames = Numeral.numberNotations;
            reverseChunks = Numeral.reverseString(numStr).match(/.{1,3}/g).map(chunk => Numeral.reverseString(chunk));
            if (reverseChunks.length > numberNames.length){
                return Numeral.shouldExpandMessage;
            }
            else {
                reverseChunks.forEach((chunk, index) => {
                    let part = Numeral.numberPartToString(chunk) &&
                        `${Numeral.numberPartToString(chunk)} ${numberNames[index]}`;
                    if (chunk[0] === '0' && (chunk !== '000' || index !== 0)){
                        part = `and ${part}`;
                    }
                    nameArray.push(part);
                });
            }
        }
        return nameArray.reverse().join(' ').trim().replace(/\s+/g, ' ');
    }

};

// module.exports = Numeral;
export default Numeral;
