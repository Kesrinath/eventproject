var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

///left child image
let img = document.createElement("img");
img.src = productData.preview;
img.id = "productimg";
//console.log(img);
let leftcoloumn = document.querySelector(".left-coloumn");
leftcoloumn.appendChild(img);

/// right coloumn headings
let h1 = document.createElement("h1");
let h4 = document.createElement("h4");
let h3 = document.createElement("h3");
let span = document.createElement("span");

h1.innerText = productData.name;
h1.id = "name";
h4.innerText = productData.brand;
h4.id = "brand";
h3.innerText = "Price: Rs";
span.innerText = productData.price;
span.id = "price";
h3.appendChild(span);
let productdescription = document.querySelector(".product-discription");
productdescription.appendChild(h1);
productdescription.appendChild(h4);
productdescription.appendChild(h3);

// product description

let Description = document.createElement("div");
Description.classList.add("discription");
let heading3 = document.createElement("h3");
heading3.innerText = "Description";
let p = document.createElement("p");
p.innerText = productData.description;

Description.appendChild(heading3);
Description.appendChild(p);
productdescription.appendChild(Description);

/// preview images

let heading = document.createElement("h3");
heading.innerText = "product preview";

let div = document.createElement("div");
div.classList.add("previewimg");

for (let i = 0; i < productData.photos.length; i++) {
  let image = document.createElement("img");
  image.id = "img" + i;
  image.src = productData.photos[i];
  image.classList.add("image");
  div.appendChild(image);
}

let productPreview = document.createElement("div");
productPreview.classList.add("product-preview");
productPreview.appendChild(heading);
productPreview.appendChild(div);
productdescription.appendChild(productPreview);

let image = document.querySelectorAll(".image");
let previewImg = document.querySelector(".previewimg");
image.forEach((element) => {
  element.addEventListener("click", () => {
    let productImg = document.querySelector("#productimg");
    productImg.src = productData.photos[element];
    image.classList.add("active");
  });
});
image.classList.add("active");
