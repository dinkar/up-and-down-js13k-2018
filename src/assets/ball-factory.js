import Constants from '../constants';

let ballFactory = {
    getIntance() {
        return kontra.sprite({
            x: 30,
            y: Constants.C_H - 30,
            ttl: Infinity,
            render() {
                this.context.strokeStyle = 'black';
                this.context.beginPath(); // start drawing a shape
                this.context.arc(this.x, this.y, 30, 0, Math.PI * 2);
                this.context.stroke(); // outline the circle
            }
        });
    }
}

export default ballFactory;