function FibonacciPromise(n) {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject();
        } else {
            if (n < 2) {
                resolve(n)
            } else {
                let pre_1 = 1; let pre_2 = 1; let value;
                for (let i = 2; i < n; i++) {
                  value = pre_1 + pre_2;
                  pre_1 = pre_2;
                  pre_2 = value;
                }
                resolve(value);
            }
        }
    });
}


function do_reject(){
    console.log('value not supported');
}

function do_resolve(value){
    console.log('value is good = ' + value);
}

console.log('before')
FibonacciPromise(10).then( do_resolve, do_reject)
console.log('after')

console.log('before')
FibonacciPromise(-10).then( do_resolve, do_reject)
console.log('after')

// сначала отрабатывает console.log и только после всего FibonacciPromise
// Обещания можно передавать по цепочке, то есть, при успешном выполнении операции
// можно вернуть новое обещание и таким образом получить последовательную операцию. Вот пример:
MyFunction()
    .then(() => { return new Promise(...)}, () => {...} )
    .then(() => { return new Promise(...)}, () => {...} )
    .then(() => { return new Promise(...)}, () => {...} )
    .then(() => { return new Promise(...)}, () => {...} )
    .catch(err => {...});
