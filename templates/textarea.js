Template.TextArea.helpers({
    isEmpty: function() {
        return this.value ? '' : 'empty';
    }
});

Template.TextArea.events({
    'keyup textarea.form-control': function(e) {
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