$(function() {
    var skillset = {
        'photoshop': 12,
        'illustrator': 9,
        'dreamweaver': 9,
        'indesign': 8,
        'fireworks': 7,
        'flash': 6,
        'cocos': 4,
        'html-graph': 10,
        'css-graph': 10,
        'jquery-graph': 5,
        'bootstrap-graph': 3,
        'js-graph': 2,
        'angularjs': 2
    };
    
    _.each(skillset, function(value, key) {
        for(var i=0; i<value; i++){
            $("div."+key).append("<span class='square'></span>");
        }
    });
    
});