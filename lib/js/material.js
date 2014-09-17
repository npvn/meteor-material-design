displayMaterialDesignEffects = function (templateElements) {
    // Add fake-checkbox to material checkboxes
    $(templateElements).find(".checkbox > label > input").after("<span class=ripple></span><span class=check></span>");

    // Add fake-radio to material radios
    $(templateElements).find(".radio > label > input").after("<span class=ripple></span><span class=circle></span><span class=check></span>");

    // Add elements for material inputs
    $(templateElements).find("input.form-control, textarea.form-control, select.form-control").each( function() {
        $(this).wrap("<div class=form-control-wrapper></div>");
        $(this).after("<span class=material-input></span>");
        if ($(this).hasClass("floating-label")) {
            var placeholder = $(this).attr("placeholder");
            $(this).attr("placeholder", null).removeClass("floating-label");
            $(this).after("<div class=floating-label>" + placeholder + "</div>");
        }
        if ($(this).val() === "") {
            $(this).addClass("empty");
        }
    });

    $(templateElements).find('input.form-control').each( function() {
        var self = this;

        self.addEventListener('keyup', function() {
            if ($(self).val() !== "") {
                $(self).removeClass("empty");
            } else {
                $(self).addClass("empty");
            }
        });

        self.addEventListener('keydown', function() {
            $(self).removeClass("empty");
        });
    });

    // Waves ripple effect
    Waves.displayEffect({duration: 500}, templateElements);
};