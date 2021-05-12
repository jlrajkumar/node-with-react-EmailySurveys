const dev = require('../config/dev');
const keys = require('../config/dev');
const stripe = require('stripe')(dev.stripeSecretKey);

module.exports = app =>{
app.post('/api/stripe', async (req, res)=>{

    const charge = await stripe.charges.create({
        amount:500,
        currency:'usd',
        description:'$5 for 5 Credits',
        source: req.body.id,
    });
    console.log(charge);
});
};