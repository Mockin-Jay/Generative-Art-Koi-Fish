class rippleAgent {
    constructor(x, y, strokeweight) {
        this.x = x;
        this.y = y;
        this.strokeweight = strokeweight;

        // start off with diameter = 0
        this.d = 0;
        this.opacity = 255;
    }

    update() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.strokeweight = random([0.3, 3.5]);

        this.d = 0;
        this.opacity = 255;
    }

    show() {
        push();
        noFill();
        strokeWeight(this.strokeweight);
        stroke(255, this.opacity);
        circle(this.x, this.y, this.d);
        pop();
    }

    grow() {
        push();
        this.d += (this.strokeweight * 0.3);
        pop();
    }

    fade() {
        push();
        this.opacity -= 10 * (1 / this.strokeweight);
        if (this.opacity < 0) {
            this.update();
        }
        pop();
    }
}