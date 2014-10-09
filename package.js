Package.describe({
    summary: 'A foundation for implementing Material Design in Meteor'
    , version: '0.0.1'
});

Package.onUse(function(api) {
    api.use('jquery', 'client');
    api.use('less', 'client');
    api.use('templating', 'client');

    api.addFiles('lib/bootstrap/dist/js/bootstrap.min.js', 'client');
    api.addFiles('lib/arrive/src/arrive.js', 'client');
    api.addFiles('lib/bootstrap-material-design/dist/js/material.min.js', 'client');
    api.addFiles('lib/bootstrap-material-design/dist/js/ripples.min.js', 'client');
    
    api.addFiles('main.less', 'client');
});