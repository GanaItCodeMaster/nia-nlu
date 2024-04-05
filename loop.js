var list=[[{
    "name":"naveen",
    "email":"navee@d.com",
    "id": 234
},
{
    "name":"naveen",
    "email":"navee@d.com",
    "id": 234
}],[{
    "name":"naveen",
    "email":"navee@d.com",
    "id": 234
},
{
    "name":"naveen",
    "email":"navee@d.com",
    "id": 234
}],[{
    "name":"naveen",
    "id": 234
},{
    "name":"naveen",
    "email":"navee@d.com",
    "id": 234
}],
]
// for(var i =0;i<list.length;i++){
//     console.log(list[i].id)
// }
var merged = [].concat.apply([], list);

console.log(merged);
for(var i =0;i<merged.length;i++){
    console.log(merged[i].id)
}
// for(var i =0;i<list.length;i++){
//     for(var j=0;j<i.length;j++){
//         for(var k =0;k<j.length;k++){
//             console.log(list[i].id)
//             console.log(list[j].id)
//             console.log(list[k].id)
//         }
//     }
// }

