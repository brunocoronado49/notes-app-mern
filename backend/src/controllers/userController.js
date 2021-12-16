const userController = {}
import User from '../models/User.js';

userController.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

userController.addUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({
        username: username
    })
    await newUser.save()
    console.log(newUser)
}

userController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
}

export default userController

