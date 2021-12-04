const EMPTY_SPACE = ' ';
const OPERATORS = ['/', '*', '-', '+'];

const validateInput = (args) => {
    const joined = args.join('').replace(new RegExp('\\++|\\*+|\\/+|\-+', 'g'), '');
    return (new RegExp('^((\\s)|([0-9]+(,[0-9]+)*))$', 'g')).test(joined);
}

const sumCommaSeparated = (string) => {
    const splitInput = string.split(',');
    let runningSum = 0;

    splitInput.forEach(strVal => {
        const numVal = Number(strVal);

        if (!Number.isNaN(numVal)) {
            runningSum += numVal;
        }
    });

    return `${runningSum}`;
}

const processInput = (args) => {

    if (!validateInput(args)) {
        return 'INVALID';
    }

    if (args[0] === EMPTY_SPACE) {
        return '0';
    }

    const joinedArgs = args.join('');

    if (OPERATORS.some(operator => joinedArgs.includes(operator))) {
        const opStack = [];
        let currNum = '';

        [...args[0]].forEach(char => {
            if ((new RegExp('^[0-9]+$', 'g')).test(char)) {
                currNum += char;
            } else if (char === ',' && currNum !== '') {
                opStack.push(Number(currNum));
                currNum = '';
            } else if (OPERATORS.includes(char)) {
                opStack.push(eval(`${opStack.pop()} ${char} ${(currNum === '' ? opStack.pop() : Number(currNum))}`))
                currNum = '';
            }
        });

        return `${Number.isNaN(opStack[0]) ? "INVALID" : opStack[0]}`;
    } else if (joinedArgs.includes(',')) {
        return sumCommaSeparated(args[0]);
    }

    return args.join(' ');
}

if (require.main === module && process.env.NODE_ENV !== 'test') {
    console.log(processInput(process.argv.slice(2)));
}

module.exports = {processInput, validateInput};

