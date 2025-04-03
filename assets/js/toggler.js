document.getElementsByClassName('navbar-toggler').addEventListener('click', function () {
    const button = this;
    if (button.innerHTML === '\uf0c9') {
        button.innerHTML = 'X'; // Change to "X"
    } else {
        button.innerHTML = '\uf0c9'; // Change back to hamburger
    }
});
