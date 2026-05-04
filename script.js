function openModal() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }