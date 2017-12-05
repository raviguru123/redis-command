const redis=require("redis");
const client=redis.createClient();
const Queue=require("./queue");

const Q=new Queue("logs",client);

let popLogs=function(){
    Q.pop(function(err,replies){
        console.log("response come from queue:"+replies[0]+" and message:"+replies[1]);
        Q.size(function(err,size){
            console.log("ELement left"+size);
        });
        popLogs();
    });

   
}
popLogs();
