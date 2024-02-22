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
  "name": "Listing soon",
  "preview": "img/logo.png",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
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
  "name": "Listing Soon",
  "preview": "img/logo.png",
  "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708559-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708542-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-3.jpg"
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
        "name": "Listing Soon",
        "preview": "img/logo.png",
        "photos": [
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/329c61f4-640b-44b6-98a6-8fa1fe0540191537343756244-2.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/6ba2ccd4-7f67-486d-abca-ad5a76a9ec701537343756256-3.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/bfb2efca-a6ca-4290-a680-08977b14d8341537343756267-4.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/581164ce-30e8-42da-9454-7e49682ad6371537343756277-5.jpg",
            "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/54d44ce2-e62b-4157-8b78-a96a6d187be91537343756288-6.jpg"
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
        "brand": "GenX",
        "price": 6999
};

const productDescription3 = {
  "id": "4",
        "name": "Listing Soon",
        "preview": "img/logo.png",
        "photos": [
            "img/logo.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673889-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-2.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673866-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-3.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673837-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-4.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673814-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-5.jpg"
        ],
        "description": "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
        "size": [
            1,
            1,
            1,
            1,
            1
        ],
        "isAccessory": false,
        "brand": "Gen-X",
        "price": 9999
};

const productDescription4 = {
  "id": "4",
        "name": "Listing Soon",
        "preview": "img/logo.png",
        "photos": [
            "img/logo.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673889-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-2.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673866-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-3.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673837-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-4.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673814-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-5.jpg"
        ],
        "description": "Black solid leather jacket, has a spread collar, 3 pockets, zip closure, long sleeves, straight hem, polyester lining",
        "size": [
            1,
            1,
            1,
            1,
            1
        ],
        "isAccessory": false,
        "brand": "Gen-X",
        "price": 9999
};
const productDescription5 = {
  "id": "4",
        "name": "Listing Soon",
        "preview": "img/logo.png",
        "photos": [
            "img/logo.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673889-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-2.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673866-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-3.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673837-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-4.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673814-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-5.jpg"
        ],
        "description": "GenX Smart Tech brand",
        "size": [
            1,
            1,
            1,
            1,
            1
        ],
        "isAccessory": false,
        "brand": "Gen-X",
        "price": 9999
};


// Add the hardcoded product to the containerClothing element
let containerClothing = document.getElementById("containerClothing");
containerClothing.appendChild(dynamicClothingSection(productDescription));
containerClothing.appendChild(dynamicClothingSection(productDescription1));
containerClothing.appendChild(dynamicClothingSection(productDescription2));
containerClothing.appendChild(dynamicClothingSection(productDescription3));


let containerAccessories = document.getElementById("containerAccessories");
containerAccessories.appendChild(dynamicClothingSection(productDescription1));
containerAccessories.appendChild(dynamicClothingSection(productDescription2));