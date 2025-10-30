function sumNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
function sumNumbers2(firstNumber2, secondNumber2) {
    return firstNumber2 * secondNumber2
}
function sumNumbers3(firstNumber3, secondNumber3) {
    return firstNumber3 / secondNumber3

}

const result = sumNumbers(3, 10)

const result2 = sumNumbers2(3, 10)

const result3 = sumNumbers3(21, 3)

console.log(result)
console.log(sumNumbers(-2, 2))
console.log(result2)
console.log(result3)

//=======================

function sayHello(Mary) {
    return `HELLO ${Mary}`;
}
console.log(sayHello(`Mary`));


//=====================

const users = [
    {
        name: `Dima`,
        age: 24,
        isAdmin: true,
    },
    {
        name: `Elena`,
        age: 32,
        isAdmin: false,
    },
    {
        name: `Nicola`,
        age: 45,
        isAdmin: true,
    },
    {
        name: `Kris`,
        age: 18,
        isAdmin: false,
    }
]
let admins = 0
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == true) {
        admins++
    }
}
console.log(admins)


//======================


userOne =
    {
    name: `Nadin`,
    age: 36,
    other: {
        job: `cook`,
        otherInfo: {
            lang: `rus`,
            city: `Rostov`
        }
    }
}

console.log(userOne.other.otherInfo);