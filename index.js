const main = () => {
	const btn = document.querySelector('.btn')
	btn.addEventListener('click', () => {
		btn.appendChild(document.createTextNode('\nclicked'))
	})
};

window.addEventListener("load", main);
