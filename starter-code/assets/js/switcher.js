const switcherButtons = document.querySelectorAll('.switcher .navigation a');
const switcherImages = document.querySelectorAll('.switcher .image-wrapper picture');
const switcherContent = document.querySelectorAll('.switcher .content-wrapper .content');

switcherButtons.forEach((navigationButton, index) => {
  	navigationButton.addEventListener("click", () => {
  		const activeButton = document.querySelector('.switcher .navigation a.active');
  		const activeImage = document.querySelector('.switcher .image-wrapper picture.active');
		const activeContent = document.querySelector('.switcher .content-wrapper .content.active');

  		activeButton.classList.remove("active");
  		activeImage.classList.remove("active");
  		activeContent.classList.remove("active");

  		switcherButtons[index].classList.add("active");
  		switcherImages[index].classList.add("active");
  		switcherContent[index].classList.add("active");
	});
});