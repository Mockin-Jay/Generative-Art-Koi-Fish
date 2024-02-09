
class lilypadAgent {

    constructor(flowerimg, img, x, y, size, speed, angle, flower, flowersize) {
        this.flowerimg = flowerimg;
        this.img = img;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.flower = flower;
        this.flowersize = flowersize;

        imageMode(CENTER);
        angleMode(DEGREES);

    }

    show() {

        push();
        this.x += 0.1;
        this.y += 0.1;
        translate(this.x, this.y);

        this.angle += this.speed;
        rotate(this.angle);

        image(this.img, 0, 0, this.size, this.size);
        if (this.flower % 2 != 0) {
            image(this.flowerimg, 0, 0, this.flowersize, this.flowersize);
        }

        pop();

    }
}