"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
function zipListTheFunctionalWay(list1, list2) {
    const result = [];
    list1.forEach((element, index) => result.push(element, list2[index]));
    return result;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
