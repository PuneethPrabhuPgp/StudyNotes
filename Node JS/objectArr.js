

let test = [{ "socre": 100, "name": "test1" }, { "socre": 500, "name": "test2" }, { "socre": 300, "name": "test3" }, { "socre": 500, "name": "test6" }, { "socre": 300, "name": "test7" }]


let sortArr = {}
for (let i = 0; i < test.length; i++) {
    let score = test[i]["socre"], name = test[i]["name"]
    if (sortArr[score]) {
        sortArr[score].push(name);
    } else {
        sortArr[score] = [name];
    }
}
console.log(sortArr)

var groupByKeys = function (test) {
    return test.reduce((rv, x) => {
        let score = x["socre"], name = x["name"]
        if (rv[score]) rv[score].push(name)
        else rv[score] = [name]
        return rv;
    }, {})
}
console.log(groupByKeys(test))

// var groupBy = function(xs, key) {
//     return xs.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   };

//   console.log(groupBy(['one', 'two', 'three'], 'length'));


function removeDuplicates(array) {
    return array.filter((item, index) => index === array.indexOf(item));
}

const arrayOfStrings = ['aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc'];

const arrayOfStringsWithoutDupes = removeDuplicates(arrayOfStrings);
console.log(arrayOfStringsWithoutDupes);


let arrVal = [1, 2, 2, 4, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5]
//console.log([...new Set(arrVal)])
function findDuplicates(arrVal) {
    let dupliactes = [];
    for (let i = 0; i < arrVal.length; i++) {
        for (let j = i + 1; j < arrVal.length; j++) {
            if (arrVal[i] === arrVal[j] && !dupliactes.includes(arrVal[i])) {
                dupliactes.push(arrVal[i])
            }
        }
    }
    return dupliactes;
}
console.log(findDuplicates(arrVal))

function findDup(arrVal) {
    const array = arrVal;
    const uniqueSet = new Set(array);
    const filteredElements = array.filter(currentValue => {
        if (uniqueSet.has(currentValue)) {
            uniqueSet.delete(currentValue);
        }
        else {
            return currentValue;
        }
    }
    );
    return [...new Set(filteredElements)]
}

console.log(findDup(arrVal))


// const arr = [...Array(100_000).keys()].fill(0, 2, 4).fill(9, 10, 14)
// console.log(arr)
// console.time("time")
// console.log(arr.sort((a, b) => a > b ? 1 : -1).filter((e, i, a) => a[i-1] === e))
// console.timeEnd("time")

const arr = [
    [1, 2, 3, 4, 5],
    [3, 4, 6, 7, 8, 2],
    [7, 2, 4, 9, 11, 15],
    [10, 12, 3, 7, 11]
];
const removeDuplicate = arr => {
    let map = {};
    let res = [];
    res = arr.map(el => {
        return el.filter(val => {
            if (map[val]) {
                return false;
            };
            map[val] = 1;
            return true;
        });
    });
    return res;
};
console.log(removeDuplicate(arr));
