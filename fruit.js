function Fruit() {
    this.x;
    this.y;

    // generate a random location for the fruit
    this.pickLocation = () => {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = () => {
        ctx.fillStyle = "#00e7ff";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}