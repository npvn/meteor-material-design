Template.Input.helpers({
    isEmpty: function() {
        return this.value ? '' : 'empty';
    }
});

Template.Input.events({
    'keyup input.form-control': function(e) {
        var self = $(e.target);
        setTimeout(function() {
            if (self.val() === "") {
                self.addClass("empty");
            } else {
                self.removeClass("empty");
            }
        }, 1);
    }
});