"use strict";
const redis=require("redis");
const client=redis.createClient();

var upVote=function(id){
    var key="article:"+id+":votes";
    client.incr(key);
}

var downVote=function(id){
    var key="article:"+id+":votes";
    client.decr(key);
}

var showResults=function(id){
    var headlinekey="article:"+id+":headline";
    var key="article:"+id+":votes";
    client.mget([headlinekey,key],function(err,result){
        console.log("result=",result,key);
    });
}

downVote(128);
showResults(128);
client.quit();

