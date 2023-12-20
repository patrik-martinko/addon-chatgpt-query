let query = (new URLSearchParams(location.search)).get('q');
if (query) {
	query = decodeURIComponent(query);
	const interval = setInterval(() => {
		const input = document.querySelector('[data-id="root"]');
		if (input) {
			if (input.value === query) {
				input.dispatchEvent(new Event('input', { bubbles: true }));
				input.nextSibling.removeAttribute('disabled');
				input.nextSibling.click();
				clearInterval(interval);
			}
			input.value = query;
		}
	}, 500);
}