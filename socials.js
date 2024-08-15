document.addEventListener('DOMContentLoaded', () => {
    const tiktokVideosDiv = document.getElementById('tiktok-videos');
    
    // Replace these URLs with actual TikTok video URLs
    const tiktokVideos = [
        'https://www.tiktok.com/@ibz.2.0/video/7106494330700860678?is_from_webapp=1&sender_device=pc&web_id=7402376004608984582',
        'https://www.tiktok.com/@username/video/0987654321',
        'https://www.tiktok.com/@username/video/1122334455'
    ];

    tiktokVideos.forEach(url => {
        const videoEmbed = document.createElement('div');
        videoEmbed.classList.add('gallery-item');
        videoEmbed.innerHTML = `<iframe src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        tiktokVideosDiv.appendChild(videoEmbed);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close');

    // Event delegation to handle image clicks in the dynamically loaded gallery
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            modal.style.display = "block";
            modalImage.src = e.target.src;
            captionText.textContent = e.target.alt;
        }
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking anywhere outside the modal image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

