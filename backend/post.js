const { text } = require("body-parser");
const {Schema,model}=require ("mongoose");

const postSchema =new Schema ({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    }
})

//Model
const Post =model("Post",postSchema);
//Image is a model which has a schema imageSchema
  
//module.exports = new mongoose.model('Image', imageSchema);
module.exports=Post;
