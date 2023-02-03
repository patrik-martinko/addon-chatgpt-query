let query = (new URLSearchParams(location.search)).get('q');
if (query) {
	query = decodeURIComponent(query);
	const interval = setInterval(() => {
		const input = document.querySelector('[data-id="root"]');
		if (input) {
			clearInterval(interval);
			input.textContent = query;
			input.nextSibling.click();
		}
	}, 500);
}