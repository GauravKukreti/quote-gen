const q = document.getElementById("quote");
const a = document.getElementById("author");
var data;

function getResponse() {
	fetch("https://api.quotable.io/quotes/random")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			this.data = data;
			console.log(data);
			console.log(this.data);
		});
}

function fetchQuote() {
	getResponse();

	setTimeout(function () {
		const quoteData = data[0];
		q.innerHTML = " '' " + quoteData.content + " '' ";
		a.innerHTML = "- " + quoteData.author;
	}, 500);
}
fetchQuote();
