import ballFactory from '../assets/ball-factory';
import Constants from '../constants';
import StateManager from '../managers/state-manager';
import floorFactory from '../assets/floor-factory';
import thornFactory from '../assets/thorn-factory';
import endpointFactory from '../assets/endpoint-factory';
import LevelConfigs from '../level-configs';

let gravityInvertDampner = 0;

const Level = kontra.gameLoop({
    update() {
        let ball = this.ball;
        ball.isYCollided = false;
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        const originalBallX = ball.x;
        const RADIUS = Constants.B_R;
        canvas.style.background = Constants.FOREGROUND;

        if (gravityInvertDampner) {
            gravityInvertDampner--;
        }

        if (kontra.keys.pressed('right')) {
            ball.x += 10;
        }

        if (kontra.keys.pressed('left')) {
            ball.x -= 10;
        }

        const ballBox = {x: ball.x - RADIUS, y: ball.y - RADIUS -1 , width: 2*RADIUS, height: 2*RADIUS +2 };

        if (ball.x + RADIUS > canvas.width) {
            ball.x = canvas.width - RADIUS;
        }

        if (ball.x - RADIUS < 0) {
            ball.x = RADIUS;
        }

        if (ball.y + RADIUS >= canvas.height) {
            ball.y = canvas.height - RADIUS;
            ball.isYCollided = true;
        }

        if (ball.y - RADIUS <= 0) {
            ball.y = RADIUS;
            ball.isYCollided = true;
        }

        this.floorTiles.forEach(floor => {
            if(floor.collidesWith(ballBox)) {
                ball.isYCollided = true;
                // ball.x = originalBallX;
                if (ball.ddy === 1) {
                    ball.y = floor.y - RADIUS;
                } else {
                    ball.y = floor.y + Constants.F_H + RADIUS;
                }
            }
        });

        this.thornTiles.forEach(thorn => {
            if (thorn.collidesWith(ballBox)) {
                StateManager.switchToScene('game-over');
            }
        });

        if (this.endpoint.collidesWith(ballBox)) {
            StateManager.store.levelsCompleted++;
            if (this.levelNumber === StateManager.store.totalLevels - 1) {
                StateManager.switchToScene('game-over');
            } else {
                StateManager.switchToScene(`intro-level-${this.levelNumber + 1}`);
            }
        }

        if (kontra.keys.pressed('space') ) {
            if (gravityInvertDampner === 0) {
                gravityInvertDampner = 20;
                ball.ddy *= -1;
                ball.isYCollided = false;
            }
        }

        this.assets.forEach(asset => asset.update());
    },
    render() {
        this.assets.forEach(asset => asset.render());

    }
});

Level.init = function (levelName) {
    const C_H = Constants.C_H;
    const levelNumber = parseInt(levelName.split('-')[1]);
    const levelConfig = LevelConfigs[levelNumber];
    const floorMaps = levelConfig.floors;
    const thornMaps = levelConfig.thorns;
    this.levelNumber = levelNumber;
    this.floorTiles = [];
    this.thornTiles = [];
    this.assets = [];

    if (floorMaps) {
        floorMaps.forEach(coords => {
            const floor = floorFactory.getInstance(coords[0], coords[1]);
            this.floorTiles.push(floor);
            this.assets.push(floor);
        });
    }
    if (thornMaps) {
        thornMaps.forEach(coords => {
            const thorn = thornFactory.getInstance(coords[0], coords[1]);
            this.thornTiles.push(thorn);
            this.assets.push(thorn);
        });
    }
    this.ball = ballFactory.getInstance(levelConfig.ball[0], levelConfig.ball[1]);
    this.assets.push(this.ball);
    this.endpoint = endpointFactory.getInstance(levelConfig.endpoint[0], levelConfig.endpoint[1]);
    this.assets.push(this.endpoint);
    return this;
};

Level.destroy = function () {
    this.assets.forEach(asset => {
        asset.ttl = 0;
    });
    return this;
};

Level.ball = undefined;
Level.endpoint = undefined;
Level.floorTiles = [];
Level.thornTiles = [];
Level.assets = [];
Level.levelNumber = -1;

export default Level;