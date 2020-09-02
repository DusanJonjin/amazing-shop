
/* Cut euro sign from product price and convert string to number,
then calculate subtotal price (price * quantity) for each product: */
export const calcSubTotal = product => {
    const purePrice = parseFloat(product.price.slice(1, product.price.length));
    const subTotal = parseFloat((purePrice * product.cartQuantity).toFixed(2));
    return subTotal;
}