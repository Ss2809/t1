console.log("Task 01 :- Start");

function feachdata(callback) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("data feach ...");
    }, 3000);
  });
}

// feachdata()
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("Task 03 :- End");

async function getdata() {
   const data = await feachdata();
   console.log(data);
}

//getdata();

const getData =  async()=>{
  try {
    const data = await feachdata();
  console.log(data);
  } catch (error) {
    console.log(error)
  }
  
}
getData();