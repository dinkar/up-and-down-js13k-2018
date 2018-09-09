import StateManager from '../managers/state-manager';
import Constants from '../constants';

const GameMenu = kontra.gameLoop({
    render() {
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        canvas.style.background = Constants.WHITE;
        ctx.font="30px Verdana";
        ctx.fillStyle = Constants.BLACK;
        ctx.fillText(Constants.G_T, 0, canvas.height/2);
        ctx.fillText('Press Enter to continue', 0, canvas.height/2 + 40);
    },
    update() {

    }
});

GameMenu.init = function () {
    StateManager.store.score = 0;
    kontra.keys.bind('enter', function () {
        StateManager.switchToScene('level-0');
    });
    return this;
};

GameMenu.destroy = function () {
    kontra.keys.unbind('enter');
    return this;
};

export default GameMenu;