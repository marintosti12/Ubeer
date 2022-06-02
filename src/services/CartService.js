let cartService = class CartService {
    getCartArray()
    {
        let cart = [];

        cart = JSON.parse(localStorage.getItem('cart'));

        return cart;
    }
    getItemIndexInCart(item) {
        let cart = this.getCartArray()

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === item.name)
                return i
        }
        return -1
    }
    addItemToCart(item) {
        let cart = this.getCartArray()

        if (cart != null) {
            let exist = this.getItemIndexInCart(item);

            if (exist != -1) {
                cart[exist].quantity += item.quantity;
                cart[exist].price += item.price;
            } else
                cart.push(item);

            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.setItem("cart", JSON.stringify([item]));
        }
    }

    removeItemToCart(item)
    {
        let cart = this.getCartArray()

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name === item.name)
                cart.splice(i, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

export default cartService