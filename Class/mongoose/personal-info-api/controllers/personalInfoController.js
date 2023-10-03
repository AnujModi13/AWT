const personalInfo = require("../models/PersonalInfo");


async function createPersonalInfo(req,res) {
    const {name , age, email} = req.body;

    try {
        const newInfo = new personalInfo({name, age, email});
        await newInfo.save();
        res.status(201).json(newInfo);
    }catch(error){
        res.status(500).json({ error : 'could not create personal info entry'})
    }
}



module.exports = {
    createPersonalInfo,
}
