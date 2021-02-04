module.exports = mongoose =>{
    const restaurants = mongoose.model(
        "restaurants",
        mongoose.Schema({
            restaurantName:String,
            firstName:String,
            lastName:String,
            email: String,
            phoneNumber: String,
            address: String,
            country: String,
            lat: String,
            log: String,
            tradeLicenseNumber: String
        },
        {
            timestamps: true
        })
    );
    return restaurants;

}