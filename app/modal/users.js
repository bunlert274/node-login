const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
        fullname: String,
        email: String,
        username: {
            type: String,
            trim: true,
            unique: true
        },
        password: String,
});

UsersSchema.methods.authenticate = (password) => {
    return this.password === password;
}

mongoose.model('users', UsersSchema);
