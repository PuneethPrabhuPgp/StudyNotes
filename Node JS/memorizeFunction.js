// function that takes a function and returns a function
const memoize = (func) => {
  // a cache of results
  const results = {};
  // return a function for the cache of results
  return (...args) => {
    // a JSON key to save the results cache
    const argsKey = JSON.stringify(args);
    // execute `func` only if there is no cached value of clumsysquare()
    if (!results[argsKey]) {
      // store the return value of clumsysquare()
      results[argsKey] = func(...args);
    }
    // return the cached results
    return results[argsKey];
  };
};

// wrap clumsysquare() in memoize()
const clumsysquare = memoize(num => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            result++;
        }
    }
    return result;
});

console.log(clumsysquare(190));
console.log(clumsysquare(799));
console.log(clumsysquare(4000));
console.log(clumsysquare(7467));
console.log(clumsysquare(9666));

const fibonacci = (n) => {
    // if n is equal to 1, return the first term 1
    if (n == 1) {
      return 1;
    }
    // if n is equal 2, return the second term 1
    else if (n == 2) {
      return 1;
    }

    // else n is larger than two, return the sum of the previous two terms
    else 
      return fibonacci(n - 1) + fibonacci(n - 2);
};
// print the fiftieth term in the sequence
console.log(fibonacci(50));

const memoize1 = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const fibonacci1 = memoize1((n) => {
  // if n is equal to 1 return the first term 1
  if (n == 1) {
    return 1;
  }
  // if n is equal 2 1 return the second term 1
  else if (n == 2) {
    return 1;
  }

  // else n is larger than two, return the sum of the previous two terms
  else 
  return fibonacci(n - 1) + fibonacci(n - 2);
});
// print the fifth term in the sequence
console.log(fibonacci1(50));

let arr = [3, 4, 8, 9, 10]
let arr2 = [11, 3, 4, 24]

if(arr.length < arr2.length){
    return mergeArr(arr, arr2)
}else if(arr2.length < arr.length){
    return mergeArr(arr1, arr)
}else{
    return mergeArr(arr, arr2)
}

function mergeArr(target, source){
    for(let i =0; i <= source.length; i++){
        if(source[i].indexof(target) == -1) target.push(source[i])
    }
    return target;
}


let test = [{"socre":100, "name":"test1"},{"socre":500, "name":"test2"},{"socre":300, "name":"test3"},{"socre":500, "name":"test6"},{"socre":300, "name":"test7"}]


let sortArr = {}
for(let i=0; i<test.length; i++){
    let score = test[i]["socre"], name = test[i]["name"]
    if(sortArr[score]){
        sortArr[score].push(name)
    }else{
        sortArr[score] = [name]
    }
}
console.log(sortArr)

var groupByKeys = function(test){
    return test.reduce((rv, x)=>{
        let score = x["socre"], name = x["name"]
        if(rv[score])  rv[score].push(name)
        else rv[score] = [name]
        return rv;
    }, {})
}
console.log(groupByKeys(test))



function removeDuplicates(array) {
  return array.filter((item, index) => index === array.indexOf(item));
}

const arrayOfStrings = ['aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc'];

const arrayOfStringsWithoutDupes = removeDuplicates(arrayOfStrings);
console.log(arrayOfStringsWithoutDupes);


const target = { 

  job: 'Wizard', 

  spells: ['Dancing teacups', 'Disappear'], 

  pet: 'owl', 

  test: { name: "test" } 

}; 

const source = { 

  job: 'Druid', 

  spells: ['Talk to animals', 'Navigate'], 

  tool: 'staff', 

  age: 179, 

  test: { name: "Jhone", class: "LKG" } 

}; 




const merge = (target, source) =>{ 

  for(const key of Object.keys(source)){ 

      if(source[key] instanceof Object) {             

          if(Array.isArray(source[key])) Object.assign(source[key], [ ...source[key], ...target[key]]) 

          else Object.assign(source[key], merge(target[key], source[key])) 

      } 

  } 

  Object.assign(target || {}, source) 

  return target; 

} 

console.log(merge(target, source)) 





const s= "tuuuuuriiiiing"; 

const solution = function(s){ 

  if(s.length <= 1) return s; 

  if(s[0] == s[1] && s[1] == s[2] && s[2] == s[3]){ 

      return  solution(s.substring(1)) 

  }else{ 

      return s[0]+solution(s.substring(1)) 

  } 

  return ""; 

} 

console.log(solution(s)) 





function memorizedTo256(){ 

  var cache = {}; 

  return function(num){ 

      if(num in cache){ 

          console.log("cached value") 

          return cache[num] 

      }else{ 

          cache[num] = num+256; 

          return cache[num]; 

      } 

  } 

} 

var memorizedFunc = memorizedTo256(); 

memorizedFunc(20); 

memorizedFunc(20); 





// function asyncTask(){ 

//     return functionA() 

//     .then((valueA) => function(valueA)) 

//     .then((valueB) => function(valueB)) 

//     .then((valueC) => function(valueC)) 

//     .catch((err) => logger.error(err)) 




// } 




async function asyncTask(){ 

  try{ 

      const valueA = await functionA() 

      const valueB = await functionB(valueA) 

      const valueC = await functionC(valueB) 

      return awaitfunctionD(valueC) 

  }catch (err){ 

      logger.error(err) 

  } 




} 




const column = ["Date", "Number", "Size", "Location", "Age"], rows = ["2001", "5", "Big", "Synde", "25"]; 

const result = rows.reduce((result, field, index) => { 

  result[column[index]] = field 

  return result 

}, {}); 

console.log(result) 





const fib = (n, memo) =>{ 

  memo = memo || {}; 

  if(memo[n]) return memo[n] 

  if(n <= 1) return 1 

  return memo[n] = fib(n-1, memo) + fib(n-2, memo) 

} 

console.log(fib(12)) 




const fib1 = n => { 

  if(n<=1) return 1 

  return fib(n-1) + fib(n-2) 

} 




console.log(fib1(12)) 





let arr1 = [1, 2, 3, 4, 5] 

let arr22 = [3, 4, 5, 6] 

let arr21 = [...arr1, ...arr22] 

let mergeArr1 = [...new Set(arr21)] 

console.log(mergeArr1); 




function outer(){ 

  let arr = [], i; 

  for(i = 0; i <4; i++){ 

      arr[i] = function(){ return i;} 

  } 

  return arr; 

} 




let get_arr = outer(); 

console.log(get_arr[0]());console.log(get_arr[1]());console.log(get_arr[2]());console.log(get_arr[3]()); 




function outer() { 

  function create_Closure(val) { 

      return function () { 

          return val; 

      } 

  } 

  let arr = []; 

  let i; 

  for (i = 0; i < 4; i++) { 

      arr[i] = create_Closure(i); 

  } 

  return arr; 

} 

let get_arr1 = outer(); 

console.log(get_arr1[0]()); 

console.log(get_arr1[1]()); 

console.log(get_arr1[2]()); 

console.log(get_arr1[3]()); 





// const promise1 = Promise.resolve(3); 

// const promise2 = 42; 

// const promise3 = new Promise((resolve, reject) => { 

//   setTimeout(resolve, 100, 'foo'); 

// }); 




// Promise.all([promise1, promise2, promise3]).then((values) => { 

//   console.log(values); 

// }); 





// const promise1 = Promise.resolve(3); 

// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo')); 

// const promises = [promise1, promise2]; 




// Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status))); 





// const promise1 = Promise.reject(0); 

// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick')); 

// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow')); 




// const promises = [promise1, promise2, promise3]; 




// Promise.any(promises).then((value) => console.log(value)); 





// const promise1 = new Promise((resolve, reject) => { 

//     throw new Error('Uh-oh!'); 

//   }); 

 

//   promise1.catch((error) => { 

//     console.error(error); 

//   }); 




//   function checkMail() { 

//     return new Promise((resolve, reject) => { 

//       if (Math.random() > 0.5) { 

//         resolve('Mail has arrived'); 

//       } else { 

//         reject(new Error('Failed to arrive')); 

//       } 

//     }); 

//   } 

 

//   checkMail() 

//     .then((mail) => { 

//       console.log(mail); 

//     }) 

//     .catch((err) => { 

//       console.error(err); 

//     }) 

//     .finally(() => { 

//       console.log('Experiment completed'); 

//     }); 




const promise1 = new Promise((resolve, reject) => { 

setTimeout(resolve, 500, 'one'); 

}); 




const promise2 = new Promise((resolve, reject) => { 

setTimeout(resolve, 100, 'two'); 

}); 




Promise.race([promise1, promise2]).then((value) => { 

console.log(value); 

// Both resolve, but promise2 is faster 

}); 





const person  = { 

  fullName: function(){ 

      return this.firstName+"===="+this.lastName; 

  } 

} 




const person1 = { 

firstName:"John", 

lastName: "Doe" 

} 

const person2 = { 

firstName:"Mary", 

lastName: "Doe" 

} 




console.log(person.fullName.call(person1)) 





const per  = { 

  firstName:"Mary", 

  lastName: "Doe", 

  fullName: function(){ 

      return this.firstName+"===="+this.lastName; 

  } 

} 




const per1 = { 

firstName:"John", 

lastName: "Doe" 

} 





console.log(per.fullName.bind(per1)()) 




const add = (function (){ 

  let counter = 0; 

  return function () {counter +=1; return counter;} 

})(); 




console.log(add());console.log(add());console.log(add()); 

// Javascript program for checking
// balanced brackets
 
// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
     
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
 
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
            // Push the element in the stack
            stack.push(x);
            continue;
        }
 
        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
    // Check Empty Stack
    return (stack.length == 0);
}
 
// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");



let arrVal = [1, 2, 2, 4, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5]

function findDuplicates(arrVal){
  let dupliactes = [];
  for(let i = 0; i < arrVal.length; i++){
    for(let j=i+1; j < arrVal.length; j++){
      if(arrVal[i] == arrVal[j]){
        dupliactes.push(arrVal[i])
      }
    }
  }
  return dupliactes;
}
console.log(findDuplicates(arrVal))