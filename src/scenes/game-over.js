import StateManager from "../managers/state-manager";
import Constants from "../constants";

const GameOver = kontra.gameLoop({
    render() {
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        canvas.style.background = Constants.WHITE;
        ctx.font="30px Verdana";
        ctx.fillStyle = Constants.BLACK;
        ctx.fillText(Constants.G_O, 0, canvas.height/2);
        ctx.fillText(`Your score is ${StateManager.store.score}`, 0, canvas.height/2 + 40);
        ctx.fillText('Press Enter to continue', 0, canvas.height/2 + 80);
    },
    update() {

    }
});

GameOver.init = function() {
    kontra.keys.bind('enter', function () {
        StateManager.switchToScene('game-menu');
    });
    return this;
};

GameOver.destroy = function () {
    kontra.keys.unbind('enter');
    return this;
};

export default GameOver;