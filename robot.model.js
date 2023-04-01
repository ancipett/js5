import mongoose from 'mongoose';

const User = mongoose.model(
    'User',
    {
        username: String,
        robots: Number,
        cloud: Number,
        rainbow: Number
    }
);

export default User;