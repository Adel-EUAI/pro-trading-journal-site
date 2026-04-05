const track = document.querySelector(".carousel-track");
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector(".next");
        const prevBtn = document.querySelector(".prev");
        let index = 0;

        function updateSlide() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            updateSlide();
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            updateSlide();
        });



        