let searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active')
        searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
   uploadform.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>
{
    shoppingcart.classList.toggle('active');
     searchForm.classList.remove('active');
       uploadform.classList.remove('active');

}
let uploadform = document.querySelector('.upload-form');
const defaultBtn =  document.querySelector('.default-btn');
const customBtn =  document.querySelector('.custom-btn');
const fileName =  document.querySelector('.file-name');

let regExp =/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_]+$/;

function active(){
    defaultBtn.click();
}
defaultBtn.addEventListener("change",function(){
    if (this.value){
        let nameValue = this.value.match(regExp);
        fileName.textContent = nameValue;
    }
});
document.querySelector('#up-btn').onclick =() =>
    {
        uploadform.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingcart.classList.remove('active');
       
    }
    Window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shoppingcart.classList.remove('active');
       uploadform.classList.remove('active');
    }
    
