var listToDelete = ['abc', 'efg'];
var arrayOfObjects = [{id:'abc',name:'oh'}, // delete me
                      {id:'efg',name:'em'}, // delete me
                      {id:'hij',name:'ge'}]; // all that should remain

arrayOfObjects.reduceRight(function(acc, obj, idx) {
    if (listToDelete.indexOf(obj.id) > -1)
        arrayOfObjects.splice(idx,1);
}, 0); // initial value set to avoid issues with the first item and
       // when the array is empty.

console.log(arrayOfObjects);