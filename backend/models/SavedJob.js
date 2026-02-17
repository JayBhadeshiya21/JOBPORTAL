const mongoose = require('mongoose')

const savedJobSchema = new mongoose.Schema(
    {
        jobseeker: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true},
        job : { type: mongoose.Schema.Types.ObjectId, ref: 'Job',require: true},
    },
    { timestamps: true}
);


module.exports = mongoose.model('SavedJob', savedJobSchema);

