function sortArr(arr, order) {
    if (order === 'asc') {
        return (arr.sort((a, b) => {
            return a - b
        }))
    } else if (order === 'desc') {
        return (arr.sort((a, b) => {
            return b - a
        }))
    }
}

//sortArr([14, 7, 17, 6, 8], 'asc')


function argumentInfo() {
    let typeCount = new Map

    for (let obj of arguments) {
        let type = typeof obj
        if (!typeCount.has(type)) {
            typeCount.set(type, 0)
        }
        let oldValue = typeCount.get(type)
        typeCount.set(type, oldValue + 1)
        console.log(`${type}: ${obj}`)
    }

    [...typeCount].sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`))
}

console.log(argumentInfo('cat', 42, function () { console.log('Hello world!') }))


function add(){
    
}
