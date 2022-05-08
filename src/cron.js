const cron = require('node-cron');
const shell = require('shelljs');

cron.schedule("* * * * *",function(){
    if(shell.exec("node src/index.js").code!==0){
        console.log("Something is wrong")
    }
})
