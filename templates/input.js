Template.Input.helpers({
    isEmpty: function() {
        return this.value ? '' : 'empty';
    }
});

Template.Input.events({
    'keyup input.form-control': function(e) {
        var $el = $(e.target);
        if ( $el.val() !== "" ) $el.removeClass("empty");
        else $el.addClass("empty");
    }
    , 'keydown input.form-control': function(e) {
        $(e.target).removeClass("empty");
    }
});