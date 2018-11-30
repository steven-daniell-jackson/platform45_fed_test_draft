// Page Load

// Set sidebar wrapper to max height
document.getElementById('sidebar-wrapper-id').style.height = pageHeight() + 'px';
// document.getElementById('dateInput').style.height = getDocHeight() + 'px';

// Set sidebar wrapper max height on resize
window.addEventListener("resize", function(event) {
document.getElementById('sidebar-wrapper-id').style.height = pageHeight() + 'px';
});

// Return Page Height
function pageHeight() {
    var doc = document;
    return Math.max(
        doc.body.clientHeight, doc.documentElement.clientHeight
    );
}
