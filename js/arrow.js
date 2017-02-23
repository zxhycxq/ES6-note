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
