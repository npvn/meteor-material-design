Meteor.startup(function() {
    // Initialize ripple effect when a template is rendered
    for (var name in Template) {
        // XXX Ugly hack to loop through user-defined templates
        if ( Template.hasOwnProperty(name)
             && Template[name].viewName
             && name.substring(0,2) !== '__'
             && name !== 'body'
           ) {

             var oldCallback = Template[name].rendered || null;

             var newCallback = function() {
                 // Trigger waves ripple effect
                 Waves.displayEffect({duration: 500});
             };

             // Override the existing rendered callback
             (function(name, oldCallback, newCallback) {

                 Template[name].rendered = function() {
                     oldCallback && oldCallback.call( Template[name] );
                     newCallback();
                 };

             })(name, oldCallback, newCallback);
        }
    }
});