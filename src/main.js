import './init-kontra';
import StateManager from './managers/state-manager';
import GameMenu from './scenes/game-menu';
import GameOver from './scenes/game-over';
import Level1 from './scenes/level-1';
// import ball from './assets/ball';

let main = {
    init () {
        StateManager
            .addScene('game-menu', GameMenu)
            .addScene('game-over', GameOver)
            .addScene('level-1', Level1)
            .switchToScene('game-menu');
    }
}

main.init();
