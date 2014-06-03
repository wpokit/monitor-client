/**
 * Created by mdemo on 2014/5/30.
 */
var monitor = require('../monitor-client');
console.log(monitor);
monitor.start('aa');
console.log(monitor.get('aa'));
monitor.end('aa').start('bb');
monitor.end('bb');
console.log(monitor.get('bb'));
console.log(monitor.get('aa'));