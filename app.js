$("#addToDo").click(function() {
    const inputToDo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputToDo + "</li>");

    $("input").val("");
});

$(document).on("change", "input[type=checkbox]", function() {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
    } else {
        $(this).parent().css("text-decoration", "none"); 
    }
})