import StateManager from "../managers/state-manager";
import Constants from "../constants";

const GameOver = kontra.gameLoop({
    render() {
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        canvas.style.background = Constants.FOREGROUND;
        ctx.font="30px Verdana";
        ctx.fillStyle = Constants.TEXT_COLOR;
        let endText = '';
        if (StateManager.store.levelsCompleted === StateManager.store.totalLevels) {
            endText = `Yay! Congrats you've completed all the ${StateManager.store.totalLevels} levels`;
        } else {
            endText = `Whoops! You could finish ${StateManager.store.levelsCompleted} levels. Better luck new time.`
        }
        ctx.fillText(endText, 0, canvas.height/2);
        ctx.fillText('Hit Enter to restart', 0, canvas.height/2 + 40);
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