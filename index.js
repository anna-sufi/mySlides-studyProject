const next=document.querySelector('#next');
const back=document.querySelector('#back');
console.log(next);

const photos = ['cat1.avif', 'cat2.avif', 'cat3.avif', 'cat4.avif', 'cat5.avif', 'cat6.avif', 'cat7.avif', 'cat8.avif', 'cat9.avif', 'cat10.avif', 'cat11.avif', 'cat12.avif', 'cat13.avif', 'cat14.avif', 'cat15.avif', 'cat16.avif', 'cat17.avif', 'cat18.avif', 'cat19.avif', 'cat20.avif'];

let i=0;

next.addEventListener('click', ()=> {
    i++;
    if (i === photos.length) i=0;
    document.querySelector('img').src=photos[i];
})

back.addEventListener('click', ()=> {
    i--;
    if (i <0 ) i=photos.length - 1;
    document.querySelector('img').src=photos[i];
})