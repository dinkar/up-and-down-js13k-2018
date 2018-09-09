import Constants from "../constants";

let StateManager = {
    states: {},
    currentStateName: '',
    store: {
        score: 0
    },
    clear() {
        kontra.context.clearRect(0, 0, Constants.width, Constants.height);
    },
    addScene (sceneName, scene) {
        this.states[sceneName] = scene;
        return this;
    },
    switchToScene(sceneName) {
        const states = this.states;
        const currentScene = states[this.currentStateName];
        if (currentScene) {
            currentScene.destroy();
            currentScene.stop();
        }

        this.clear();
        const newScene = states[sceneName];
        newScene
            .init()
            .start();
        this.currentStateName = sceneName;
        return this;
    }
}

export default StateManager;