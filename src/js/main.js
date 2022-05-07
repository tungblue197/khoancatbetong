import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'


var footer = document.querySelector('.contact')

document.addEventListener('scroll', (e) => {
    var ofset = window.pageYOffset;
    console.log(ofset)
    if(ofset >= 30){
        footer.classList.add('fixed')
    }else{
        footer.classList.remove('fixed')
    }
})