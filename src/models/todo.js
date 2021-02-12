const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
    },
    {       
        strict: true,
        versionKey: false,
        timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
);
        
var todo = new mongoose.model('Todo', schema);

module.exports = todo;
