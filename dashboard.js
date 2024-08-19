// Function to load a script dynamically
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

// Load the scripts for each chart
loadScript('motivations.js', () => {
    console.log('Motivations chart loaded.');
});

loadScript('labelData.js', () => {
    console.log('Label data chart loaded.');
});

loadScript('regressionData.js', () => {
    console.log('Regression data chart loaded.');
});
