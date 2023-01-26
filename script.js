const input = document.querySelector('[data-id="root"]');
let value = (new URLSearchParams(location.search)).get('q');
if (value) {
	value = decodeURIComponent(value);
	const interval = setInterval(() => {
		if (input.textContent !== value) {
			input.textContent = value;
		} else {
			clearInterval(interval);
			input.nextSibling.click();
		}
	}, 100);
}