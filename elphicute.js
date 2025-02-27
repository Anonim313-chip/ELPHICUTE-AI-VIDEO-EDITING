document.addEventListener("DOMContentLoaded", function () {
    console.log("ElphiCute AI Website Loaded!");

    // Efek animasi muncul saat scroll
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Cek saat pertama kali halaman dimuat
});
