//Check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){     //if enter key
        var text = $(this).val();
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
        //clear input
        $(this).val("");
    }
});

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle();
});
