// describe(`тестирование функции возведения в степень`,()=>{
//     it(`возведение 2 в степень 3`,()=>{
//         assert.equal(8,8);
//     });
// });

describe(`тестирование функции dowbleElem`,()=>{
    let ar=Array;
        it(`проверка тип массив `, ()=>{
            
            if(typeof ar===Array){
            assert.equal(dowbleElem(ar),ar);
            }
        });
        it(`проверка тип элемента массива `, ()=>{
           
            for(let i=0; i<=ar.length;i++){
            if(typeof ar[i]==="number"){
            assert.equal(dowbleElem(ar),ar);
            }
        }
        });

        

});

