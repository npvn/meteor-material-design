Package.describe({
    summary: 'A foundation for implementing Material Design in Meteor'
    , version: '0.0.1'
});

Package.onUse(function(api) {
    api.use('jquery', 'client');
    api.use('less', 'client');

    api.addFiles('bootstrap/bootstrap.min.css', 'client');
    api.addFiles('bootstrap/bootstrap.min.js', 'client');

    api.addFiles('less/variables.lessimport', 'client');
    api.addFiles('less/mixins.lessimport', 'client');
    api.addFiles('less/prefixer.lessimport', 'client');
    api.addFiles('less/animations.lessimport', 'client');
    api.addFiles('less/shadows.lessimport', 'client');
    api.addFiles('less/alerts.lessimport', 'client');
    api.addFiles('less/buttons.lessimport', 'client');
    api.addFiles('less/checkboxes.lessimport', 'client');
    api.addFiles('less/icons.lessimport', 'client');
    api.addFiles('less/inputs.lessimport', 'client');
    api.addFiles('less/lists.lessimport', 'client');
    api.addFiles('less/navbar.lessimport', 'client');
    api.addFiles('less/plugin-nouislider.lessimport', 'client');
    api.addFiles('less/plugin-snackbarjs.lessimport', 'client');
    api.addFiles('less/popups.lessimport', 'client');
    api.addFiles('less/progress.lessimport', 'client');
    api.addFiles('less/radios.lessimport', 'client');
    api.addFiles('less/waves.lessimport', 'client');
    api.addFiles('less/tabs.lessimport', 'client');
    api.addFiles('less/material.less', 'client');

    api.addFiles('js/waves.js', 'client');
    api.addFiles('js/material.js', 'client');
});