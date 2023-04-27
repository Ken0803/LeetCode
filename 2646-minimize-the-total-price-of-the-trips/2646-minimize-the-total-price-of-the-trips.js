/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  let con = [];
  for (let i = 0; i < n; i++)
    con.push([]);
  let stack = new Array(n).fill(0);
  let total = 0;
  for (let i = 0; i < edges.length; i++) {
    let a = edges[i][0];
    let b = edges[i][1];
    con[a].push(b);
    con[b].push(a);
  }
  while (trips.length > 0) {
    let trip = trips.pop();
    function DFS(node, parent, cost) {
      if (node === trip[1]) {
        stack[node] += price[node] / 2;
        total += cost;
        return 1;
      }
      for (let i = 0; i < con[node].length; i++) {
        let child = con[node][i];
        if (child == parent) continue;
        if (DFS(child, node, cost + price[child])) {
          stack[node] += price[node] / 2;
          return 1;
        }
      }
      return 0;
    }
    DFS(trip[0], -1, price[trip[0]]);
  }
  function calcStack(node, parent) {
    let value = [stack[node], 0];
    for (let i = 0; i < con[node].length; i++) {
      let child = con[node][i];
      if (child === parent) continue;
      let child_value = calcStack(child, node);
      value[0] += child_value[1];
      value[1] += Math.max(child_value[0], child_value[1]);
    }
    return value;
  }
  let final = calcStack(0, -1);
  return total - Math.max(final[0], final[1]);
};