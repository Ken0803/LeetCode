/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const sortedPoints = points.sort((a, b) => a[0] - b[0]);
    let max = 0;
    for (let i = 1; i < sortedPoints.length; i++) {
        if (sortedPoints[i][0] - sortedPoints[i - 1][0] > max) max = sortedPoints[i][0] - sortedPoints[i - 1][0];
    }
    
    return max;
};