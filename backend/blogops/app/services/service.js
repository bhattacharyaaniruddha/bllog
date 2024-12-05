const express = require('express');
const todoModel = require("../models/todoModel.js");
const service = {
    createBlog: async (req, res) => {
        try {
            const result = await todoModel.createBlog(req.body.title, req.body.subTitle, req.body.creatorDetails, req.body.dataOfSections);
            return ({
                status: "success",
                response: "Blog created successfully."
            })
        } catch(err) {
            return ({
                status: "error",
                response: err.toString()
            })
        }
    },
    getBlog: async (req, res) => {
        try {
            console.log(req.body.title)
            const result = await todoModel.getBlog(req.body.blogId);
            console.log(result)

            return ({
                status: "success",
                response: result
            })
        } catch(err) {
            return ({
                status: "error",
                response: err.toString()
            })
        }
    },
    getAllBlogs: async (req, res) => {
        try {
            const result = await todoModel.getAllBlogs();

            return ({
                status: "success",
                response: result
            })
        } catch(err) {
            return ({
                status: "error",
                response: err.toString()
            })
        }
    },
}

module.exports = service;