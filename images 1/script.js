
    document.addEventListener("DOMContentLoaded", function() {
        // Function to animate numbers
        function animateNumbers(element) {
            const target = +element.getAttribute("data-target");
            const increment = target / 200; // Control the speed
            let count = 0;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    element.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    element.textContent = target;
                }
            };

            updateCount();
        }

        // Observe when the stats section is in view
        const stats = document.querySelectorAll(".stat-number");
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers(entry.target);
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

        stats.forEach(stat => {
            observer.observe(stat);
        });
    });
