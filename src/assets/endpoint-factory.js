import Constants from '../constants';

let endPointFactory = {
    getInstance(x, projectedY) {
        let y = Constants.C_H - projectedY - Constants.E_P_H;
        return kontra.sprite({
            x,
            y,
            width: Constants.E_P_W,
            height: Constants.E_P_H,
            ttl: Infinity,
            render() {
                this.context.beginPath();
                this.context.strokeStyle = 'gold';
                this.context.fillStyle= 'gold';

                this.context.moveTo(this.x, this.y + this.height/2);
                this.context.lineTo(this.x + this.width/2, this.y);
                this.context.lineTo(this.x + this.width, this.y + this.height/2);
                this.context.lineTo(this.x + this.width/2, this.y + this.height);

                this.context.closePath();
                this.context.stroke();
                this.context.fill();
            }
        });
    }
}

export default endPointFactory;