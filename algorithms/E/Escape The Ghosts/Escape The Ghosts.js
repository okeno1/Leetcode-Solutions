var escapeGhosts = function(ghosts, target) {
    const getDistance = (target, source = [0, 0]) => {
        return (
            Math.abs(target[0] - source[0])
            + 
            Math.abs(target[1] - source[1])
        );
    }
    const timeTakenByMe = getDistance(target);
    let timeTakenByGhosts = Infinity;
    for(let ghost of ghosts) {
        timeTakenByGhosts = Math.min(timeTakenByGhosts, getDistance(target, ghost));
    }
    return timeTakenByGhosts > timeTakenByMe;
};
