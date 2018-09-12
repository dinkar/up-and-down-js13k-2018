import Constants from '../constants';
import StateManager from '../managers/state-manager';
import TextManager from '../managers/text-manager';
import LevelConfigs from '../level-configs';

const LevelIntro = kontra.gameLoop({
    render() {
        TextManager.renderText(this.levelDescriptions, Constants.C_H/2);
    },
    update() {

    }
});

LevelIntro.init = function (levelName) {
    const C_H = Constants.C_H;
    const levelNumber = parseInt(levelName.split('-')[2]);
    this.levelDescriptions = LevelConfigs[levelNumber].desc;
    kontra.keys.bind('enter', function () {
        StateManager.switchToScene(`level-${levelNumber}`);
    });
    return this;
};

LevelIntro.destroy = function () {
    this.levelDescriptions = [];
    kontra.keys.unbind('enter');
    return this;
};

LevelIntro.levelDescriptions = [];


export default LevelIntro;