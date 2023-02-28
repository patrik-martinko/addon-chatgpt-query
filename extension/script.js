// Get the current URL
const currentUrl = window.location.href;

// Parse the URL and get the search params
const urlSearchParams = new URLSearchParams(currentUrl.split('?')[1]);

// Get the value of the "q" parameter
const query = urlSearchParams.get('q');

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