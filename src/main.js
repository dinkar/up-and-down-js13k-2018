import './init-kontra';
import StateManager from './managers/state-manager';
import GameMenu from './scenes/game-menu';
import GameOver from './scenes/game-over';
import Level from './scenes/level';
import LevelIntro from './scenes/level-intro';

let main = {
    init () {
        StateManager
            .addScene('game-menu', GameMenu)
            .addScene('game-over', GameOver)
            .addScene('level-0', Level)
            .addScene('intro-level-0', LevelIntro)
            .addScene('level-1', Level)
            .addScene('intro-level-1', LevelIntro)
            .addScene('level-2', Level)
            .addScene('intro-level-2', LevelIntro)
            .addScene('level-3', Level)
            .addScene('intro-level-3', LevelIntro)
            .switchToScene('game-menu');
    }
}

main.init();
