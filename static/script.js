document.addEventListener('DOMContentLoaded', function () {
    var scrollBtn = document.getElementById('scroll-to-top');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    };

    scrollBtn.onclick = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
});


// Herader

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.links a');

    window.addEventListener('scroll', function () {
        var currentScroll = window.scrollY;

        // Loop through sections to find the one in view
        document.querySelectorAll('section').forEach(function (section) {
            var sectionTop = section.offsetTop - 50; // Adjusted for header height

            if (currentScroll >= sectionTop) {
                links.forEach(function (link) {
                    link.classList.remove('active');
                });

                var correspondingLink = document.querySelector('a[href="#' + section.id + '"]');
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
});
