
        // Array of image URLs to rotate through
        const imageUrls = [
            "images/IT-Consulting.jpg",
            "images/conflict-management.jpg", 
            "images/corporate-training-solutions.jpg",
            "images/target-audience.png"
           
            // Add more image URLs here
        ];

        let currentIndex = 0;

        // Function to change image source
        function changeImage() {
            const images = document.querySelectorAll('.image img');
            images.forEach((img, index) => {
                img.src = imageUrls[(currentIndex + index) % imageUrls.length];
            });
            currentIndex = (currentIndex + 1) % imageUrls.length;
        }

        // Change image every 3 seconds (adjust the interval as needed)
        setInterval(changeImage, 3000);