const closeModalButton = document.querySelector('.close-button');
const openBtn = document.querySelector('.open-button');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
	modal.showModal();
});

closeModalButton.addEventListener('click', () => {
	modal.setAttribute('close', '');
	modal.addEventListener(
		'animationend',
		() => {
			modal.removeAttribute('close');
			modal.close();
		},
		{ once: true }
	);
});
