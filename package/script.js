let query = (new URLSearchParams(location.search)).get('q');
if (query) {
	query = decodeURIComponent(query);
	const interval = setInterval(() => {
		const input = document.querySelector('#prompt-textarea');
		if (input) {
			if (input.value === query) {
				input.dispatchEvent(new Event('input', { bubbles: true }));
				document.querySelector('[data-testid="send-button"]').click();
				clearInterval(interval);
			}
			input.value = query;
		}
	}, 200);
}
