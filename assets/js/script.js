window.addEventListener("orientationchange", function(e) {
    letscreen = window.screen;
    letangle = screen.orientation;
    lettype = screen.orientation.type;
    console.log('angle: &{angle},type: &{type}');
});