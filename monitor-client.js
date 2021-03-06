/**
 * Created by mdemo on 2014/5/30.
 */
(function () {
    var monitor = {
            version: '0.0.1'
        },
        globalScope = typeof global !== 'undefined' ? global : this,
        hasModule = (typeof module !== 'undefined' && module.exports);
    monitor.startTime = Date.now();
    monitor.timing = [];
    monitor.start = function (name, time) {
        if (!name) {
            return;
        }
        this.timing[name] = {};
        this.timing[name].start = time || Date.now();
        return this;
    };
    monitor.end = function (name, time) {
        if (!name) {
            return;
        }
        if (!this.timing[name]) {
            this.timing[name] = {};
        }
        this.timing[name].end = time || Date.now();
        return this;
    };
    monitor.get = function (name) {
        if (!name || !this.timing[name]) {
            return;
        }
        var start = this.timing[name].start || this.startTime;
        var end = this.timing[name].end || Date.now();
        return end - start;
    };
    function makeGlobal() {
        globalScope.monitor = monitor;
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = monitor;
    } else if (typeof define === "function" && define.amd) {
        define("monitor", function (require, exports, module) {
            return monitor;
        });
    } else {
        makeGlobal();
    }
})();
