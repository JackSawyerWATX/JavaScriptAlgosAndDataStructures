var next = ("====> NEXT <====\n");

console.log('\n(1 )\n');

let yourArray = ['tom', 7, 'harry', true, 'james', 'william'];
console.log(yourArray.length);

console.log('\n(2) ' + next);

let myArray = ["a", "b", "c", "d"];

console.log(myArray);

console.log('\n(3) ' + next);

function mixedNumbers(arr) {

    arr.push('VII', 'VIII', 'IX');
    arr.unshift('I', 'II', 'III');
    arr.push("X");

    return arr;
}

console.log(mixedNumbers(['IV', 'V', 'VI']));

console.log('\n(4) ' + next);

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

console.log('\n(5) ' + next);

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

console.log('\n(6) ' + next);

function htmlColorNames(arr) {
    let startIndex = 0;
    let amountToDelete = 2;

    arr.splice(startIndex, amountToDelete, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

console.log('\n(7) ' + next);

function forecast(arr) {

    console.log(arr.slice(2, 4));
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

console.log('\n(8) ' + next);

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

console.log('\n(9) ' + next);

function spreadOut() {
    let fragment = ['a', 'G', 'thang'];
    let sentence = ['nothing', 'but', ...fragment, 'baby'];
    return sentence;
}

console.log(spreadOut());

console.log('\n(10) ' + next);

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
        return true;
    } return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

console.log('\n(11) ' + next);

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

console.log('\n(12) ' + next);

let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array', ['deep']],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [['deeper']]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[['deepest']]]]
];

console.log(myNestedArray);

console.log('\n(13) ' + next);

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
foods.strawberries = 27;

console.log(foods);

console.log('\n(14) ' + next);

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;

console.log(userActivity);

console.log('\n(15) ' + next);

let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods2[scannedItem];
}

console.log(checkInventory("apples"));

console.log('\n(16) ' + next);

let foods3 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
console.log(foods3);
delete foods3.plums;
delete foods3.oranges;
delete foods3.strawberries;
console.log(foods3);

console.log('\n(17) ' + next);

let users1 = {
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
    return 'Alan' in userObj &&
        'Jeff' in userObj &&
        'Sarah' in userObj &&
        'Ryan' in userObj;
}

console.log(isEveryoneHere(users1));

console.log('\n(18) ' + next);

const users2 = {
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

function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}

console.log(countOnline(users2));

console.log('\n(19) ' + next);

let users3 = {
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
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users3));

console.log('\n(20) ' + next);

let user4 = {
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
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user4, 'Pete'));

console.log('\n(END) ' + next);