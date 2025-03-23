document.addEventListener("DOMContentLoaded", function () {
    // Load sound effect
    const favoriteSound = new Audio("heartclick.wav"); // Replace with actual file

    // Select header heart icon and label
    const headerHeart = document.querySelector(".fa-heart.header-heart");

    // Select all product heart icons and their respective names
    const productHearts = document.querySelectorAll(".fa-heart.product-heart");
    const productNames = document.querySelectorAll(".product-name");

    // Function to toggle heart state and update header heart
    function toggleHeart(heartIcon, flowerName) {
        heartIcon.classList.toggle("active-heart"); // Toggle favorite state
        favoriteSound.play(); // Play sound

        if (heartIcon.classList.contains("active-heart")) {
            alert("Added to Favorites! ❤️");
        } else {
            alert("Removed from Favorites. 💔");
        }

        // Update header heart and label
        updateHeaderHeart(flowerName);

        // Blink heart icon in the header
        blinkHeartIcon(headerHeart);
    }

    // Add click event to all product hearts
    productHearts.forEach(function (productHeart, index) {
        const flowerName = productNames[index].textContent; // Get the flower name

        productHeart.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent the default behavior (i.e., going to home page)
            toggleHeart(this, flowerName);
        });
    });

    // Function to update the header heart and label
    function updateHeaderHeart(flowerName) {
        const anyFavorite = document.querySelector(".fa-heart.product-heart.active-heart");
        if (anyFavorite) {
            headerHeart.classList.add("active-heart");
            headerHeart.title = `Favorited: ${flowerName}`;  // Show flower name as a tooltip
        } else {
            headerHeart.classList.remove("active-heart");
            headerHeart.title = "No Favorites";  // Default tooltip when no favorites
        }
    }

    // Function to blink the heart icon in the header
    function blinkHeartIcon(heartIcon) {
        heartIcon.classList.add("blink-heart");
        setTimeout(function () {
            heartIcon.classList.remove("blink-heart");
        }, 1000); // Make it blink for 1 second
    }

    // Optional: Add click event to header heart (you could show alert or any action here)
    headerHeart.addEventListener("click", function () {
        alert("The header heart represents your favorited products! ❤️");
    });
});
