/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let n = coordinates.length;
    let a = coordinates[1][0]-coordinates[0][0];
    let b = coordinates[1][1]-coordinates[0][1];
    for(let i = 2 ; i < n ; i ++){
        let c = coordinates[i][0]-coordinates[0][0];
        let d = coordinates[i][1]-coordinates[0][1];
        console.log(a,b,c,d);
        if(a*d !== b*c) return false
    }
    return true
};