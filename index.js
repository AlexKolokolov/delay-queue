class DelayQueue {
    constructor(delay) {
        this.queue = [];
        this.lastProcessTime = 0;
        this.delay = delay;
    }

    addToQueue(job, doFirst) {
        if (typeof job !== "function") {
            return;
        }
        if (doFirst) {
            this.queue.unshift(job);
        } else {
            this.queue.push(job);
        }
        if (!this.timer) {
            const diff = Date.now() - this.lastProcessTime;
            const delay = this.delay - diff;
            this.timer = this.process(delay > 0 ? delay : 0);
        }
    }

    process(delay) {
        return setTimeout(async () => {
            const queueSize = this.queue.length;
            if (queueSize <= 0) {
                clearTimeout(this.timer);
                this.timer = null;
                return;
            }

            const job = this.queue.shift();
            if (job) {
                job();
                this.lastProcessTime = Date.now();
            }
            this.timer = this.process(this.delay);
        }, delay);
    }
}

module.exports = DelayQueue;
