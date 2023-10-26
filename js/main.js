const test = document.body.style.backgroundColor = 'rgb(4, 9, 14)'
const wel = document.getElementById("wel")
wel.innerText = 'Welcome to DashBoard'
wel.style.color = 'white'
wel.style.fontFamily = 'cursive'
wel.style.fontSize = '50px'
wel.style.marginLeft = '610px'
wel.style.marginTop = '250px'
// create div
var myElement = document.getElementById('myElement');
myElement.style.height = '609px';
myElement.style.width = '2px';
myElement.style.borderLeft = '1px solid white';
myElement.style.marginTop = '-355px'
myElement.style.marginLeft = '350px'
myElement.style.boxShadow = '0.5px 5px 5px rgba(255, 255, 255, 0.5)';
// txt = 'dashboard'
const cre_h3 = document.createElement('h3');
cre_h3.innerText = 'DashBoard';
cre_h3.style.color = 'white'
cre_h3.style.marginTop = '-570px'
cre_h3.style.marginLeft = '105px'
cre_h3.style.fontFamily = 'cursive'
cre_h3.style.fontSize = '25px'
const dashContainer = document.getElementById('dash');
dashContainer.appendChild(cre_h3);
// first box
const box_1 = document.createElement('div');
box_1.id = 'box_2';
box_1.style.width = '348px';
box_1.style.height = '50px';
box_1.style.backgroundColor = 'rgb(41, 220, 205)';
box_1.style.margin = '-3px';
box_1.style.borderLeft = '1px solid rgb(41, 220, 205)';
box_1.style.marginTop = '70px'
const users = document.createElement('h2')
users.innerText = 'Users';
users.style.fontFamily = 'cursive'
users.style.paddingTop = '8px'
users.style.paddingLeft = '140px'
box_1.style.borderRadius = '15px'
box_1.append(users);
document.body.appendChild(box_1)
// second box
const box_2 = document.createElement('div')
box_2.id  = 'box_2'
box_2.style.width = '348px';
box_2.style.height = '50px';
box_2.style.backgroundColor = 'rgb(41, 220, 205)';
box_2.style.marginTop = '15px';
box_2.style.marginLeft = '-1px'
box_2.style.borderLeft = '1px solid rgb(41, 220, 205)';
box_2.style.borderRadius = '15px'
box_2.style.marginLeft = '-3px'
const trans = document.createElement('h2')
trans.innerText = 'Transaction'
box_2.append(trans)
trans.style.fontFamily = 'cursive'
trans.style.marginLeft = '105px'
trans.style.paddingTop = '8px'
document.body.appendChild(box_2);
box_1.addEventListener('click', function() {
    window.location.href = '/index/Users.html';
});
box_2.addEventListener('click',function(){
    window.location.href = '/index/transaction.html';
})