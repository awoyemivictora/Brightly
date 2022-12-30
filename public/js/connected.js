$(document).ready(function() {
    $(".pop_up_bg, .pop_up .close").click(function() {
        $(".pop_up_bg").removeClass("active");
        $(".pop_up").removeClass("active");
        return false;
    });
});