document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Add this script to your existing JavaScript or create a new script file

// Function to display comments from local storage
function displayComments() {
    const commentsContainer = document.getElementById('comments-list');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
  
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.textContent = comment;
      commentsContainer.appendChild(commentDiv);
    });
  }
  
  // Event listener for form submission
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const commentContent = document.getElementById('comment').value;
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    comments.push(commentContent);
    localStorage.setItem('comments', JSON.stringify(comments));
  
    displayComments();
  });
  
  // Display comments on page load
  window.addEventListener('load', displayComments);
  
  // JavaScript to handle FAQ collapsible behavior
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer.classList.contains('show')) {
        answer.classList.remove('show');
      } else {
        closeAllAnswers();
        answer.classList.add('show');
      }
    });
  });

  function closeAllAnswers() {
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(function(answer) {
      answer.classList.remove('show');
    });
  }
});
