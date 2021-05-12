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
    
//Add credits to user after charging the CC
     req.user.credits += 5;
   
//Save user credits to DB 
     const user =  await  req.user.save();
    res.send(user);
});
};