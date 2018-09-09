import Constants from '../constants';

let floorFactory = {
    getInstance(x, projectedY) {
        let y = projectedY - Constants.F_H;
        return kontra.sprite({
            x,
            y,
            width: Constants.F_W,
            height: Constants.F_H,
            color: 'brown',
            ttl: Infinity
        });
    }
}

export default floorFactory;