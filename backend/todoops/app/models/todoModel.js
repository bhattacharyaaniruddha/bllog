const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
  title: {
    type:  String,
    required: true
  }, 
  subTitle: {
    type:  String,
    required: true
  }, 
  creatorDetails: {
    type:  Object,
    required: true
  }, 
  dataOfSections: {
    type:  Array,
    required: true
  },
  dateCreated: {
    type:  String,
    required: true
  }
});
// unique: true

const Blog = mongoose.model('blogs', blogSchema);

const todoModel = {
    createBlog: async (title, subTitle, creatorDetails, dataOfSections) => {
        try {
            
            const blog = new Blog({
                title,
                subTitle,
                creatorDetails,
                dataOfSections,
                dateCreated: new Date()
            });

            return await blog.save();
        } catch(err) {
            throw new Error("error: "+err);
        }
    },

    getBlog: async (blogId) => {
        try {
            let query = {
                $or: [
                    {
                        _id: new mongoose.Types.ObjectId(blogId)
                    }
                ]
            }
            return Blog.findOne(query).exec();
        } catch(err) {
            throw new Error("error: "+err);
        }
    },

    getAllBlogs: async () => {
        try {
            let query = {
                
            }
            return Blog.find(query).exec();
        } catch(err) {
            throw new Error("error: "+err);
        }
    }
}

module.exports = todoModel;
