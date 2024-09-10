/**
 * Question 1
 * Function to calculate array of student data
 * 
 * @param IStudent
 */

//Solve


/**
 * Question 2
 */

//Solve
interface IProduct{
    name: string;
    price: number;
}

interface ITransaction {
    products: {product: IProduct,qty: number}[];
}

class Product implements IProduct{
    name: string;
    price: number;

    constructor(paramName: string, paramPrice: number) {
        this.name = paramName;
        this.price = paramPrice;
    }
}

class Transaction implements ITransaction {
    #total;
    products = [];

    addToCart(product: Product, qty: number) {
        this.total += product.price * qty;
        this.products.push({
            product,
            qty,
        });
    }
}