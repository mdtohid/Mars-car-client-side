import React from 'react';

const getElementId = ({ setInViewElementId }) => {
    // {using JavaScript and the Intersection Observer API for       determine which element (ID) is currently in view on your website}
    
    // Use React to select elements with a specific attribute
    const selectedElements = document.querySelectorAll('[id]');

    // Define a callback function to handle intersections
     function handleIntersection(entries) {
        entries.forEach(async(entry) => {
            if (entry.isIntersecting) {
                // Element is in view, log its ID
                await setInViewElementId(entry.target.id);
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Change the threshold as needed
    });

    // Observe all elements with IDs
    selectedElements.forEach((element) => {
        observer.observe(element);
    });
};

export default getElementId;