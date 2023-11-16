function submitForm(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value
    if (name === '' || email === '' || message === ''){
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
}
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top-button');
    if (window.scrolly) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
            }
});
    document.getElementById('back-to-top-button').addEventListener('click',function(e){
       e.preventDefault();
       window.scrollTo({ top: 0, behavior: 'smooth'});
    });