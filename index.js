// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  let arr = drivers.slice(0,2)
  return arr;
}

const returnLastTwoDrivers = function(drivers) {
  let arr = drivers.slice(-2);
  return arr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function (n) {return int*n}
}

const fareDoubler = function(int) {
  return createFareMultiplier(int)(2)
}

const fareTripler = function(int) {
  return createFareMultiplier(int)(3)
}


function selectDifferentDrivers(arrayOfDrivers, var1){
  return var1(arrayOfDrivers)
}
