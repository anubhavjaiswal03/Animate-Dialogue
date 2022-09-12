const closeBtn = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
	modal.showModal();
});

closeBtn.addEventListener('click', () => {
	modal.setAttribute('close', null);
	setTimeout(() => {
		modal.removeAttribute('close');
		modal.close();
	}, 500);
});
