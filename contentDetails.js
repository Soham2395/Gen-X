console.clear();

let id = location.search.split('?')[1];


if (document.cookie.indexOf(',counter=') >= 0) {
    let counter = document.cookie.split(',')[1].split('=')[1];
    document.getElementById("badge").innerHTML = counter;
}

// Hardcoded product details
// const hardcodedProduct = {
//     "id": "1",
//     "name": "Men Navy Blue Solid Sweatshirt",
//     "preview": "https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
//     "photos": [
//         "https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
//         "https://m.media-amazon.com/images/I/61edfxEMM5L.SX679.jpg",
//         "img/logo.png",
//         "img/logo.png",
//         "img/logo.png"
        
//     ],
//     "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
//     "size": [1, 1, 0, 1, 0],
//     "isAccessory": false,
//     "brand": "United Colors of Benetton",
//     "price": 2599
// };

function dynamicContentDetails(ob) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';

    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = ob.preview;

    imageSectionDiv.appendChild(imgTag);

    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(ob.name);
    h1.appendChild(h1Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(ob.brand);
    h4.appendChild(h4Text);

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3DetailsDiv = document.createElement('h3');
    let h3DetailsText = document.createTextNode('Rs ' + ob.price);
    h3DetailsDiv.appendChild(h3DetailsText);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('Description');
    h3.appendChild(h3Text);

    let para = document.createElement('p');
    let paraText = document.createTextNode(ob.description);
    para.appendChild(paraText);

    let productPreviewDiv = document.createElement('div');
    productPreviewDiv.id = 'productPreview';

    let h3ProductPreviewDiv = document.createElement('h3');
    let h3ProductPreviewText = document.createTextNode('Product Preview');
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText);
    productPreviewDiv.appendChild(h3ProductPreviewDiv);

    let i;
    for (i = 0; i < ob.photos.length; i++) {
        let imgTagProductPreviewDiv = document.createElement('img');
        imgTagProductPreviewDiv.id = 'previewImg';
        imgTagProductPreviewDiv.src = ob.photos[i];
        imgTagProductPreviewDiv.onclick = function (event) {
            console.log("clicked" + this.src);
            imgTag.src = ob.photos[i];
            document.getElementById("imgDetails").src = this.src;
        };
        productPreviewDiv.appendChild(imgTagProductPreviewDiv);
    }

    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    let buttonTag = document.createElement('button');
    buttonDiv.appendChild(buttonTag);

    buttonText = document.createTextNode('Add to Cart');
    buttonTag.onclick = function () {
        let order = id + " ";
        let counter = 1;
        if (document.cookie.indexOf(',counter=') >= 0) {
            order = id + " " + document.cookie.split(',')[0].split('=')[1];
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1;
        }
        document.cookie = "orderId=" + order + ",counter=" + counter;
        document.getElementById("badge").innerHTML = counter;
        console.log(document.cookie);
    };
    buttonTag.appendChild(buttonText);

    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(h3DetailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(para);
    productDetailsDiv.appendChild(productPreviewDiv);
    productDetailsDiv.appendChild(buttonDiv);

    return mainContainer;
}

// Call dynamicContentDetails with the hardcoded product
//dynamicContentDetails(hardcodedProduct);

function getProductDetailsById(id) {
    // Simulated product data without using an API
    const products = {
       "1": {
            "id": "1",
            "name": "X-Play wear",
            "preview": "https://m.media-amazon.com/images/I/71-D0k+XUsL._SL1500_.jpg",
            "photos": ["https://m.media-amazon.com/images/I/71-D0k+XUsL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71Qhb5KGtEL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71PtFgU9zwL._SL1500_.jpg", "https://m.media-amazon.com/images/I/71rAEvNBX3L._SL1500_.jpg","https://m.media-amazon.com/images/I/6118xBVFzcL._SL1500_.jpg"],
            "description": "Immerse yourself in unparalleled gaming audio with GenX's X-Playwear gaming headset.",
            "size": [1, 1, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Gaming Headset",
            "price":819 
        },
        "2": {
            "id": "2",
            "name": "Q-Powerbank",
            "preview": "https://m.media-amazon.com/images/I/515Y+-BrJJL._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/515Y+-BrJJL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61VlteeUUYL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61Be6tnweTL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61CnGCR3WWL._AC_SL1500_.jpg"
            ],
            "description": " Unleash the freedom of wireless charging on the go",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | wireless PowerBank",
            "price": 683
        },
        "3": {
            "id": "3",
            "name": "GenX Sports-SG",
            "preview": "https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
            "photos": ["https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg", "https://m.media-amazon.com/images/I/610rvcXNg3L.SX679.jpg", "https://m.media-amazon.com/images/I/61yjr+vhbaL.SX679.jpg", "https://m.media-amazon.com/images/I/61mkpp+F95L.SX679.jpg"],
            "description": "Your ultimate companion for fitness tracking and performance optimization on the go",
            "size": [1, 1, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Sports Watch",
            "price":819 
        },
"4": {
            "id": "4",
            "name": "Gen-Multi Hub",
            "preview": "https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71dcumKkzfL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71BQb61GmNL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/710aRgLcPML._AC_SL1500_.jpg"
            ],
            "description": "Your all-in-one solution for on-the-go power with multiple ports",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Multiport Powerbank",
            "price": 2586
        },
        "5": {
            "id": "5",
            "name": "X-BlueConnect",
            "preview": "https://m.media-amazon.com/images/I/8100GPA0v0L._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/8100GPA0v0L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71V8YBjvqaL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71pipdbYJyL._AC_SL1500_.jpg"
            ],
            "description": "Compact, powerful, and perfect for on-the-go music enthusiasts.",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | portable bluethtooth speaker",
            "price": 864
        },
"6": {
            "id": "6",
            "name": "X-SmartHealth",
            "preview": "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
                "https://m.media-amazon.com/images/I/71GD8iJkxdL.SX679.jpg",
                "https://m.media-amazon.com/images/I/61OlNNLretL.SX679.jpg"
            ],
            "description": "Your personal health companion, monitoring vital signs and activity seamlessly",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Health care Smartwatch",
            "price": 864
        },
"7": {
            "id": "7",
            "name": "X-Travelfold",
            "preview": "https://m.media-amazon.com/images/I/61yOkOzxZ0L._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61yOkOzxZ0L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61ifpG78ZiL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/61T60tQCr4L._AC_SL1500_.jpg"
            ],
            "description": " Compact and versatile, delivering immersive sound wherever you go.",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Foldable Travel Headset",
            "price": 3311
        },
        "8": {
            "id": "8",
            "name": "GenX's Bass-Enhanced Headphones",
            "preview": "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
            "photos": [
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-obsidian-black-hero-view.png?v=1698221486&width=990",
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-obsidian-black-mode-view.png?v=1698221486&width=990"
            ],
            "description": " Immerse yourself in deep, rich audio with powerful low-end frequencies",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Bass Enhanced Earphones",
            "price": 882
        },
         "9": {
            "id": "9",
            "name": "GenX TurboCharge Powerbank",
            "preview": "https://m.media-amazon.com/images/I/61MaSVeJaYL.AC_SL1500.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61MaSVeJaYL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/71hkAmh-QHL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/61-WO962L0L.SX679.jpg",
                "https://m.media-amazon.com/images/I/71Kf-XVZF7L.AC_SL1500.jpg"
            ],
            "description": "Fuel your devices at lightning speed, keeping you powered up on the fly",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Fast Charging Powerbank",
            "price": 683
        },

        "10": {
            "id": "10",
            "name": "F-Powerbank",
            "preview": "https://m.media-amazon.com/images/I/81zqOR1a01L._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/81zqOR1a01L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81pv93iN6nL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81C-53UyHYL._AC_SL1500_.jpg"
            ],
            "description": "Meet the Q-Powerbank: your on-the-go energy solution, providing rapid charging capabilities to keep you powered up anytime, anywhere",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Floating Bluetooth Speaker",
            "price": 683
        },

        "11": {
            "id": "11",
            "name": "GenX ThunderBolt Cable",
            "preview": "https://m.media-amazon.com/images/I/61vthFWyMuL._SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61vthFWyMuL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71oRRkpO33L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71kHKErv04L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71mHx5ivnKL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/616zYJUQVTL._SL1500_.jpg"
            ],
            "description": "Lightning-fast charging and data transfer for all your devices",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Lightning Cable",
            "price": 683
        },

        "12": {
            "id": "12",
            "name": "waterproof Speaker",
            "preview": "https://m.media-amazon.com/images/I/81lRYveurDL._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/81lRYveurDL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71hCJP5QewL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/815ryMmqeBL._AC_SL1500_.jpg",
            ],
            "description": "Experience the warmth of sound and style with water speaker",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Waterproof Speaker",
            "price": 683
        },
"13": {
            "id": "13",
            "name": "X SlimCharge",
            "preview": "https://m.media-amazon.com/images/I/61vfkQDpRiL._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61vfkQDpRiL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71VYXK-Dx2L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81roj19LbdL._AC_SL1500_.jpg",
        
            ],
            "description": "Power on the go with sleek, ultra-slim design for effortless portability",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Slim Powerbank",
            "price": 683
        },

        "14": {
            "id": "14",
            "name":"  GenX AquaPro DiveMaste",
            "preview": "https://m.media-amazon.com/images/I/71eFD3KyuXL._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/71eFD3KyuXL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81yEQT0bUaL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71H5i-wxXzL._AC_SL1500_.jpg",
        
            ],
            "description": "Dive deeper with confidence, equipped with advanced underwater tracking and safety features",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Diving SmartWatch",
            "price": 683
        },

        "15": {
            "id": "15",
            "name":" Gen-X RetroHit Speaker",
            "preview": "https://m.media-amazon.com/images/I/815hBQIdBcL._AC_SL1500_.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/815hBQIdBcL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/91An8O3810L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81n+9rRBFvL._AC_SL1500_.jpg",
        
            ],
            "description": "Blast the past with vintage style and modern sound quality for a nostalgic audio experience GenX's WoodBeats Speaker, featuring a luxurious wooden finish",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X | Wooden Speaker",
            "price": 683
        },
        

        // Add more products as needed
    };
    

    // Return product details based on the provided id
    return products[id];
}

function dynamicContentDetails(id) {
    // Fetch product details based on the provided id
    const productDetails = getProductDetailsById(id);

    // Ensure that productDetails is not undefined
    if (!productDetails) {
        console.error("Product details not found for id:", id);
        return;
    }

    // Create and manipulate HTML elements to display product details
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    // Create an image element
    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = productDetails.preview;
    mainContainer.appendChild(imgTag);
    imgTag.style.width = '100%';
    imgTag.style.height = 'auto';
    // imgTag.style.marginLeft
    //
    // imageSectionDiv.appendChild(imgTag)
    //


    // Create a div for product details
    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';
    productDetailsDiv.style.paddingLeft = '20px';

    // Create and append elements for name, brand, price, and description
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(productDetails.name);
    h1.appendChild(h1Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(productDetails.brand);
    h4.appendChild(h4Text);


    //
    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'

    //


    let h3DetailsDiv = document.createElement('h3');
    let h3DetailsText = document.createTextNode('Rs ' + productDetails.price);
    h3DetailsDiv.appendChild(h3DetailsText);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('Description');
    h3.appendChild(h3Text);

    let para = document.createElement('p');
    let paraText = document.createTextNode(productDetails.description);
    para.appendChild(paraText);

    ////

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('Product Preview')
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv)


    let i;
    for(i=0; i<productDetails.photos.length; i++)
    {
        let imgTagProductPreviewDiv = document.createElement('img')
        imgTagProductPreviewDiv.id = 'previewImg'
        imgTagProductPreviewDiv.src = productDetails.photos[i]
        imgTagProductPreviewDiv.onclick = function(event)
        {
            console.log("clicked" + this.src)
            imgTag.src = productDetails.photos[i]
            document.getElementById("imgDetails").src = this.src 
            
        }
        productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)


    buttonText = document.createTextNode('Add to Cart')
    buttonTag.onclick  =   function()
    {
        let order = id+" "
        let counter = 1
        if(document.cookie.indexOf(',counter=')>=0)
        {
            order = id + " " + document.cookie.split(',')[0].split('=')[1]
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
        }
        document.cookie = "orderId=" + order + ",counter=" + counter
        document.getElementById("badge").innerHTML = counter
        console.log(document.cookie)
    }
    buttonTag.appendChild(buttonText)





    /////

    // Append product details elements to productDetailsDiv
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    // productDetailsDiv.appendChild(h3DetailsDiv);
    productDetailsDiv.appendChild(detailsDiv);
    // productDetailsDiv.appendChild(h3);
    // productDetailsDiv.appendChild(para);
    detailsDiv.appendChild(h3DetailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(para);

    productDetailsDiv.appendChild(productPreviewDiv)

    // Append productDetailsDiv to mainContainer
    mainContainer.appendChild(productDetailsDiv);

    ///
    productDetailsDiv.appendChild(buttonDiv)
    


    ////
    // ... continue creating and appending other HTML elements based on productDetails

    return mainContainer;
}



// Call dynamicContentDetails with the retrieved id
if (id) {
    console.log(id);
    dynamicContentDetails(id);
} else {
    console.error("Unable to retrieve a valid id from the query parameter.");
}
