module.exports={
    HOST:"localhost",
    USER:"postgres",
    DB:'EMS',
    PASSWORD:'milan123',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        aquire:30000,
        idle:10000
    }
};