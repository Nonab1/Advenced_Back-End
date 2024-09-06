const Events = require('events');

class Logger extends Events {
    log(a, b){
        this.emit('calculator', a + b);
    }
}

const logger = new Logger();

logger.on('calculator', data => {
    console.log(data);
})

logger.log(10, 3)