// scroll effect code //

const translate = document.querySelectorAll('.translate');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset; 
    
    translate.forEach(element=> {
        let speed = element.dataset.speed; 
        element.style.transform = `translateY(${scroll * speed}px)`;  
    })
} )

// end of scroll effect code //



// code for *click effect email submit button //
document.querySelector('form').submit();


// end of code button//s
