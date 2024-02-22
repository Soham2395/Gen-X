console.clear();

if (document.cookie.indexOf(',counter=') >= 0) {
    let counter = document.cookie.split(',')[1].split('=')[1];
    document.getElementById("badge").innerHTML = counter;
}

let cartContainer = document.getElementById('cartContainer');

let boxContainerDiv = document.createElement('div');
boxContainerDiv.id = 'boxContainer';

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob, itemCounter) {
    let boxDiv = document.createElement('div');
    boxDiv.id = 'box';
    boxContainerDiv.appendChild(boxDiv);

    let boxImg = document.createElement('img');
    boxImg.src = ob.preview;
    boxDiv.appendChild(boxImg);

    let boxh3 = document.createElement('h3');
    let h3Text = document.createTextNode(ob.name + ' × ' + itemCounter);
    boxh3.appendChild(h3Text);
    boxDiv.appendChild(boxh3);

    let boxh4 = document.createElement('h4');
    let h4Text = document.createTextNode('Amount: Rs' + ob.price);
    boxh4.appendChild(h4Text);
    boxDiv.appendChild(boxh4);

//     let removeButton = document.createElement('button');
// removeButton.textContent = 'Remove';

// removeButton.addEventListener('click', function() {
//     // Remove the item from the cart
//     boxDiv.parentNode.removeChild(boxDiv);

//     // Update total amount after removing item
//     totalAmount -= (ob.price * itemCounter);
//     document.getElementById('toth4').textContent = 'Amount: Rs ' + totalAmount;
// });

// boxDiv.appendChild(removeButton);


    cartContainer.appendChild(boxContainerDiv);
    cartContainer.appendChild(totalContainerDiv);

    return cartContainer;
}

let totalContainerDiv = document.createElement('div');
totalContainerDiv.id = 'totalContainer';

let totalDiv = document.createElement('div');
totalDiv.id = 'total';
totalContainerDiv.appendChild(totalDiv);

let totalh2 = document.createElement('h2');
let h2Text = document.createTextNode('Total Amount');
totalh2.appendChild(h2Text);
totalDiv.appendChild(totalh2);

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount) {
    let totalh4 = document.createElement('h4');
    let totalh4Text = document.createTextNode('Amount: Rs ' + amount);
    totalh4Text.id = 'toth4';
    totalh4.appendChild(totalh4Text);
    totalDiv.appendChild(totalh4);
    totalDiv.appendChild(buttonDiv);
    console.log(totalh4);
}

let buttonDiv = document.createElement('div');
buttonDiv.id = 'button';
totalDiv.appendChild(buttonDiv);

let buttonTag = document.createElement('button');
buttonDiv.appendChild(buttonTag);

buttonTag.textContent = 'Place Order'; // Set the text content of the button

// Apply styles to the button
buttonTag.style.color = 'white'; // Set text color to white
buttonTag.style.fontWeight = 'bold'; // Set font weight to bold
buttonTag.style.fontSize = 'calc(16px + 1px)'; // Increase font size by 2 pixels


buttonTag.onclick = function() {
    console.log("clicked");
    // You can add more functionality here if needed
};

// If you want the button to act as a link
buttonTag.addEventListener('click', function() {
    window.location.href = '/orderPlaced.html'; // Redirect to the specified URL
});




// Hardcoded product data
const products = [{
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
    "price": 819
},
{
    "id": "2",
    "name": "Q-Powerbank",
    "preview": "https://m.media-amazon.com/images/I/61MaSVeJaYL._AC_SL1500_.jpg",
    "price": 683
},
{
    "id": "3",
    "name": "Gen-X SwiftSync Earbuds",
    "preview": "https://m.media-amazon.com/images/I/51dfG2mEEbL._AC_SL1500_.jpg",
    "price": 1045
},
{
    "id": "4",
    "name": "GenVoice Home Hub",
    "preview": "https://m.media-amazon.com/images/I/81lGxS2ZisL.SX569.jpg",
    "price": 2586
},
{
    "id": "5",
    "name": "X-ConnectLTE",
    "preview": "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
    "price": 864
},
{
    "id": "6",
    "name": "SonicWave Over-Ear Headphones",
    "preview": "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
    "price": 882
},
{
    "id": "7",
    "name": "X-360 SoundSphere",
    "preview": "https://m.media-amazon.com/images/I/610Jx43eHaL.SX679.jpg",
    "price": 3311
},


];

// Initialize totalAmount
let totalAmount = 0;

// Populate cart with products
window.onload = function() {
    let counter = Number(document.cookie.split(',')[1].split('=')[1]);
    document.getElementById("totalItem").innerHTML = ('Total Items: ' + counter);

    let item = document.cookie.split(',')[0].split('=')[1].split(" ");
    console.log(counter);
    console.log(item);

    for (let i = 0; i < counter; i++) {
        let itemCounter = 1;
        for (let j = i + 1; j < counter; j++) {
            if (Number(item[j]) == Number(item[i])) {
                itemCounter += 1;
            }
        }
        let productIndex = Number(item[i]) - 1;
        totalAmount += products[productIndex].price * itemCounter;
        dynamicCartSection(products[productIndex], itemCounter);
        i += (itemCounter - 1);
    }
    amountUpdate(totalAmount);
};
