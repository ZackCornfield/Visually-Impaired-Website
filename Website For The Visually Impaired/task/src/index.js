// Define variables
let accessibilityElement = document.querySelector('.accessibility');
let childElements = [];

// Remove child nodes when the page first loads
function removeChildNodes() {
    while (accessibilityElement.firstChild) {
        childElements.push(accessibilityElement.firstChild);
        accessibilityElement.removeChild(accessibilityElement.firstChild);
    }
}

// Add back child nodes
function addChildNodes() {
    childElements.forEach(child => {
        accessibilityElement.appendChild(child);
    });
    // Clear the childElements array
    childElements = [];
}

// Toggle accessibility modes
function toggleAccessibilityModes() {
    if (accessibilityElement.hasChildNodes()) {
        removeChildNodes();
    } else {
        addChildNodes();
    }
}

// Event handling for radio inputs
function handleTextSizeRadioInputs() {
    let textSizeRadios = document.querySelectorAll("input[name=text-size]");
    for (let i = 0; i < textSizeRadios.length; i++) {
        textSizeRadios[i].addEventListener('change', function() {
            let selectedSize = this.value;
            document.documentElement.classList.remove('small-text', 'medium-text', 'large-text', 'larger-text');
            document.documentElement.classList.add(`${selectedSize}-text`);
        });
    }
}

// Event handling for radio inputs
function handleColorRadioInputs() {
    let colorRadios = document.querySelectorAll("input[name=color-theme]");
    for (let i = 0; i < colorRadios.length; i++) {
        colorRadios[i].addEventListener('change', function() {
            let selectedColor = this.value;
            // Remove all color theme classes
            document.documentElement.classList.remove('white-theme', 'yellow-theme', 'blue-theme');
            // Add the selected color theme class to the body
            document.documentElement.classList.add(`${selectedColor}-theme`);
        });
    }
}

// JavaScript
function toggleImageVisibility() {
    const images = document.querySelectorAll('img');
    const body = document.body;

    // Check if images are currently visible or hidden
    const imagesHidden = body.classList.toggle('images-hidden');

    // Toggle visibility based on current state
    images.forEach(image => {
        if (imagesHidden) {
            // Hide images by setting src to #
            image.dataset.src = image.src;
            image.src = '#';
        } else {
            // Show images by reloading the page
            location.reload();
        }
    });
}

// Initialize the script when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    handleTextSizeRadioInputs(); // Initialize event listeners for radio inputs
    handleColorRadioInputs(); // Initialize event listeners for radio inputs
    removeChildNodes(); // Remove child nodes when the page first loads
});
