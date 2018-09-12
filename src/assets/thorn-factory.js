import Constants from '../constants';

let thornFactory = {
    getInstance(x, projectedY) {
        let y = Constants.C_H - projectedY - Constants.T_H;
        return kontra.sprite({
            x,
            y,
            width: Constants.T_W,
            height: Constants.T_H,

            ttl: Infinity,
            render() {
                this.context.beginPath();
                this.context.strokeStyle = 'red';
                this.context.fillStyle= 'red';
                // draw a rhombus
                this.context.moveTo(this.x, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + Constants.T_W/8, this.y);
                this.context.lineTo(this.x + 2*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 3*Constants.T_W/8, this.y);
                this.context.lineTo(this.x + 4*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 5*Constants.T_W/8, this.y);
                this.context.lineTo(this.x + 6*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 7*Constants.T_W/8, this.y);
                this.context.lineTo(this.x + 8*Constants.T_W/8, this.y + Constants.T_H/2);



                this.context.lineTo(this.x + 7*Constants.T_W/8, this.y + Constants.T_H);
                this.context.lineTo(this.x + 6*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 5*Constants.T_W/8, this.y + Constants.T_H);
                this.context.lineTo(this.x + 4*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 3*Constants.T_W/8, this.y + Constants.T_H);
                this.context.lineTo(this.x + 2*Constants.T_W/8, this.y + Constants.T_H/2);
                this.context.lineTo(this.x + 1*Constants.T_W/8, this.y + Constants.T_H);
                // this.context.lineTo(this.x + 8*Constants.T_W/8, this.y + Constants.T_H/2);

                this.context.closePath();
                this.context.stroke();
                this.context.fill();
            }
        });
    }
}

export default thornFactory;