$('project-1').on("click", function () {
 window.open("https://adam-algatt.githugitb.io/Project-1/");
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});