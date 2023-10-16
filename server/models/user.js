import mongoose from "mongoose"

const User = new mongoose.Schema(
    {
        f_name: {
            type: String,
            required: true,
        },

        l_name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        contact: {
            type: Number,
            required: true,
        },

        ssn: {
            type: Number,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        state: {
            type: String,
            required: true,
        },

        zip: {
            type: Number,
            required: true
        },

        id: {
            type: String,
            required: true
        },

        b_id: {
            type: String,
            required: true
        },

    },
    {timestamps: true},
    { collection: 'userData' }
)

const UserModel = mongoose.model('UserModel', User)

export default UserModel

