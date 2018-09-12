import StateManager from '../managers/state-manager';
import TextManager from '../managers/text-manager';
import Constants from '../constants';

const GameMenu = kontra.gameLoop({
    render() {
        const messages = ['Up & Down',
            'Inspired from the classic game VVVVVV',
            '',
            `Gameplay: The gravity of ball changes when you press space.`,
            `Get to the yellow star without touching the thorns`,
            '',
            'Press Enter to start game',
            '',
            `Total levels: ${StateManager.store.totalLevels}`
        ];
        TextManager.renderText(messages, Constants.C_H/4);
    },
    update() {}
});

GameMenu.init = function () {
    StateManager.resetStore();
    kontra.keys.bind('enter', function () {
        const jumpToLevel = window.jumpToLevel;
        if(jumpToLevel) {
            StateManager.switchToScene(`intro-level-${jumpToLevel - 1}`);
        } else {
            StateManager.switchToScene('intro-level-0');
        }
    });
    return this;
};

GameMenu.destroy = function () {
    kontra.keys.unbind('enter');
    return this;
};

export default GameMenu;