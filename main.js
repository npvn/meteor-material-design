Meteor.startup(function() {    
    Waves.Effect.duration = 500;

    $('body').on('mousedown', '.btn, .card-image', Waves.Effect.show)
             .on('mouseup', '.btn, .card-image', Waves.Effect.hide)
             .on('mouseleave', '.btn, .card-image', Waves.Effect.hide);
});