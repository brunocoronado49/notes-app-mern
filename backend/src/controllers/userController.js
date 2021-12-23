const userController = {}
import User from '../models/User.js';

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

userController.addUser = async (req, res) => {
   try {
    const { username } = req.body
    const newUser = new User({
        username: username
    })
    await newUser.save()
    res.json('New user added!')
   } catch (error) {

   }
}

userController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted!')
}

export default userController

