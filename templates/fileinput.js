Template.FileInput.events({
    'focus .form-control-wrapper.fileinput': function(e) {
        $(e.target).find('input').addClass('focus');
    }
    , 'blur .form-control-wrapper.fileinput': function(e) {
        $(e.target).find('input').removeClass('focus');
    }
    , 'change .form-control-wrapper.fileinput [type=file]': function(e) {
        var value = "";
        $.each($(e.target)[0].files, function(i, file) {
            value += file.name + ", ";
        });
        value = value.substring(0, value.length - 2);
        if (value) {
            $(e.target).prev().removeClass("empty");
        } else {
            $(e.target).prev().addClass("empty");
        }
        $(e.target).prev().val(value);
    }
});