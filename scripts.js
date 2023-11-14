// JavaScript for tabbed navigation
const tabs = document.querySelectorAll('#tab-navigation a');
const sections = document.querySelectorAll('main section');

tabs.forEach(tab => {
  tab.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    sections.forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(targetId).style.display = 'block';
  });
});
