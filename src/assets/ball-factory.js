import Constants from '../constants';

let ballFactory = {
    getInstance(x, y) {
        return kontra.sprite({
            x,
            y,
            width: 2 * Constants.B_R,
            height: 2 * Constants.B_R,
            ttl: Infinity,
            render() {
                let context = this.context;
                context.strokeStyle = '#8bc34a';
                context.fillStyle= '#8bc34a';
                context.beginPath(); // start drawing a shape
                context.arc(this.x, this.y, Constants.B_R, 0, Math.PI * 2);
                context.stroke(); // outline the circle
                context.fill();
                context.closePath();
            }
        });
    }
};

export default ballFactory;