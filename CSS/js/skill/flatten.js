const _ = require('lodash')
const arr = [99, 0, 33, [101,[300, 200], 202], 1, 2]
const arr2 = [2, 1, 2]
const users = [
    {
        user: 'fred',
        age: 12
    },
    {
        user: 'vladimir',
        age: 70
    },
    {
        user: 'fred',
        age: 30
    },
    {
        user: 'vladimir',
        age: 20
    },
]
const sortedUser = _.sortBy(users, ['user', 'age'])
console.log(_.uniq(arr2))
console.log(sortedUser)
const flattenArr1 = _.flattenDeep(arr)
console.log(flattenArr1)