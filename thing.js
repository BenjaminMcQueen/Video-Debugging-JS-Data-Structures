let yourArray = [true, 1, "", "", ""]; // Change this line

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Derf"
// Only change code above this line
console.log(myArray);

function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, "VIII", 9)
    arr.unshift("I", 2, "three")
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,1);
arr.splice(3);
// Only change code above this line
console.log(arr);

function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  function forecast(arr) {
    // Only change code below this line
    let narr = arr.slice(2, 4);
    return narr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) < 0){
      return false;
    }
    return true;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    arr.forEach( function(e) {
      if (e.indexOf(elem) < 0)
      {
        newArr.push(e)
      }
    });
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];
  
  myNestedArray[0][0] = [[[]], 'deep'];
  myNestedArray[0][0][0] = [[], 'deeper'];
  myNestedArray[0][0][0][0] = ['deepest']; //I @#$%ing hated this challenge.
  
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods['bananas'] = 13;
  foods['grapes'] =  35;
  foods['strawberries'] = 27
  // Only change code above this line
  
  console.log(foods);

  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity['data']['online'] = 45;
  // Only change code above this line
  
  console.log(userActivity);

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
    return foods[scannedItem];
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // Only change code above this line
  
  console.log(foods);

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if ('Alan' in userObj){
      if ('Jeff' in userObj){
        if ('Sarah' in userObj){
          return 'Ryan' in userObj;
        }
      }
    }
    return false;
    
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users)); //Hated this one, too.

  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let numOn = 0;
    for (const e in allUsers){
      numOn += + allUsers[e].online; //unary operator
    }
    return numOn;
    // Only change code above this line
  }
  
  console.log(countOnline(users)); // Hated this one the most so far.


  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    user.data.friends.push(friend);
    return user.data.friends
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));