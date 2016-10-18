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

UsersSchema.pre('save', (next) => {
    if(this.password) {
        var hash = crypto.createHash('md5')
        this.password = hash.update(this.password).digest('hex');
    }
    next();
});

UsersSchema.statics.findUniqueUser = (username, suffix, callback) => {
    let possibleUsername = username + (suffix || '');
    this.findOne(
        {username: possibleUsername},
        (err, user) => {
            if (!err) {
                if (!user) {
                        callback(possibleUsername);
                } else {
                  return this.findUniqueUser(username, (suffix || 0) + 1, callback);
                }
            }
        }
    )
}

UsersSchema.methods.authenticate = (password) => {
    return this.password === password;
}

mongoose.model('users', UsersSchema);
