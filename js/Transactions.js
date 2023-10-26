let test = document.getElementById('test');
tabel=``
var data = [
    { id: 1, name: 20, age: 'pending',gender:18 },
    { id: 2, name: 50, age: 'failed',gender:42 },
    { id: 3, name: 80, age: 'pending',gender:86},
    {id: 4, name: 40, age: 'sucess',gender:99},
    {id: 5, name: 60, age: 'failed',gender:84},
    {id: 6, name: 70, age: 'sucess', gender:70}
]
//

for (i = 0; i < data.length; i++) { 
    tabel += `
    
    <tr>

<td>${data[i].id}</td>
<td>${data[i].name}</td>
<td>${data[i].age}</td>
<td>${data[i].gender}</td>

</tr>
    ` 
}
test.innerHTML = tabel