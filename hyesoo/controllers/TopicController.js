var Topic = require("../models/Topic");

var topicController = {};

topicController.list = function(req,res) {
    Topic.find({}).exec(function(err,topics){
        if(err){
            console.log(`Error: ${err}`)
        } else {
            res.render("../views/topic/index", {topics: topics})
        }
    });
};

topicController.show = function(req,res) {
    Topic.findOne({_id: req.params.id}).exec(function(err,topic){
        if(err){
            console.log(`Error: ${err}`);
        } else {
            res.render("../views/topic/show", {topic: topic});
        }
    })
}

topicController.new = function(req,res) {
    res.render("../views/topic/new")
}

topicController.save = function(req,res) {
    var topic = new Topic(req.body);

    topic.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/topic/new");
        } else {
            console.log("Successfully create data");
            res.redirect(`/topic/show/${topic._id}`);
        }
    })
}

module.exports = topicController;