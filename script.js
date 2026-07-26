document.addEventListener("DOMContentLoaded", function() {
    var toast = document.getElementById("demo-toast");
    if (toast) {
        toast.classList.remove("hidden");
    }

    var closeBtn = document.getElementById("toast-close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            if (toast) {
                toast.classList.add("hidden");
            }
        });
    }
});

