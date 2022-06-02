let cartItem = class CartItem {
    constructor(name, quantity, price, image) {
        this.name = name
        this.quantity = quantity
        this.price = price
        this.image = image
    }

    convertToCartItem(data)
    {
        let parse = JSON.parse(data);

        this.price = 0
        this.quantity = 1
        this.name = ""

        if (parse["price"] != null)
            this.price = parse["price"]

        if (parse["quantity"] != null)
            this.quantity = parse["quantity"]

        if (parse["name"] != null)
            this.name = parse["name"]

        return this
    }
};

export default cartItem