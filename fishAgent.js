
class fishAgent {

    constructor(animationlist, x, y, real_speed, angle) {
        this.animationlist = animationlist;
        this.index = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        // current positions
        this.x = x;
        this.y = y;
      
        // previous position
        
        this.w = this.animationlist[this.index][0].width;
        this.h = this.animationlist[this.index][0].height;
        this.len = this.animationlist[this.index].length;
        this.real_speed = real_speed;
        this.init_angle = angle;
        this.cur_angle = angle;
        this.angle_meter = 0;
        this.is_inbound = true;
        this.imgindex = 0;
      
        
      
        imageMode(CENTER);
      
      }
  
  
  
      update() {

        this.init_angle = this.cur_angle + 180 + random([-10, 10]);
        this.angle_meter = 0;
        
        this.index = random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.w = this.animationlist[this.index][0].width;        

      }
  
  
    
      show() {
        let index = floor(this.imgindex) % this.len;
        push();
        translate(this.x, this.y);
        rotate(-this.cur_angle);
        image(this.animationlist[this.index][index], 0, 0, this.w, this.h);
        pop();
      }
  
  
  
      animate() {
        this.imgindex += this.real_speed * 0.5;
        const angle_diff = 45 * sin(this.angle_meter);
        this.cur_angle = this.init_angle + angle_diff;
        const x_speed = this.real_speed * cos(this.cur_angle);
        const y_speed = this.real_speed * sin(this.cur_angle);
        this.x -= x_speed * 7;
        this.y += y_speed * 7;
        this.angle_meter += 1;
        // ended on left
        if ((this.x < -100) || (this.x > (width + 100)) || (this.y < -100) || (this.y > (height + 100))) {
          if (this.is_inbound == true) {
            this.is_inbound = false;
            this.update();
          }

        } else {
          this.is_inbound = true;
        }
        
      }


}
