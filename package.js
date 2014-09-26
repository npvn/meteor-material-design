Package.describe({
    summary: 'A foundation for implementing Material Design in Meteor'
    , version: '0.0.1'
});

Package.onUse(function(api) {
    api.use('jquery', 'client');
    api.use('less', 'client');
    api.use('templating', 'client');

    // Styles
    api.addFiles('lib/styles/bootstrap.min.css', 'client');
    api.addFiles('lib/styles/variables.lessimport', 'client');
    api.addFiles('lib/styles/mixins.lessimport', 'client');
    api.addFiles('lib/styles/prefixer.lessimport', 'client');
    api.addFiles('lib/styles/animations.lessimport', 'client');
    api.addFiles('lib/styles/alerts.lessimport', 'client');
    api.addFiles('lib/styles/buttons.lessimport', 'client');
    api.addFiles('lib/styles/checkboxes.lessimport', 'client');
    api.addFiles('lib/styles/icons.lessimport', 'client');
    api.addFiles('lib/styles/inputs.lessimport', 'client');
    api.addFiles('lib/styles/lists.lessimport', 'client');
    api.addFiles('lib/styles/navbar.lessimport', 'client');
    api.addFiles('lib/styles/plugin-nouislider.lessimport', 'client');
    api.addFiles('lib/styles/plugin-snackbarjs.lessimport', 'client');
    api.addFiles('lib/styles/popups.lessimport', 'client');
    api.addFiles('lib/styles/progress.lessimport', 'client');
    api.addFiles('lib/styles/radios.lessimport', 'client');
    api.addFiles('lib/styles/dialogs.lessimport', 'client');
    api.addFiles('lib/styles/dropdown.lessimport', 'client');
    api.addFiles('lib/styles/tabs.lessimport', 'client');
    api.addFiles('lib/styles/welljumbo.lessimport', 'client');
    api.addFiles('lib/styles/cards.lessimport', 'client');
    api.addFiles('lib/styles/waves.lessimport', 'client');
    api.addFiles('main.less', 'client');

    // JS
    api.addFiles('lib/js/bootstrap.min.js', 'client');
    api.addFiles('lib/js/waves.js', 'client');
    api.addFiles('main.js', 'client');
    
    // Templates
    api.addFiles('templates/checkbox.html', 'client');
    api.addFiles('templates/radio.html', 'client');
    api.addFiles('templates/input.html', 'client');
    api.addFiles('templates/input.js', 'client');    
    api.addFiles('templates/textarea.html', 'client');
    api.addFiles('templates/textarea.js', 'client');
    api.addFiles('templates/select.html', 'client');
    api.addFiles('templates/fileinput.html', 'client');
    api.addFiles('templates/fileinput.js', 'client');
});