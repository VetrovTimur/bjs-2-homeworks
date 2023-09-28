function compareArrays(arr1, arr2) {
    return arr1.every((el, i) => el === arr2[i] && arr1.length === arr2.length )
}

function getUsersNamesInAgeRange(users, gender) {
    return users.
    filter(user => user.gender === gender).
    map(user => user.age).
    reduce((average, userAge, index, array) => average + userAge / array.length, 0);
}