$(function() {
    var skillset = {
        'photoshop': 3,
        'illustrator': 2,
        'dreamweaver': 3,
        'indesign': 4,
        'fireworks': 3,
        'flash': 4,
        'cocos': 4,
        'html-graph': 3,
        'css-graph': 3,
        'jquery-graph': 2,
        'bootstrap-graph': 5,
        'js-graph': 3,
        'angularjs': 3
    };
    
    _.each(skillset, function(value, key) {
        for(var i=0; i<value; i++){
            $("div."+key).append("<span class='square'></span>");
        }
    });
    
});