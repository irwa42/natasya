// buttonColorChanger.js

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.btn');

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            console.log("Button clicked!"); // Check if event listener is triggered
            var currentColor = button.style.backgroundColor;
            if (currentColor === "rgb(0, 123, 255)" || currentColor === "#007bff") {
                button.style.backgroundColor = "#0056b3";
            } else {
                button.style.backgroundColor = "#007bff";
            }
            console.log("New background color:", button.style.backgroundColor); // Check the new color
        });
    });
});

