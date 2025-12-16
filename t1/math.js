function add(a,b){
  return a+b;
}

const name  = "Sushil"


function currentDate(){
  return new Date().toTimeString();
}

function currentYear(){
  return new Date().getFullYear();
}



module.exports = {
  add,
  name,
  currentDate,
  currentYear,
};
