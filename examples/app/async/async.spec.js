class Countdown {
    constructor(intervalInSeconds) {

        this.checkInterval(intervalInSeconds);

        this.defaultInterval = intervalInSeconds;

        this.remaining = null;
        this.intervalID = null;
    }

    doTick() {
        this.remaining--;

        if (this.remaining < 0) {
            this.stop();
            this.callFinalCallback();
            return;
        }

        this.callUpdateCallback();
    }

    start(updateCallback, finalCallback) {
        this.updateCallback = updateCallback;
        this.finalCallback = finalCallback;

        this.remaining = this.defaultInterval;

        // TODO 1.2 - Implementace odpočtu
        this.intervalID = setInterval(() => this.doTick(), 1000);
    };

    stop() {

        // TODO 1.5 - Zastavte časovač
        clearInterval(this.intervalID);

        this.intervalID = null;
        this.updateCallback = null;
    };

    checkInterval(interval) {

        if (typeof interval !== "number") {
            throw new TypeError("interval musí být číslo");
        }

        if (interval <= 0 || !isFinite(interval) || isNaN(interval)) {
            throw new RangeError("interval musí být konečné větší než 0");
        }

    };

    callUpdateCallback() {
        if (this.updateCallback) {
            try {
                this.updateCallback(this.remaining);
            } catch (e) {
                console.error("updateCallback error: ", e);
            }
        }
    };

    callFinalCallback() {
        if (this.finalCallback) {
            try {
                this.finalCallback(this.defaultInterval);
            } catch (e) {
                console.error("finalCallback error: ", e);
            }

            this.finalCallback = null;
        }
    };

    isRunning() {
        return Boolean(this.intervalID);
    }
}

// -----------------------------TESTS------------------------------------------------
describe('Odpočet', function() {
    it('nastavuje intervalID (TODO 1.2)', function() {
        const countdown = new Countdown(1);
        countdown.start(function() {});

        expect(countdown.intervalID).not.toBeNull();
    });
});