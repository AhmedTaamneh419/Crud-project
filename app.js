const productName= document.querySelector(".container form input:nth-child(1)");
const productPrice= document.querySelector(".container form input:nth-child(2)");
const productDesc= document.querySelector(".container form input:nth-child(3)");
const productCategory= document.querySelector(".container form input:nth-child(4)");
let inp =document.querySelector(".container form  inp")
const formInput = document.querySelector(".container form");
const btnEdit = document.querySelector(".btnEdit");
const btnAdd = document.querySelector(".container form input:nth-child(5)")

const productContainer = [];

formInput.addEventListener("submit",addProduct)

function addProduct(e){
    e.preventDefault();

    let product={
        id:productContainer.length +1,
        name : productName.value,
        price : productPrice.value,
        desc: productDesc.value,
        category: productCategory.value,

    }
// we want to push values into the container
    productContainer.push(product)
    console.log(product)
    displayProduct()



}

function displayProduct(){
    var temp  =``;
// for(var i=0;i<productContainer.length ;i++){
   
//      temp += `
//     <div class="item">
//     <h3>${productContainer[i].name}</h3>
//     <p>${productContainer[i].desc}</p>
//     <div>${productContainer[i].price}</div>
//     <div>${productContainer[i].category}</div>
//      ` 
// }


productContainer.forEach((i)=>{
    temp += `

    <div class="item">
    <h3>${i.name}</h3>
    <p>${i.desc}</p>
    <div>${i.price}</div>
    <div>${i.category}</div>
    <button onclick="deleteProduct(${i.id-1})" class = "btn-del"> Delete</button>

    <button onclick="updateProduct(${i.id-1})" class = "btn-up"> Update</button>    </div>
     ` 
     console.log(i)

})
document.querySelector(".box").innerHTML = temp;
console.log(productContainer)
}

productContainer.findIndex(function(i){
    return i =="ahmed"
})


function clearInput(){
    inp.forEach((i)=>{
        i.value = ""

    })
    console.log(inp)

}


function deleteProduct(id){


    productContainer.splice(id,1)
    

    displayProduct()
}


function updateProduct(id){
      console.log(id)
   productName.value = productContainer[id].name;
   productPrice.value = productContainer[id].price;
   productDesc.value = productContainer[id].desc;
   productCategory.value = productContainer[id].category;
   document.querySelector(".inpIndex").value =id;


   btnEdit.style.display = "block"
   btnAdd.style.display = "none"

}



btnEdit.addEventListener("click",editProduct)


function editProduct(){
    let number = document.querySelector(".inpIndex").value;
    productContainer[number].name = productName.value;
    productContainer[number].price = productPrice.value;
    productContainer[number].desc = productDesc.value;
    productContainer[number].category = productCategory.value;
    displayProduct();
    }







