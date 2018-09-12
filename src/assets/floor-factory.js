import Constants from '../constants';

let floorFactory = {
    getInstance(x, projectedY) {
        let y = Constants.C_H - projectedY - Constants.F_H;
        return kontra.sprite({
            x,
            y,
            width: Constants.F_W,
            height: Constants.F_H,
            color: 'green',
            ttl: Infinity
        });
    }
}

export default floorFactory;