"use strict";
const redis=require("redis");
const client=redis.createClient();
client.set("first_val","redis first program using nodejs");
client.get("first_val",redis.print);
client.quit();