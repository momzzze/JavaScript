const Thread = require('../models/Thread');
const User = require('../models/User')
module.exports = {
    findThread: async (req, res) => {

        try {
            let currUser = await User.findOne({
                username:req.user.username
            });

            let otherUser = await User.findOne({
                username:req.body.username
            });

            let thread = await Thread.findOne({
                users: {
                    $all: [currUser, otherUser]
                }
            });
            if(!thread){
               await Thread.create({
                users:[currUser._id,otherUser._id]
               });
            }

            res.redirect(`/thread/${otherUser.username}`)



        } catch (err) {
            console.log(err)
        }
    }
}