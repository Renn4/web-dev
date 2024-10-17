
let isThrottled = false;    

function loadDocument() {
    const width = window.innerWidth;
    const isSmall = width < 1250; // Adjust this threshold as needed

    // Load the appropriate HTML document
    const targetDocument = isSmall ? 'pagina musica mobile.html' : 'pagina musica.html';
    window.location.href = targetDocument;
}

function onResize() {
if (!isThrottled) {
    isThrottled = true;

    // Set a timeout to allow loading the document after 500ms
    timeoutId = setTimeout(() => {
        loadDocument();
        isThrottled = false; // Reset throttling after loading
        }, 500);
    }
}

// Attach the resize event listener
window.onresize = loadDocument;
window.onresize = onResize;
