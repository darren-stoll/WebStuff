//https://www.dev-tips-and-tricks.com/animate-elements-scrolled-view-vanilla-js

var animateHTML = function() {
    var elems;
    var windowHeight;
    // Initialize by putting all elements with hidden class into an array and obtaining the window height
    function init() {

        elems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        console.log(windowHeight);
        addEventHandlers();
        checkPosition();
    }

    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    // Cycle through each hidden element
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top + (1 / 6 * windowHeight);
            console.log(positionFromTop);
            // If the hidden element comes into view, change classes so that the element fades in
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }

    return {
        init: init
    };
};

//Implement bootstrap modal features