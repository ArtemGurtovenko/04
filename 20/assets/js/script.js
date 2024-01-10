// Функцію можно створити тількі у js через "function" або в html теж саме але тільки в тегу <script>
function task1() {
    console.log(arguments.length)
}
function task2() {
    const r = prompt('Enter r')
    const i = prompt('Enter i')
    if(r < i) {
        alert('-1')
    }
    else if (r > i) {
        alert('1')
    }
    else {
        alert('0')
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
