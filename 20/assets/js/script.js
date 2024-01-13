// function expression, arrow function IIFE
function task1() {
    console.log(arguments.length)
}
function task2(r, i) {
    let r = 0
    let i = 0
    if(r < i) {
       return -1
    }
    else if (r > i) {
        return 1
    }
    else {
       return 0
    }
}
function factorial(r = 1) {
    let result = 1
    for(let i=1;i<=r;i++) {
        result *= i 
    }
    return result
}
function task4(r, i, n) {
    let c = (r*100) + (i*10) + n 
    return c
}
function task5(r, i) {
    if(r===undefined || i===undefined) {
        return r*r || i*i
    }
    else {
        return r*i
    }
    
}
// Часть завдань "Норма" не встигаю зробити, прошу мене вибачити. 
