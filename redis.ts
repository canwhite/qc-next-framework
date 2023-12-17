import Redis from 'ioredis';

class RedisClient {
    //创建一个私有的静态属性
    private static redis: Redis | null = null;
    //再创建一个公共的静态方法
    static  getRedisClient = ()=>{
        if(this.redis === null){
            const redis = new Redis({
                host: 'localhost',
                port: 6379, // 默认的Redis端口号
                // password: 'your-redis-password', // 如果有密码的话
                db: 5
            });
            return redis;
        }
        return this.redis;
    }
}

export default RedisClient.getRedisClient();


