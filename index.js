const drivers=["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}


function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}
function appendDriver(name) {
  const newDrivers= [...drivers, name];
  return newDrivers;
}


function prependDriver(name) {
  const newDrivers= [Ralph]
  return newDrivers;
}

function removeLastDriver(name){
  drivers.shift(3);
  return drivers;
}
  

