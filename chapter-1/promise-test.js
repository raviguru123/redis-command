var callme=function(){
    return new Promise((resolve,reject)=>{
         resolve("this is the response from promise");
        //reject("Error occured during in function");
    })
}


callme().then(result=>{
    console.log("RESULT:",result);
    throw new Error("erro come from then");
}).catch(err=>{
    console.log("ERROR:",err.message);    
});

// callme().then(result=>{
//     console.log("RESULT:",result);
//     throw new Error("erro come from then");
// },err=>{
//     console.log("ERROR:",err);
// });


// uncaughtException
process.on("uncaughtException",function(err){
    console.log("ERROR HANDLE IN PROCESS EVENT",err);
})


console.log("same tick");