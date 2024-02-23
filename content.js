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
  imgTag.className= 'productImage'
 

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
  "name": "GenX TimeMaster Classic",
  "preview": "https://m.media-amazon.com/images/I/71-D0k+XUsL._SL1500_.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    // Add other photo URLs
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    
    1,
    1,
    1,
    1,
    1
  ],
  "isAccessory": true,
  "brand": "Gen-X",
  "price": 819
};


const productDescription1 = {
  "id": "2",
  "name": "Q-Powerbank",
  "preview": "https://m.media-amazon.com/images/I/515Y+-BrJJL._AC_SL1500_.jpg",
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
  "brand": "Gen-X",
  "price": 683
};

const productDescription2 = {
  "id": "3",
        "name": "Gen-X SwiftSync Earbuds",
        "preview":"https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
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
        "price": 1045
};

const productDescription3 = {
  "id": "4",
        "name": "GenVoice Home Hub",
        "preview": "https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL1500_.jpg",
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
        "price": 2586
};

const productDescription4 = {
  "id": "5",
        "name": "X-ConnectLTE",
        "preview": "https://m.media-amazon.com/images/I/8100GPA0v0L._AC_SL1500_.jpg",
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
        "price": 864
};
const productDescription5 = {
  "id": "6",
        "name": "SonicWave Over-Ear",
        "preview": "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
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
        "price": 882
};
const productDescription6 = {
  "id": "7",
        "name": "X-360 SoundSphere",
        "preview":"https://m.media-amazon.com/images/I/61yOkOzxZ0L._AC_SL1500_.jpg",
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
        "price": 3311
        
};

const productDescription7 = {
  "id": "8",
        "name": "X-360 SoundSphere",
        "preview":"https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
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
        "price": 3311
        
};

const productDescription8 = {
  "id": "9",
        "name": "X-360 SoundSphere",
        "preview":"https://m.media-amazon.com/images/I/61MaSVeJaYL.AC_SL1500.jpg",
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
        "price": 3311
        
};
const productDescription9 = {
  "id": "10",
        "name": "X-360 SoundSphere",
        "preview":"https://m.media-amazon.com/images/I/81zqOR1a01L._AC_SL1500_.jpg",
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
        "price": 3311
        
};
const productDescription10 = {
  "id": "11",
        "name": "X-360 SoundSphere",
        "preview": "https://m.media-amazon.com/images/I/61vthFWyMuL._SL1500_.jpg",
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
        "price": 3311
        
};
const productDescription11 = {
  "id": "12",
        "name": "X-360 SoundSphere",
        "preview":"https://m.media-amazon.com/images/I/61vthFWyMuL._SL1500_.jpg",
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
        "price": 3311
        
};


// Add the hardcoded product to the containerClothing element
let containerClothing = document.getElementById("containerClothing");
containerClothing.appendChild(dynamicClothingSection(productDescription));
containerClothing.appendChild(dynamicClothingSection(productDescription1));
containerClothing.appendChild(dynamicClothingSection(productDescription2));
containerClothing.appendChild(dynamicClothingSection(productDescription3));
containerClothing.appendChild(dynamicClothingSection(productDescription4));
containerClothing.appendChild(dynamicClothingSection(productDescription5));
containerClothing.appendChild(dynamicClothingSection(productDescription6));
containerClothing.appendChild(dynamicClothingSection(productDescription7));
containerClothing.appendChild(dynamicClothingSection(productDescription8));
// containerClothing.appendChild(dynamicClothingSection(productDescription9));
containerClothing.appendChild(dynamicClothingSection(productDescription11));
containerClothing.appendChild(dynamicClothingSection(productDescription12));

let containerAccessories = document.getElementById("containerAccessories");
containerAccessories.appendChild(dynamicClothingSection(productDescription9));
// containerAccessories.appendChild(dynamicClothingSection(productDescription11));
// containerAccessories.appendChild(dynamicClothingSection(productDescription12));
