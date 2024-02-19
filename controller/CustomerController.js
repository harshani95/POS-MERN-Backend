const CustomerSchema= require('../model/CustomerSchema');

const create=(req,resp)=>{
    const customer = new CustomerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customer.save().then(response=>{
        resp.status(201).json({'message':'customer saved!'});
    }).catch(error=>{
        return resp.status(500).json(error);
    });
}


// const findById=(req,resp)=>{
//     CustomerSchema.findOne({'_id':req.params.id}).then(selectedObj=>{
//         if(selectedObj!=null){
//            return  resp.status(200).json(selectedObj);
//         }
//         return resp.status(404).json({'message':'customer not found!'});
//     });
// }

const findById = async (req, res) => {
    try {
        const customer = await CustomerSchema.findById(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error fetching customer by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const update= async (req,resp)=>{
    const updateData = await CustomerSchema.findOneAndUpdate({'_id':req.params.id},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        }
    },{new:true});

    if(updateData){
        return  resp.status(200).json({'message':'updated'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }
}


const deleteById=async (req,resp)=>{
    const deleteData = await CustomerSchema.findByIdAndDelete({'_id':req.params.id});

    if(deleteData){
        return  resp.status(204).json({'message':'deleted'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }
}


const findAll=(req,resp)=>{
    try{
        const {searchText, page=1, size=10}=req.query;

        const pageNumber=parseInt(page);
        const pageSize=parseInt(size);

        const query ={};
        if(searchText){
            query.$text={$search:searchText}
        }

        const skip= (pageNumber-1) * pageSize;

       const data =  CustomerSchema.find(query)
            .limit(pageSize)
            .skip(skip)
            .then(response=>{
                return resp.status(200).json(response);
            })
 
        
    }catch (error){
        return resp.status(500).json({'message':'internal server error'});
    }
}

const findCount=(req,resp)=>{
    try{
        CustomerSchema.countDocuments().then(data=>{
            return resp.status(200).json(data);
        })

    }catch (error){
        return resp.status(500).json({'message':'internal server error'});
    }
}

module.exports={
    create,
    findById,
    update,
    deleteById,
    findAll,
    findCount
}