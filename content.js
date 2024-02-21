// console.clear();

let contentTitle;

console.log(document.cookie);

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "/contentDetails.html?" + ob.id;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}







// Hardcoded product description
const productDescription = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "img/logo.png",
  "photos": [
    "img/logo.png",
    // Add other photo URLs
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": true,
  "brand": "United Colors of Benetton",
  "price": 2599
};

const productDescription1 = {
  "id": "2",
  "name": "Men Black MAMGP T7 Sweat Sporty Jacket",
  "preview": "img/logo.png",
  "photos": [
      "img/logo.png"
  ],
  "description": "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
  "size": [
      0,
      0,
      0,
      1,
      0
  ],
  "isAccessory": false,
  "brand": "Puma",
  "price": 7999
};

const productDescription2 = {
  "id": "3",
        "name": "Men Black Action Parkview Lifestyle Shoes",
        "preview": "img/logo.png",
        "photos": [
            "img/logo.png"
        ],
        "description": "Flaunt an effortless look with this ultimate pair of black coloured formal shoes from the house of Hush Puppies. Let the sun go down for uncomfortable shoes, as you opt for this pair of formal shoes that is crafted using comfortable TPR (thermoplastic rubber) sole. Pair these formal shoes with a shirt and trousers to look absolutely handsome",
        "size": [
            1,
            1,
            1,
            1,
            1
        ],
        "isAccessory": false,
        "brand": "Hush Puppies",
        "price": 6999
};




// Add the hardcoded product to the containerClothing element
let containerClothing = document.getElementById("containerClothing");
containerClothing.appendChild(dynamicClothingSection(productDescription));
containerClothing.appendChild(dynamicClothingSection(productDescription1));
containerClothing.appendChild(dynamicClothingSection(productDescription2));
containerClothing.appendChild(dynamicClothingSection(productDescription3));


let containerAccessories = document.getElementById("containerAccessories");
containerAccessories.appendChild(dynamicClothingSection(productDescription));