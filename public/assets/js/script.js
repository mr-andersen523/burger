$(document).ready(function() {

    // devour button
    $(".devourBtn").on("click", function(event) {

        // get ID of burger
        const id = $(this).data("id");

        // Send PUT req
        $.ajax("/api/hamburger/" + id, {
            type: "PUT"
        }).then(() => {
                // Reload to update
                location.reload();
            }
        );

    });

    // delete button
    $(".deleteBtn").on("click", function(event) {

        // get ID of burger
        const id = $(this).data("id");

        // Send DELETE req.
        $.ajax("/api/hamburger/" + id, {
            type: "DELETE"
        }).then(() => {
                // Reload to update
                location.reload();
            }
        );
    });

    // ADD button
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Create obj for POST req
        let burgerName = { name: $("#burgerName").val().trim()};                               

        // Send  POST req
        $.ajax("/api/hamburger", {
        type: "POST",
        data: burgerName
        }).then(() => {
            // Reload to update
            location.reload();
        }
        );
    });

}); 