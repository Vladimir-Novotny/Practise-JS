const filterSquare = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['filter'];

    filterSquare.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }

    });

});

