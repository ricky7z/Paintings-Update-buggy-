document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-grid');

    const paintings = JSON.parse(localStorage.getItem('paintings')) || [];

    paintings.forEach(painting => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `
            <img src="${painting.image}" alt="${painting.title}">
            <h2>${painting.title}</h2>
            <p>${painting.description}</p>
            <p>${painting.price}</p>
            <a href="#" class="btn">Get This</a>
        `;
        gallery.appendChild(item);
    });
    paintings.forEach(painting => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.innerHTML = `
          <img src="${painting.image}" alt="${painting.title}">
          <h2>${painting.title}</h2>
          <p>${painting.Description}</p>
          <p>${painting.price}</p>
          <a href="#" allign="center" class="btn">Get This</a>
        `;
        gallery.appendChild(item);
      });


    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleButton.checked = true;
    }

    toggleButton.addEventListener('change', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
  });



  const toggleButton = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleButton.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    toggleButton.addEventListener('change', () => {
        if (toggleButton.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            theme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
});


// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
    const video = document.querySelector('.hero-video');

    if (isDarkMode) {
        video.classList.remove('video-inverted');
    } else {
        video.classList.add('video-inverted');
    }
}

// Event listener for dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
    toggleDarkMode();
});

// Initialize dark mode state
toggleDarkMode();


// Function to apply the theme based on the user's preference
function applyTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Apply the theme on page load
document.addEventListener('DOMContentLoaded', applyTheme);

// Optional: Add a listener to update the theme if the system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const video = document.querySelector('.hero-video');

    // Apply the initial theme
    const applyTheme = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            video.classList.remove('video-inverted');
            toggleButton.checked = true;
        } else {
            video.classList.add('video-inverted');
            toggleButton.checked = false;
        }
    };

    applyTheme();

    // Update the theme and video inversion on toggle
    const toggleDarkMode = () => {
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDarkMode) {
            video.classList.remove('video-inverted');
        } else {
            video.classList.add('video-inverted');
        }
    };

    // Listen to changes in the dark mode toggle switch
    toggleButton.addEventListener('change', () => {
        const theme = toggleButton.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggleDarkMode();
    });

    // Listen for changes in system theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            video.classList.remove('video-inverted');
        } else {
            video.classList.add('video-inverted');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const video = document.querySelector('.hero-video');

    // Function to apply the theme based on the user's preference
    function applyTheme() {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        toggleButton.checked = theme === 'dark';
        updateVideoFilter(theme);
    }

    // Function to update video filter based on the theme
    function updateVideoFilter(theme) {
        if (theme === 'dark') {
            video.classList.remove('video-inverted');
        } else {
            video.classList.add('video-inverted');
        }
    }

    // Apply the initial theme
    applyTheme();

    // Toggle dark mode when the switch is changed
    toggleButton.addEventListener('change', () => {
        const newTheme = toggleButton.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateVideoFilter(newTheme);
    });

    // Update the theme when system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateVideoFilter(newTheme);
        toggleButton.checked = newTheme === 'dark';
    });
});

// Toggle dark/light mode based on user preference and system settings
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';

    toggleSwitch.addEventListener('change', () => {
        const theme = toggleSwitch.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
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
            captionText.innerHTML = e.target.alt;
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


document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone');
  const countrySelect = document.getElementById('country');

  // Update phone number input with country code when country is selected
  countrySelect.addEventListener('change', () => {
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const countryCode = selectedOption.getAttribute('data-code');
    phoneInput.value = countryCode ? countryCode + ' ' : '';
  });

  // Validate phone number input
  phoneInput.addEventListener('input', () => {
    const phoneValue = phoneInput.value;
    const phonePattern = /^\+?\d{10,15}$/; // Adjust pattern according to your validation needs
    if (phonePattern.test(phoneValue)) {
      phoneInput.setCustomValidity('');
    } else {
      phoneInput.setCustomValidity('Please enter a valid phone number.');
    }
  });
});


//document.getElementById('phone').addEventListener('input', function (e) {
    //const phoneInput = e.target;
    //const pattern = /^\+\d{1,4}\s\d{10}$/;
  
 //   if (!pattern.test(phoneInput.value)) {
   //   phoneInput.setCustomValidity('Phone number must start with a "+" followed by country code (1-4 digits) and then the phone number (10 digits)');
    //} else {
   //   phoneInput.setCustomValidity('');
    //}
  //});

  
  function validatePhoneNumber(input) {
    // Remove any non-numeric characters except '+' and space
    const cleanedValue = input.value.replace(/[^+\d\s]/g, '');
  
    // Ensure format: +countryCode space phoneNumber (where countryCode is 1-4 digits and phoneNumber is 10 digits)
    const pattern = /^\+\d{1,4}\s\d{10}$/;
  
    if (pattern.test(cleanedValue)) {
      input.value = cleanedValue;
      input.setCustomValidity('');
    } else {
      input.setCustomValidity('Phone number must start with a "+" followed by country code (1-4 digits), a space, and then the phone number (10 digits).');
    }
  }
  
  // Apply validation on input change
  document.getElementById('phone').addEventListener('input', function() {
    validatePhoneNumber(this);
  });
  