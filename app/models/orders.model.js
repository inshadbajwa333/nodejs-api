const { mongoose } = require(".");

module.exports = mongoose =>{
    const orders = mongoose.model(
        "orders",
        mongoose.Schema({
            orderAddress: String,
            orderAmount: String,
            userId: String,
            restaurantId: String,
            paymentMode: Number,
            lat: String,
            lng: String,
            deliveryFee: String,
            orderStatus: Number
        },
        {
            timestamps: true
        })
    );
    return orders;
}