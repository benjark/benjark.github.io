// Scripts for slideshow functionality.

var slideshowIndex1 = 1;
    var slideshowIndex2 = 1;
    
    showSlides(1,1);
    showSlides(1,2);

    if (n > slides.length || n < 1) {
            n = 1;
        }

    function plusSlides(n, slideshowIndex) {
        if (slideshowIndex === 1) {
            showSlides(slideshowIndex1 = (slideshowIndex1 + n), 1);
        } else if (slideshowIndex === 2) {
            showSlides(slideshowIndex2 = (slideshowIndex2 + n), 2);
        }
    }

    function currentSlide(n, slideshowIndex) {
        if (slideshowIndex === 1) {
        showSlides(slideshowIndex1 = n, 1);
        } else if (slideshowIndex === 2) {
            showSlides(slideshowIndex2 = n, 2);
        }
    }

    function showSlides(n, slideshowIndex) {
        let i;
        let slides = document.getElementsByClassName("mySlides" + slideshowIndex);
        let dots = document.getElementsByClassName("dot" + slideshowIndex);

        for (i = 0; i < slides.length ; i++) {
            slides[i].style.display = "none";
        }

        var slideIndex = (n - 1 + slides.length) % slides.length;
        slides[slideIndex].style.display = "block";

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n-1].style.display = "block";
        dots[n-1].className += " active";
    }