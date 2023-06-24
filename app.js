let x = 4
let y = 5
let z = x + y
console.log(z)

const _ =  require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)