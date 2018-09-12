import Constants from '../constants';

let ballFactory = {
    getInstance(projectedX, projectedY) {
        let x = projectedX + Constants.B_R;
        let y = Constants.C_H - projectedY - Constants.B_R;
        return kontra.sprite({
            x,
            y,
            width: 2 * Constants.B_R,
            height: 2 * Constants.B_R,
            ttl: Infinity,
            ddy: 1,
            render() {
                let context = this.context;
                context.strokeStyle = 'blue';
                context.fillStyle= 'blue';
                context.beginPath(); // start drawing a shape
                context.arc(this.x, this.y, Constants.B_R, 0, Math.PI * 2);
                context.stroke(); // outline the circle
                context.fill();
                context.closePath();
            },
            update() {
                if (!this.isYCollided) {
                    this.advance();
                } else {
                    this.dy = 0;
                }
            }
        });
    }
};

export default ballFactory;