const TicketSerive = require('../services/emailService');
const create = async (req , res)=>{
    try {
        const response = await TicketSerive.create(req.body);
        return res.status(201).json({
            success : true,
            data : response,
            message :'Successfully registered an email',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:{},
            message:'Failed to register an email',
            err:error
        })
    } 
}
module.exports={
    create
}