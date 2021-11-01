


function dowbleElem(ar) {
  let arr = ar;
  if ( Array.isArray(arr)) {
    const dowbleArr = arr.map(function (item) {
      return item * 2;
    });
    console.log(dowbleArr);
  } else {
  alert('Не массив');
  }
  

};

// function dowbleElem(ar) {
//   let arr = ar;
//   if ( Array.isArray(arr)) {
//     for(let i=0; i<=arr.length;i++){
//       if(arr[i]===Number){
//         const dowbleArr = arr.map(function (item) {
//           return item * 2;
//         });
//         console.log(dowbleArr);
//       } else {
        
//         alert('Массив содержит не числовое значени');
//         break;

//       }

//     }
    
//   } else {
//   alert('Не массив');
//   }
  

// };