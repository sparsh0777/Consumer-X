const mongoose = require("mongoose")

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/PriceDB');
}
main();


const listingSchema = new mongoose.Schema({
    item_name :{
        type: String,
        required: true
    },
    min_price: Number,
    max_price: Number,
    curr_price: Number,
    demand: Number,
    supply: Number
}) 

const Listing = mongoose.model("Listing",listingSchema);

const iphone = new Listing({
    item_name: "dell g3",
    min_price:20000,
    max_price:35000,
    curr_price: 21000,
    demand: 26,
    supply:22,
})

iphone.save();


async function updatePrices(){
    for await (const listing of Object.values(listings)){
        const newprice =  listing.curr_price * (1+((listing.demand- listing.supply)/listing.supply))
        if(newprice > listing.max_price){
            listing.curr_price = listing.max_price
        }
        else if(newprice < listing.min_price){
            listing.curr_price = listing.min_price
        }
        else{
            listing.curr_price = newprice;
        }
        console.log(listing.curr_price);
    };
   console.log(listings);
}
