function getNumber(value){
    document.getElementById('display').value += value   
}

function getOperation(action){
    clearAction = action == 'clear'
    equalAction = action == '='
    zeroValue = document.getElementById('display').value == '0'
    emptyValue = document.getElementById('display').value == ''
    endsinOperator = endsWithOperator(document.getElementById('display').value)

    let result = document.getElementById('display').value;
  
    if (clearAction) 
        result = ''
    else if(equalAction) 
        result = handlingEval(document.getElementById('display').value)
    else if (!zeroValue && !emptyValue && !endsinOperator) 
        result = document.getElementById('display').value + action   

    document.getElementById('display').value = result
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

function endsWithOperator(expression){
    let minus = expression.endsWith('-')
    let plus = expression.endsWith('+')
    let time = expression.endsWith('*')
    let dividedBy = expression.endsWith('/')
    let point = expression.endsWith('.')
    if (minus || plus || time || dividedBy || point){
        return true
    }
    return false
}