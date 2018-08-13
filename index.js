// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// ;

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i){
 return function fareMultiplier(fare){
        return i*fare
 };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
  if (func === returnFirstTwoDrivers){
      return returnFirstTwoDrivers()
  }
  else if (func === returnLastTwoDrivers){
    return returnLastTwoDrivers()
  }
};
