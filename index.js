const express = require('express');
 
const app = express();
//All the route handlers we are going to create over time will be associated
// or somehow registered with "app" obj here

app.get('/', (req,res) => {
    res.send('Hiya 👋 , I'm J L Raj Kumar
    🔭 I’m currently excelling on Javascript
    🌱 I’m currently learning ReactJS
    ⚡ I'm Enthusiastic to learn Cloud technologies
    👯 I’m looking to collaborate on Open Source projects
    💬 Ask me about SAP-ABAP|S4-HANA|Javascript|HTML|CSS|Flex-Box|UML....
    ⚡ Pro-tip: Knowledge is Divine! Inorder to GAIN more UNFURL more!!
    Connect... 🤝🏻
    @Linkedin - JLRajkumar!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
