$("#addToDo").click(function() {
    const inputToDo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputToDo + "</li>");

    $("input").val("");
});
