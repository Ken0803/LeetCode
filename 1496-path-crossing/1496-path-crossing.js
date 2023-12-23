/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let moves = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    };
    let setMoves = new Set();
    let curx = 0;
    let cury = 0;
    setMoves.add("0,0");
    for (let i = 0; i < path.length; i++) {
        curx = curx + moves[path[i]][0];
        cury = cury + moves[path[i]][1];
        let pos = `${curx},${cury}`;
        if (setMoves.has(pos)) return true;
        setMoves.add(pos);
    }
    return false;
}