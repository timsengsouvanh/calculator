let value = {
    initial: "",
    second: "",
    calculated: "",
}

let operators = {
    add: function(){
        value.calculated+=value.initial+value.second
    },
    subract: "",
    mulitply: "",
    equals: function(){
        alert(value.calculated)
    },
    clear: function(){
        value.initial=""
        document.querySelector('#numdisplay').innerHTML = value.initial
    },
}


let numAlert = () => alert(value.initial)

document.querySelector('#plus').addEventListener('click', () => {
    operators.add
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
document.querySelector('#C').addEventListener('click', operators.clear)
document.querySelector('#equals').addEventListener('click', operators.equals)

;
