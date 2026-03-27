const {UserModel, BookModel} = require('../module')

// router.get('/', (req, res) => {
//     const users = getAllUsers();
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })

exports.getAllUsers = async(req, res) => {
    const users = await UserModel.find();

    if(!users || users.length === 0){
        return res.status(404).json({
            success: false,
            message: "No users in the system"
        });
    }

    res.status(200).json({
        success: true,
        data: users
    });
}



exports.getSingleUserById = async(req, res) => {
    const {id} = req.params;
    
    const user = await UserModel.findById(id);
    // const user = await UserModel.findById(id);
    // const user = await UserModel.findOne({_id: id});

    if(!user){
        return res.status(404).json({
            success: false,
            message: `User with id not found: ${id}`
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
}


exports.createUser = async(req, res) => {
    const {name, email, subscriptionType, subscriptionDate} = req.body;

    if(!name || !email || !subscriptionType || !subscriptionDate){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        });
    }

    const user = await UserModel.create(data);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: data
    });
}


exports.updateUserById = async(req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        });
    }

    const user = await UserModel.findByIdAndUpdate(id, data, {new: true});

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    });
}


exports.deleteUserById = async(req, res) => {
    const {id} = req.params;
    const user = await UserModel.findByIdAndDelete(id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: `User with id not found: ${id}`
        });
    }

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        data: user
    });
}


exports.getSubscriptionDetailsById = async(req, res) => {
    const {id} = req.params;
    const user = await UserModel.findById(id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: `User with id not found: ${id}`
        });
    }

    res.status(200).json({
        success: true,
        data: user.subscriptionDetails
    });
}