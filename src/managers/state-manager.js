let StateManager = {
    states: {},
    currentStateName: '',
    store: {
        levelsCompleted: 0,
        get totalLevels() {
            return Object.keys(StateManager.states).filter(state => state.startsWith('level')).length;
        }
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
    },
    resetStore() {
        this.store.levelsCompleted = 0;
    }
};

export default StateManager;