// console.log("Task 01 :- Start");
// console.log("Task 02");
// console.log("Task 03 :- End")

// console.log("Task 01 :- Start");
// function demo(){
//   setTimeout(() => {
//      console.log("Task 02");
//   }, 4000);
   
// }
// demo();
// console.log("Task 03 :- End")


console.log("Task 01 :- Start");


function feachdata(callback){
  setTimeout(() => {
    callback("data feach ...");
  }, 3000);
}
  feachdata((data)=>{
    console.log("data", data);
  });
 
console.log("Task 03 :- End")

