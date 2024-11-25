document.addEventListener('DOMContentLoaded', () => {
  const tasks = document.querySelectorAll('.task input');

  tasks.forEach(task => {
    task.addEventListener('change', (e) => {
      if (e.target.checked) {
        e.target.parentElement.classList.add('completed');
      } else {
        e.target.parentElement.classList.remove('completed');
      }
    });
  });
});
