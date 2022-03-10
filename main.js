// object of users
var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },

    "Oybek": {
        name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },

    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }
}


// function avarage age
function avarageAge(object) {
    var s = 0, k = 0;
    for (var key in object) {
        k++;
        s += object[key].age;
    }
    return s / k;
}


// function sum salary
function sumSalary(object) {
    var s = 0;
    for (var key in object) {
        s += object[key].salary;
    }
    return s;
}


//take out to console
console.log(sumSalary(users));
console.log(avarageAge(users));