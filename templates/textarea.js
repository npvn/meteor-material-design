Template.TextArea.helpers({
    isEmpty: function() {
        return this.value ? '' : 'empty';
    }
});

Template.TextArea.events({
    'keyup textarea.form-control': function(e) {
        var $el = $(e.target);
        if ( $el.val() !== "" ) $el.removeClass("empty");
        else $el.addClass("empty");
    }
    , 'keydown textarea.form-control': function(e) {
        $(e.target).removeClass("empty");
    }
});