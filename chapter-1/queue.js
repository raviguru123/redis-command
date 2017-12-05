function Queue(name,redisClient){
    this.redisClient=redisClient;
    this.queue=name;
    this.queueKey="queues:"+name;
    this.timeout=0;
}

Queue.prototype.size=function(callback){
    this.redisClient.llen(this.queueKey,callback)
}

Queue.prototype.push=function(item){
    this.redisClient.lpush(this.queueKey,item);
}

Queue.prototype.pop=function(callback){
    this.redisClient.brpop(this.queueKey,this.timeout,callback);
}

module.exports=Queue;