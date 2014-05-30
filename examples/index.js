/**
 * Created by mdemo on 2014/5/30.
 */
var monitor = require('../monitor-client');
console.log(monitor);
monitor.start('aa');
console.log(monitor.get('aa'));
monitor.end('aa');
console.log(monitor.get('aa'));