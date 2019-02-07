const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken')
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    tokens: [
        {
            _id: {
                type: String
            }
        }
    ]
});

UserSchema.methods.generateAuthThoken = function () {
    const user = this;

    const token = jwt.sign({ _id: user._id }, 'secret')

    user.tokens.push(token)
    return user.save().then(() => token).catch((err) => console.error(err))
}

const User = model('User', UserSchema);


module.exports = User;