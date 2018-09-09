import ballFactory from '../assets/ball-factory';
import Constants from "../constants";
import StateManager from "../managers/state-manager";

let ball;

const Level1 = kontra.gameLoop({
    update() {
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        canvas.style.background = Constants.WHITE;

        if (kontra.keys.pressed('right')) {
            ball.x += 10;
        } else if (kontra.keys.pressed('left')) {
            ball.x -= 10;
        } else if (kontra.keys.pressed('space') ) {
            if (ball.dy === 0) {
                ball.dy = 1;
            } else {
                ball.dy *= -1;
            }
        }
        ball.update();
    },
    render() {
        ball.render();
    }
});

Level1.init = function () {
    ball = ballFactory.getIntance();
    kontra.keys.bind('enter', function () {
        StateManager.switchToScene('game-over');
    });
    return this;
};

Level1.destroy = function () {
    kontra.keys.unbind('enter');
    ball.ttl = 0;
    ball = null;
    return this;
};

export default Level1;