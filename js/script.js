const galleryElm = document.querySelector('#gallery');
const galleryButtonElm = document.querySelector('#gallery__button');

const onlineElm = document.querySelector('#online');
const onlineButtonTextElm = document.querySelector('#online__button--text');


galleryElm.addEventListener('mouseover', () => {
    galleryElm.style.cursor = 'pointer';
    galleryButtonElm.style.backgroundColor = '#FFFFFF';
    galleryButtonElm.style.color = '#263238';
});

galleryElm.addEventListener('mouseout', () => {
    galleryButtonElm.style.backgroundColor = 'transparent';
    galleryButtonElm.style.color = '#FFFFFF';
});

galleryElm.addEventListener('click', () => {
    location.href = '#';
});

onlineElm.addEventListener('mouseover', () => {
    onlineElm.style.cursor = 'pointer';
    onlineButtonTextElm.style.backgroundColor = '#CFDCF1';
});

onlineElm.addEventListener('mouseout', () => {
    onlineButtonTextElm.style.backgroundColor = '#FFFFFF';
});

onlineElm.addEventListener('click', () => {
    location.href = '#';
});
