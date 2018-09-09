import ballFactory from '../assets/ball-factory';
import Constants from '../constants';
import StateManager from '../managers/state-manager';
import floorFactory from '../assets/floor-factory';
import thornFactory from '../assets/thorn-factory';
import LevelConfigs from '../level-configs';

const Level = kontra.gameLoop({
    update() {
        let ball = this.ball;
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        const originalBallX = ball.x;
        const RADIUS = Constants.B_R;
        canvas.style.background = Constants.WHITE;

        if (kontra.keys.pressed('right')) {
            ball.x += 10;
        } else if (kontra.keys.pressed('left')) {
            ball.x -= 10;
        } else if (kontra.keys.pressed('space') ) {
            if (ball.dy === 0) {
                ball.dy = -1;
            } else {
                ball.dy *= -1;
            }
        }

        const ballBox = {x: ball.x - RADIUS, y: ball.y - RADIUS, width: 2*RADIUS, height: 2*RADIUS};

        if (ball.x + RADIUS > canvas.width) {
            ball.x = canvas.width - RADIUS;
        }

        if (ball.x - RADIUS < 0) {
            ball.x = RADIUS;
        }

        if (ball.y + RADIUS > canvas.height) {
            ball.dy = 0;
            ball.y = canvas.height - RADIUS;
        }

        if (ball.y - RADIUS < 0) {
            ball.dy = 0;
            ball.y = RADIUS;
        }

        this.floorTiles.forEach(floor => {
            if(floor.collidesWith(ballBox)) {
                ball.x = originalBallX;
                ball.dy = 0;
            }
        });

        this.thornTiles.forEach(thorn => {
            if (thorn.collidesWith(ballBox)) {
                StateManager.switchToScene('game-over');
            }
        });

        this.assets.forEach(asset => asset.update());

        // if (success) {
        // StateManager.store.score = this.levelNumber * 100;
        //     if (lastLevel) {
        //         StateManager.switchToScene('game-over');
        //     } else {
        //         StateManager.switchToScene(`level-${this.levelNumber + 1}`);
        //     }
        // }
    },
    render() {
        this.assets.forEach(asset => asset.render());

    }
});

Level.init = function (levelName) {
    const C_H = Constants.C_H;
    const levelNumber = parseInt(levelName.split('-')[1]);
    const levelConfig = LevelConfigs[levelNumber];
    this.levelNumber = levelNumber;

    const floorMaps = levelConfig.floors;
    const thornMaps = levelConfig.thorns;
    floorMaps.forEach(coords => {
        const floor = floorFactory.getInstance(coords[0], coords[1]);
        this.floorTiles.push(floor);
        this.assets.push(floor);
    });
    thornMaps.forEach(coords => {
        const thorn = thornFactory.getInstance(coords[0], coords[1]);
        this.thornTiles.push(thorn);
        this.assets.push(thorn);
    });
    this.ball = ballFactory.getInstance(levelConfig.ball[0], levelConfig.ball[1]);
    this.assets.push(this.ball);
    kontra.keys.bind('enter', function () {
        StateManager.switchToScene('game-over');
    });
    return this;
};

Level.destroy = function () {
    kontra.keys.unbind('enter');
    this.assets.forEach(asset => {
        asset.ttl = 0;
        asset = null;
    });
    this.floorTiles = [];
    this.thornTiles = [];
    this.assets = [];
    return this;
};

Level.ball = undefined;
Level.floorTiles = [];
Level.thornTiles = [];
Level.assets = [];
Level.levelNumber = -1;

export default Level;