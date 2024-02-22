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
            "name": "GenX TimeMaster Classic",
            "preview": "https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg",
            "photos": ["https://m.media-amazon.com/images/I/61ftRB6KycL.SX679.jpg", "https://m.media-amazon.com/images/I/610rvcXNg3L.SX679.jpg", "https://m.media-amazon.com/images/I/61yjr+vhbaL.SX679.jpg", "https://m.media-amazon.com/images/I/61mkpp+F95L.SX679.jpg"],
            "description": "Experience timeless elegance and cutting-edge technology with the Gen-X TimeMaster Classic - your stylish companion for staying connected and enhancing your lifestyle",
            "size": [1, 1, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price":819 
        },
        "2": {
            "id": "2",
            "name": "Q-Powerbank",
            "preview": "https://m.media-amazon.com/images/I/61MaSVeJaYL.AC_SL1500.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61MaSVeJaYL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/71hkAmh-QHL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/61-WO962L0L.SX679.jpg",
                "https://m.media-amazon.com/images/I/71Kf-XVZF7L.AC_SL1500.jpg"
            ],
            "description": "Meet the Q-Powerbank: your on-the-go energy solution, providing rapid charging capabilities to keep you powered up anytime, anywhere",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 683
        },
        "3": {
            "id": "3",
            "name": "Gen-X SwiftSync Earbuds",
            "preview": "https://m.media-amazon.com/images/I/51dfG2mEEbL.AC_SL1500.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/51dfG2mEEbL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/51tYwWn3wSL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/41CijCww8KL.AC_SL1500.jpg",
                "https://m.media-amazon.com/images/I/51SjEQ8wj4L.AC_SL1500.jpg"
            ],
            "description": "Experience ultra-low latency audio with seamless connectivity for the next generation",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 1045
        },
"4": {
            "id": "4",
            "name": "GenVoice Home Hub",
            "preview": "https://m.media-amazon.com/images/I/81lGxS2ZisL.SX569.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/81lGxS2ZisL.SX569.jpg",
                "https://m.media-amazon.com/images/I/61lPcAKY+vL.SX569.jpg",
                "https://m.media-amazon.com/images/I/71AbQ3Hf75L.SX569.jpg"
            ],
            "description": "Elevate your home with effortless voice-controlled intelligence",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 2586
        },
        "5": {
            "id": "5",
            "name": "X-ConnectLTE",
            "preview": "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/61nBzBREzGL.SX679.jpg",
                "https://m.media-amazon.com/images/I/71GD8iJkxdL.SX679.jpg",
                "https://m.media-amazon.com/images/I/61OlNNLretL.SX679.jpg"
            ],
            "description": "Introducing the 'GenX ConnectLTE' smartwatch - your ultimate companion for seamless connectivity, advanced tracking, and unparalleled convenience on the go",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 864
        },
"6": {
            "id": "6",
            "name": "SonicWave Over-Ear Headphones",
            "preview": "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
            "photos": [
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-black-front-view.png?v=1698221486&width=990",
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-obsidian-black-hero-view.png?v=1698221486&width=990",
                "https://soniclamb.com/cdn/shop/files/sonic-lamb-over-ear-headhpones-obsidian-black-mode-view.png?v=1698221486&width=990"
            ],
            "description": "Immerse yourself in premium sound quality with the SonicWave Over-Ear Headphones by GenX.",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 882
        },
"7": {
            "id": "7",
            "name": "X-360 SoundSphere",
            "preview": "https://m.media-amazon.com/images/I/610Jx43eHaL.SX679.jpg",
            "photos": [
                "https://m.media-amazon.com/images/I/610Jx43eHaL.SX679.jpg",
                "https://m.media-amazon.com/images/I/71dunCe1hBL.SX679.jpg",
                "https://m.media-amazon.com/images/I/81ljEt+Hz2L.SX679.jpg"
            ],
            "description": "Introducing the 'GenX360 SoundSphere' : Immerse yourself in unparalleled audio bliss with our cutting-edge speaker, delivering immersive 360-degree surround sound for an unforgettable listening experience.",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Gen-X",
            "price": 3311
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