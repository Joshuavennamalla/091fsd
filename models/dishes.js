const mongoose =require('mongoose')

const schema =mongoose.Schema


const commentSchema = new schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
            type:String,
            required:true
    }
},
{timestamps:true}
)
const dishSchema =new schema({
    name:{
        type:String,
        required:true,
        unique:true

    },
    description :{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true
        
    },
    label:{
        type:String,
        default:'true'
        
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    featured:{
        type:Boolean,
        default:false
    },
    comments:[commentSchema]
}
,
{
    timestamps:true
})

var Dishes = mongoose.model('Dish' , dishSchema)

module.exports =Dishes