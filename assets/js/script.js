const setResult = (sumedNumber, clear) => {
    return (
        document.getElementById('display').value = clear ? '' : document.getElementById('display').value + sumedNumber
    )
}

function removeDoubleOperator(expression) {
    let lastCaracter = expression.charAt(expression.length-1)
    let penultCaracter = expression.charAt(expression.length-2)
    let removedOperator = expression
    if (lastCaracter === penultCaracter) 
        removedOperator = expression.slice(0,-1)
    return removedOperator
}

function operation(operator){
    let fullExpression = document.getElementById('display').value + operator
    let clear = operator === 'clear' ? true : false
    let finalExpression

    if (fullExpression === '0' & operator === '0')
        fullExpression = 0

    if (!endsWithOperator(operator)){
        finalExpression = removeDoubleOperator(fullExpression)
    } else if(operator === '=') {
        finalExpression = handlingEval(fullExpression)
    }


    setResult(finalExpression, clear)
}


function handlingEval(operation) {
    try {
        
       if (eval(operation) == Infinity) {
            alert('Não é possível fazer divisão por zero')
            return '0'
       }
       return eval(operation)

    } catch(e) {        
        let clearNumber = operation
        if (endsWithOperator(clearNumber)){
            clearNumber = operation.slice(0 , -1)
        }

        return eval(clearNumber)
    }
}

function endsWithOperator(operator){
    let minus = operator.endsWith('-')
    let plus = operator.endsWith('+')
    let time = operator.endsWith('*')
    let dividedBy = operator.endsWith('/')
    let point = operator.endsWith('.')


    if (minus || plus || time || dividedBy || point){
 
        return true;
    }
    return false;
}