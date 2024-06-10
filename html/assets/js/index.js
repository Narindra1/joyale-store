fetch('./assets/data/data.json')
    .then(response => response.json())
    .then(products => {
        const panierContainer = ""
        const container = document.querySelector('.block_nouveaute')
        products.forEach((product )=> {
            addProduct(product, container)
            console.log(this);
        });
        showProduct(products, container, panierContainer)
    })
    
const addProduct = (product, container)=>{
    container.innerHTML += `
    <div class="nouveaute" data-id = "${product.id}">
        <div class="photo">
            <img src="${product.photos[0]}" alt="">
        </div>    
        <div class="details_produit">
            <h3 class="nom">${product.description}</h3>
            <h3 class="prix">${product.prix} £</h3>
            <div class="rate">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            </div>
        </div>
    </div>
    ` 
}

const showProduct = (products, container, panierContainer)=>{
    const productItems = document.querySelectorAll('.nouveaute');
    let myProduct = []
    productItems.forEach(productItem =>{
        productItem.addEventListener('click', (e)=>{
            console.log(typeof(productItem.getAttribute("data-id")));
            myProduct = products.filter(product => {
                return product.id == productItem.getAttribute("data-id");
            })
            console.log(myProduct);
            renderShowDetail(myProduct[0], container)
        })  
    }) 
   
}

const renderShowDetail = (product, container) =>{
    const main = document.querySelector('main')
    // main.textContent = '';
    
    const render = `
    <div class="details-container-item-left  col-md-6 col-12 " data-id = "${product.id}">
    <div class="details-left ">
        <div class="product-image">
            <img class="w-100" src="${product.photos[0]}" alt="">
        </div>
    </div>
    </div>
    <div class="details-container-item-right  col-md-6 col-12">
        <div class="details-right ">
            <div class="product-title-details">
                <h3>${product.description}</h3>
            </div>

            <div class="product-prix-details">
                <h3>${product.prix} €</h3>
            </div>
            <hr>
            <div class="">
                <div class="product-quantity d-flex align-items-center gap-4">
                    <span class="control-label">Quantité</span>
                    <div class="qty">
                    <input class="input-qty" type="number" min="1" value="1">
                    </div>
                </div>

                <div class="add">
                    <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" type="submit">
                    <i class="fa fa-shopping-cart"></i>
                    Ajouter au panier
                    </button>
                </div>
                
            </div>


            <div class="blockreassurance_product">
                <div class="item-product-container">
                    <span class="item-product">
                        <img src="./assets/img/theme/rea_customer_service.png"/>
                    </span>
                    <p class="block-title" style="color:#000000;">Service client au 06 49 54 94 19</p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img
                            src="./assets/img/theme/reassurance-joya-le-store-moyens-paiements.png"/>

                    </span>
                    <p class="block-title" style="color:#000000;">Paiements sécurisés; 3x sans frais avec Alma
                    </p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img class=""
                            src="./assets/img/theme/rea_shipping.png"/>  
                    </span>
                    <p class="block-title" style="color:#000000;">Livraison offerte avec Mondial Relay à partir de
                        100€</p>
                </div>
                <div class="item-product-container">
                    <span class="item-product">
                        <img src="./assets/img/theme/rea_click_collect.png"/>
                    </span>
                    <p class="block-title" style="color:#000000;">Click; Collect à La Grande Motte</p>
                </div>
                <div class="clearfix"></div>
                <hr>
            </div>
        </div>
    </div>
    `
    container.innerHTML = render;
}

const addPanier = (product, container, panierContainer)=>{
    container.innerHTML = `
        
    `
}