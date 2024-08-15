document.addEventListener('DOMContentLoaded', () => {
    const paintingsList = document.getElementById('paintingsList');

    // Function to display the uploaded paintings
    function displayPaintings() {
        const paintings = JSON.parse(localStorage.getItem('paintings')) || [];
        paintingsList.innerHTML = '';

        paintings.forEach((painting, index) => {
            const item = document.createElement('div');
            item.innerHTML = `
                <img src="${painting.image}" alt="${painting.title}" style="width: 100px; height: 100px;">
                <p><strong>${painting.title}</strong></p>
                <p>${painting.description}</p>
                <p>${painting.price}</p>
                <button data-index="${index}">Delete</button>
                <hr>
            `;
            paintingsList.appendChild(item);
        });
    }

    // Initial display of paintings
    displayPaintings();

    // Upload functionality
    document.getElementById('uploadForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('imageTitle').value;
        const description = document.getElementById('imageDescription').value;
        const price = document.getElementById('imagePrice').value;
        const file = document.getElementById('imageUpload').files[0];

        if (!file) {
            alert('Please select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;

            // Retrieve existing data from local storage
            const existingPaintings = JSON.parse(localStorage.getItem('paintings')) || [];

            // Add new painting data
            existingPaintings.push({
                title: title,
                image: imageUrl,
                description: description,
                price: price
            });

            // Save updated data back to local storage
            localStorage.setItem('paintings', JSON.stringify(existingPaintings));

            // Clear form fields
            document.getElementById('uploadForm').reset();

            // Refresh the list of paintings
            displayPaintings();
        };

        reader.readAsDataURL(file);
    });

    // Delete functionality
    paintingsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const index = event.target.getAttribute('data-index');
            const paintings = JSON.parse(localStorage.getItem('paintings')) || [];

            // Remove the selected painting
            paintings.splice(index, 1);

            // Save the updated paintings array back to local storage
            localStorage.setItem('paintings', JSON.stringify(paintings));

            // Refresh the list of paintings
            displayPaintings();
        }
    });
});
