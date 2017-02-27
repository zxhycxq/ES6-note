/**
 * 创建.
 * 二月
 */

foo => foo + 'qwe';
(foo, bar) => foo + bar;

let names = [ 'Will', 'Jack', 'Peter', 'Steve', 'John', 'Hugo', 'Mike' ]

let newSet = names
    .map((name, index) => {
        return {
            id: index,
            name: name
        }
    })
    .filter(man => man.id % 2 == 0)
    .map(man => [man.name])
    .reduce((a, b) => a.concat(b))

console.log(newSet) //=> [ 'Will', 'Peter', 'John', 'Mike' ]


function extendDeep(parent, child) {
    var i,
        toStr = Object.prototype.toString,
        astr = "[object Array]";

    child = child || {};

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] === 'object') {
                child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                extendDeep(parent[i], child[i]);
            } else {
                child[i] = parent[i];
            }
        }
    }
    return child;
}

var dad = {
    counts: [1, 2, 3],
    reads: { paper: true }
};
var kid = extendDeep(dad);

kid.counts.push(4);
console.log(kid.counts.toString()); // "1,2,3,4"
console.log(dad.counts.toString()); // "1,2,3"

console.log(dad.reads === kid.reads); // false
kid.reads.paper = false;
