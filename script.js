let value = {
    initial: "",
    second: "",
    calculated: "",
    operator: ""
}

let operators = {
    add: () => {
        value.second+=value.initial;
        value.initial=""
        value.operator="plus"
    },
    minus: () => {
        value.second+=value.initial;
        value.initial=""
        value.operator="minus"
    },
    multiply: () => {
        value.second+=value.initial;
        value.initial=""
        value.operator="multiply"
    },
    divide: () => {
        value.second+=value.initial;
        value.initial=""
        value.operator="divide"
    },
    equals: function(){
        if (value.operator === "plus"){
        value.calculated = parseInt(value.initial) + parseInt(value.second)
        document.querySelector('#numdisplay').innerHTML = value.calculated
        value.second = value.calculated
        value.initial=""
        }
        else if (value.operator === "minus"){
        value.calculated = parseInt(value.second) - parseInt(value.initial)
        document.querySelector('#numdisplay').innerHTML = value.calculated
        value.second = value.calculated
        value.initial=""
        }
        else if (value.operator === "multiply"){
            value.calculated = parseInt(value.second) * parseInt(value.initial)
            document.querySelector('#numdisplay').innerHTML = value.calculated
            value.second = value.calculated
            value.initial=""
            }
        else if (value.operator === "divide"){
            value.calculated = Math.round((parseInt(value.second) / parseInt(value.initial) * 100 / 100))
            document.querySelector('#numdisplay').innerHTML = value.calculated
            value.second = value.calculated
            value.initial=""
            }
    },
    clear: function(){
        value.initial=""
        value.calculated=""
        value.second=""
        document.querySelector('#numdisplay').innerHTML = value.initial
    },
}

document.querySelector('#plus').addEventListener('click', () => {
    operators.add()
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#minus').addEventListener('click', () => {
    operators.minus()
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#multiply').addEventListener('click', () => {
    operators.multiply()
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#divide').addEventListener('click', () => {
    operators.divide()
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#nine').addEventListener('click', () => {
    value.initial+='9'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#eight').addEventListener('click', () => {
    value.initial+='8'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#seven').addEventListener('click', () => {
    value.initial+='7'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#six').addEventListener('click', () => {
    value.initial+='6'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#five').addEventListener('click', () => {
    value.initial+='5'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#four').addEventListener('click', () => {
    value.initial+='4'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#three').addEventListener('click', () => {
    value.initial+='3'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#two').addEventListener('click', () => {
    value.initial+='2'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#one').addEventListener('click', () => {
    value.initial+='1'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#zero').addEventListener('click', () => {
    value.initial+='0'
    document.querySelector('#numdisplay').innerHTML = value.initial
})
document.querySelector('#C').addEventListener('click', operators.clear)
document.querySelector('#equals').addEventListener('click', operators.equals)

;