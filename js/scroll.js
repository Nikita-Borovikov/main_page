function scrollTo(element)
{
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var button = document.querySelector('.btn-projects');
var footer = document.querySelector('#projects')

button.addEventListener('click', () => {
    scrollTo(projects);
})