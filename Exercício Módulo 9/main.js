$(document).ready(function() {
    $("#task-form").submit(function(event) {
        event.preventDefault();
        const taskName = $("#task-name").val();
        if (taskName.trim() !== "") {
            $("#task-list").append(`<li><input type="checkbox" class="checkbox"><span class="task-text">${taskName}</span><img src="image/delete.png" class="remove-icon" alt="Remover"></li>`);
            $("#task-name").val("");
        }
    });

    $("#task-list").on("click", "li", function() {
        const checkbox = $(this).find(".checkbox");
        checkbox.prop("checked", !checkbox.prop("checked"));
        $(this).toggleClass("completed");
    });

    $("#task-list").on("click", ".checkbox", function(event) {
        event.stopPropagation();
        $(this).closest("li").toggleClass("completed");
    });

    $("#task-list").on("click", ".remove-icon", function() {
        $(this).closest("li").remove();
    });
});
