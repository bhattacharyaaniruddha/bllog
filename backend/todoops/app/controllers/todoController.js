const service = require('../services/service.js')
const controller = {
    createBlog: async (req, res) => {
        try {
            const result = await service.createBlog(req, res);
            res.status(201).send(result);
        } catch(err) {
            res.status(400).send(err);
        }
    },
    getBlog: async (req, res) => {
        try {
            const result = await service.getBlog(req, res);
            res.status(201).send(result);
        } catch(err) {
            res.status(400).send(err);
        }
    },
    getAllBlogs: async (req, res) => {
        try {
            const result = await service.getAllBlogs(req, res);
            res.status(201).send(result);
        } catch(err) {
            res.status(400).send(err);
        }
    },
}

module.exports = controller;