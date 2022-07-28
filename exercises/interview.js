function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time)

    })
}

// Promise.all([
//         showText('hi', 1000),
//         Promise.resolve('there'),
//         Promise.resolve('work')
//
//     ]
// ).then((value) => {
//     console.log(value)
// }).catch(err => {
//     console.log(err)
// })
//
function myPromiseSome(promises) {
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((res) => {
                result.push(res);
                if (promises.length-1 === result.length) {
                    resolve(result)
                }
            }).catch((err) => console.log(err));
        })
    })
}

function myPromiseAll(promises) {
    let result = []
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((res) => {
                result.push(res);
                if (promises.length-1 === result.length) {
                    resolve(result)
                }
            }).catch((err) => reject(err));
        })
    })
}

console.log(new Date())
myPromiseSome([
        showText('hi', 1000),
        showText('there', 5000),
        showText('work', 3000),
        showText('end', 1000),
        Promise.reject('error')


    ]
).then((value) => {
    console.log(value)
    console.log(new Date())
}).catch(err => {
    console.log(err)
    console.log(new Date())
})

// function add5(a) {
//     return a + 5
// }
//
// function sub3(a) {
//     return a - 3
// }
//
// function mul2(a) {
//     return a * 2
// }
//
// const compose = (...functions) => {
//     return (args) => {
//         return functions.reduceRight((arg, fn) => {
//             return fn(arg)
//         }, args)
//     }
// }
//
// const pip = (...functions) => {
//     return (args) => {
//         return functions.reduce((arg, fn) => {
//             return fn(arg)
//         }, args)
//     }
// }
//
//
// console.log(compose(add5, sub3, mul2)(3))
// console.log(pip(add5, sub3, mul2)(3))


// function a(){
//     const test=(v)=>{
//         setTimeout(()=>{
//             console.log(v)
//         },1000)
//     }
//     for(var i=0 ;i<3;i++){
//         test(i)
//     }
//
// }
// a()

// person={
//     name:'narattom',
//     hello: function (hi){
//         console.log(this.name+' says '+hi)
//     }
// }
//
// person1={
//     name:'vikram'
// }
// person.hello('world')
// person.hello.call(person1,'eon')
// person.hello.apply(person1,['eon'])
// const fn1=person.hello.bind(person1)
// fn1('world')
