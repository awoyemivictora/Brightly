$(document).ready(function () {
  $(".pop_up_bg, .pop_up .close").click(function () {
    $(".pop_up_bg").removeClass("active");
    $(".pop_up").removeClass("active");
    return false;
  });

  $(".favorz .content .items .item").click(function () {
    var id = $(this).data("id");
    $(".pop_up_bg").addClass("active");
    $(".pop_party[data-id=" + id + "]").addClass("active");
    return false;
  });
});
