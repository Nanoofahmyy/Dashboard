let test = document.getElementById('test');
tabel=``
var data = [
    { id: 1, name: 'John Doe', age: 25,gender:"male" },
    { id: 2, name: 'Jane Smith', age: 30,gender:"male" },
    { id: 3, name: 'Bob Johnson', age: 22,gender:"female" },
    {id: 4, name: 'Marium Ismail', age: 24,gender:"female"},
    {id: 5, name: 'Eyad Emad', age: 22,gender:"male"},
    {id: 6, name: 'Khaled Fahmy', age: 33, gender:"male"}
]

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