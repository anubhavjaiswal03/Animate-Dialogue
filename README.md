# Animate a `<dialog>` element

Using the `<dialog>` element and animating it using in-built attribute `open` and `showModal()` function along with a custom attribute `close`.

<p align="center">
  <img src="https://media3.giphy.com/media/VqiScA4E8Z0bN0eqwN/giphy.gif?cid=790b76112bd655fb3b6847aae12ca2e30e0a2891462e5286&rid=giphy.gif&ct=g">
</p>

**:bulb: Note:** Closing the modal automatically by using an event listener `animationend` requires the use of `{once: true}`.

```js
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
```
