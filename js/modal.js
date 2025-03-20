function openModal(imageSrc, imageAlt, description) {
    // Build modal content with full image and description
    const content = `
      <div class="flex flex-col md:flex-row">
        <img src="${imageSrc}" alt="${imageAlt}" class="w-full md:w-1/2 object-contain rounded-lg">
        <div class="mt-4 md:mt-0 md:ml-4 flex flex-col justify-center">
          <h3 class="text-2xl font-bold mb-2">${imageAlt}</h3>
          <p class="text-gray-700">${description}</p>
        </div>
      </div>
    `;
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Close modal when clicking outside the content
  document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  