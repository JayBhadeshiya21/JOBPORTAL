const Job = require("../models/Job");
const User = require("../models/User");
const Application = require("../models/Application");
const SavedJob = require("../models/SavedJob");


// @desc  Create a new job (Employer only)
exports.createJob = async(req, res) => {
    try {
        if(req.User.role != 'employer') {
            return res.status(403).json({ message: "Only employer can post jobs"})
        }

        const job = await Job.create({ ...req.body, company: req.user._id });
        res.status(201).json(job);

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

exports.getJobs = async(req, res) => {

    const {
        keyword,
        location,
        category,
        type,
        minSalary,
        maxSalary,
        userId,
    } = req.query;

    const query = {
        isClosed: false,
        ...(keyword && { tittle : { $regex: keyword, $options: "i" }}),
        ...(location && { location: { $regex: location, $options: "i"}}),
        ...(category && { category}),
        ...(type && { type}),
    }

    if( minSalary || maxSalary) {
        query.$and = [];

        if(minSalary) {
            query.$and.push({ salaryMax: { $gte: Number(minSalary) }});
        }

        if(maxSalary) {
            query.$and.push({ salaryMin: { $lte: Number(maxSalary) }});
        }

        if(query.$and.length === 0) {
            delete query.$and;
        }
    }
    try {
        const jobs = await Job.find(query).populate(
            "company",
            "name companyName companyLogo"
        );

        let savedJobIds = [];
        let appliedJobStatusMap = {};

        if (userId) {
            // Saved Jobs
            const savedJobs = await SavedJob.find({ j})
        }

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// @desc  Get jobs for logged in user (Employer can see posted jobs)
exports.getJobsEmployer = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// @desc  Get single job by ID
exports.getJobById = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// @desc  Update a job (Employer only) 
exports.updateJob = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// @desc  Delete a job (Employer only)
exports.deleteJob = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

// @desc  Toggle Close Status for a job (Employer only)
exports.toggleCloseJob = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}; 
