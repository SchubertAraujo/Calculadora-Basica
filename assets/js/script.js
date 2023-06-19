const setResult = (sumedNumber, clear) => {
    return (
        document.getElementById('display').value = clear ? '' : sumedNumber
    )
}
let completedOperation = false
const getResult = () => {
    if (completedOperation) {
        completedOperation = false
        return ''
    } else {
        return document.getElementById('display').value
    }

}


function operation(key){
    let display = getResult()
    let fullExpression = display + key
    let clear = key === 'clear' ? true : false
    

    if (fullExpression === '0' & key === '0')
        fullExpression = 0


    if (endsWithOperator(display) & endsWithOperator(key)){
        fullExpression = display.slice(0,-1) + key;
    } else if(key === '=') {
        fullExpression = handlingEval(fullExpression.slice(0,-1))
        completedOperation = true
    }


    setResult(fullExpression, clear)
}


function handlingEval(operation) {
    try {
        
       if (eval(operation) == Infinity) {
            alert('Não é possível fazer divisão por zero')
            return '0'
       }
       if (operation == '')
        operation = 0
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