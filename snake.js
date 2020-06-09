function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;

    this.total = 0;
    this.tail = [];

    this.draw = () => {
        ctx.fillStyle = '#FFFFFF';

        // tail growth: draw the snake's tail
        for(let i=0; i<this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = () => {
        // tail growth: move each pixel forward within the snake
        for(let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        // tail growth: update the head pixel to the current pixel
        if (this.total > 0) {
            this.tail[this.total - 1] = { x: this.x, y: this.y };
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // If we hit the wall, come back from the other side
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    // controlling directions using arrow keys
    this.changeDirection = (direction) => {
        switch(direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = (fruit) => {        
        // if snake coordinates matches with the fruit, return true (it means snake touched the fruit)
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++; // tail growth
            return true;
        }
        return false;
    }
}