// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  let newArray = array.slice(0, 2)
  return newArray
}

const returnLastTwoDrivers = function (array) {
  let newArray = array.slice(-2)
  return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(arg) { return num * arg }
}

const fareDoubler = function (arg) { return createFareMultiplier(2)(arg) }

const fareTripler = function (arg) { return createFareMultiplier(3)(arg) }

function selectDifferentDrivers(array, fn) {
  return fn(array)
}
