 const buttonsBox = document.querySelectorAll('.button__box');
const pointer = document.querySelector('.pointer');


buttonsBox.forEach(buttonBox =>{
    buttonBox.addEventListener('mousemove', (e)=>{
        const position = buttonBox.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        buttonBox.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        buttonBox.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        pointer.classList.add('buttonHover');
    })

    buttonBox.addEventListener('mouseout', ()=>{
        buttonBox.style.transform = `translate(0px, 0px)`;
        buttonBox.children[0].style.transform = `translate(0px, 0px)`;
        pointer.classList = 'pointer';
    })
})



window.addEventListener('mousemove', (e)=>{
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
})
