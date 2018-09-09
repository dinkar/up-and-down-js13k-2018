import Constants from "../constants";

let StateManager = {
    states: {},
    currentStateName: '',
    store: {
        score: 0,
        totalLevels: 1,
        currentLevel: 0
    },
    clear() {
        const {width, height} = kontra.canvas;
        kontra.context.clearRect(0, 0, width, height);
    },
    addScene (sceneName, scene) {
        this.states[sceneName] = scene;
        return this;
    },
    switchToScene(sceneName) {
        this.clear();
        const states = this.states;
        const currentScene = states[this.currentStateName];

        if (currentScene) {
            currentScene
                .destroy()
                .stop();
        }

        const newScene = states[sceneName];
        newScene
            .init(sceneName)
            .start();
        this.currentStateName = sceneName;
        return this;
    }
}

export default StateManager;