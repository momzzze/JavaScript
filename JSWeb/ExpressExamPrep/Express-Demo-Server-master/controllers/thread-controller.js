const Thread = require('../models/Thread');
const User = require('../models/User')
const Message = require('../models/Message');


module.exports = {
    findThread: async (req, res) => {

        try {
            let currUser = await User.findOne({
                username: req.user.username
            });

            let otherUser = await User.findOne({
                username: req.body.username
            });

            let thread = await Thread.findOne({
                users: {
                    $all: [currUser, otherUser]
                }
            });
            if (!thread) {
                await Thread.create({
                    users: [currUser._id, otherUser._id]
                });
            }

            res.redirect(`/thread/${otherUser.username}`)

        } catch (err) {
            console.log(err)
        }
    },
    openThread: async (req, res) => {
        try {
            let otherUser = await User.findOne({
                username: [req.params.username]
            })
            let thread = await Thread.findOne({
                users: {
                    $all: [req.user._id, otherUser._id]
                }
            })
            let messages = await Message.find({
                thread: thread._id
            })
            messages.forEach(message => {
                if (message.user.toString() === req.user._id.toString()) {
                    message.isMine = true;
                }
                if (message.content.startsWith('http') && message.content.endsWith('.jpg')) {
                    message.isImage = true;
                }
            })
            let isBlocked = false;
            let amBlocked = false;
            if (otherUser.blockedUsers.includes(req.user.username)) {
                amBlocked = true;
            }
            if (req.user.blockedUsers.includes(req.params.username)) {
                isBlocked = true;
            }


            res.render('threads/chatroom', {
                username: req.params.username,
                messages,
                id: thread._id,
                isBlocked,
                amBlocked
            })
        } catch (err) {
            console.log(err)
        }

    },
    sendMessages: async (req, res) => {
        let content = req.body.message;
        let user = await User.findOne({
            username: req.params.username
        });
        let thread = req.body.threadId
        try {
            await Message.create({
                content,
                user: user._id,
                thread
            });
            res.redirect(`/thread/${req.params.username}`)
        } catch (err) {
            console.log(err)
        }
    },
    removeThread: async (req, res) => {
        try {
            await Message.remove({
                thread: req.params.threadId
            })
            await Thread.findByIdAndRemove(req.params.threadId);
            res.redirect('/');
        } catch (err) {
            console.log(err)
        }
    }

}