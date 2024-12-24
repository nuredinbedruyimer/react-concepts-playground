export const getTotalPrice = () => {
    const prices = [23, 2, 3, 3.9];
    let totalPrice = 0;
    for (let price of prices) {
        totalPrice += price;
    }
    return totalPrice;
};
