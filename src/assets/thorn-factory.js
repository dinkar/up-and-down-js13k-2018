import Constants from '../constants';

let thornFactory = {
    getInstance(x, projectedY) {
        let y = projectedY - Constants.T_H;
        return kontra.sprite({
            x,
            y,
            width: Constants.T_W,
            height: Constants.T_H,
            color: 'yellow',
            ttl: Infinity
        });
    }
}

export default thornFactory;