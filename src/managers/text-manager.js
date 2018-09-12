import Constants from "../constants";

let TextManager = {
    renderText(textArray, startHeight) {
        const ctx = kontra.context;
        const canvas = kontra.canvas;
        canvas.style.background = Constants.FOREGROUND;
        ctx.font="30px Verdana";
        ctx.fillStyle = Constants.TEXT_COLOR;
        for(let i = 0; i<textArray.length; i++) {
            ctx.fillText(textArray[i], 0, startHeight + 40*i);
        }
    }
};

export default TextManager;