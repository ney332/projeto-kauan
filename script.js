
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show') 
        }
    })
    
})


const elements = document.querySelectorAll('.title-and-list')
elements.forEach((element) => myObserver.observe(element));

const myObserve = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
    
})
const elementos = document.querySelectorAll('img')
elementos.forEach((element) => myObserve.observe(element));