const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function() {
    console.log('Executando a tarefa 1', new Date().getSeconds())
}) 