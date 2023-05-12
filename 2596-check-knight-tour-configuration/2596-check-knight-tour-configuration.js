/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    let x = 0;
    let y = 0;
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    if(grid[0][0] !== 0 ) return false;
    let dx = [1,1,-1,-1];
    let dy = [1,-1,1,-1];
    while(count < m*n){
        if(count === m*n-1) return true;
        for(let i = 0 ; i < 4 ; i ++){
            let wx = x + dx[i];
            let wy = y + dy[i]*2;
            if(wx>=0&&wy>=0&&wx<m&&wy<n&&grid[wx][wy] === count+1){
                x = wx;
                y = wy;
                count ++;
                break ;
            }
            wx = x+dx[i]*2;
            wy = y+dy[i];
            if(wx>=0&&wy>=0&&wx<m&&wy<n&&grid[wx][wy] === count+1){
                x = wx;
                y = wy;
                count ++;
                break ;
            }
            if(i === 3) return false;
        }
    }
};