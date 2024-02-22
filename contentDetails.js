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
//     "preview": "img/logo.png",
//     "photos": [
//         "img/logo.png",
//         "img/logo.png",
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
            "name": "Men Navy Blue Solid Sweatshirt",
            "preview": "img/logo.png",
            "photos": ["img/logo.png", "img/logo.png", "img/logo.png", "img/logo.png", "img/logo.png"],
            "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
            "size": [1, 1, 0, 1, 0],
            "isAccessory": false,
            "brand": "United Colors of Benetton",
            "price": 2599
        },
        "2": {
            "id": "2",
            "name": "Listing Soon",
            "preview": "img/logo.png",
            "photos": [
                "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
                "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708559-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-2.jpg",
                "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708542-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-3.jpg"
            ],
            "description": "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
            "size": [0, 0, 0, 1, 0],
            "isAccessory": false,
            "brand": "Puma",
            "price": 7999
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

    // Create an image element
    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = productDetails.preview;
    mainContainer.appendChild(imgTag);

    // Create a div for product details
    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    // Create and append elements for name, brand, price, and description
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(productDetails.name);
    h1.appendChild(h1Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(productDetails.brand);
    h4.appendChild(h4Text);

    let h3DetailsDiv = document.createElement('h3');
    let h3DetailsText = document.createTextNode('Rs ' + productDetails.price);
    h3DetailsDiv.appendChild(h3DetailsText);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('Description');
    h3.appendChild(h3Text);

    let para = document.createElement('p');
    let paraText = document.createTextNode(productDetails.description);
    para.appendChild(paraText);

    // Append product details elements to productDetailsDiv
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(h3DetailsDiv);
    productDetailsDiv.appendChild(h3);
    productDetailsDiv.appendChild(para);

    // Append productDetailsDiv to mainContainer
    mainContainer.appendChild(productDetailsDiv);

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





