/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function (n, edges) {
    this.con = [];
    for (let i = 0; i < n; i++)
        this.con[i] = [];
    for (let i = 0; i < edges.length; i++) {
        let fromId = edges[i][0];
        let toId = edges[i][1];
        let cost = edges[i][2];
        this.con[fromId].push({ toId, cost });
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function (edge) {
    this.con[edge[0]].push({
        toId: edge[1],
        cost: edge[2]
    })
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function (node1, node2) {
    let qu = [];
    let distance = [];
    qu.push(node1);
    qu.push(0);
    distance[node1] = 0;
    while (qu.length > 0) {
        let d = qu.pop();
        let a = qu.pop();
        if (a == node2) continue;
        for (let i = 0; i < this.con[a].length; i++) {
            let b = this.con[a][i].toId;
            let cost = this.con[a][i].cost;
            if (distance[b] != undefined && cost + d >= distance[b])
                continue;
            distance[b] = cost + d;
            qu.push(b);
            qu.push(distance[b]);
        }
    }
    if (distance[node2] == undefined) return -1;
    return distance[node2];
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */