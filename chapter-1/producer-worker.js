"use strict";
const redis=require("redis");
const client=redis.createClient();
const Queue=require("./queue");

var Q=new Queue("logs",client);
const MAX=5;
for(let i=0;i<MAX;i++){
    Q.push("hello this is log:"+i);
}


console.log("we have created "+MAX+" logs");
client.quit();