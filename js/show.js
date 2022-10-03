const show = document.querySelector('#show');
if(show){
	const elemGrid = document.querySelectorAll('.elem__grid');
	function openElemGrid(){
		for(let i = 2; i < elemGrid.length; i++){
			elemGrid[i].style.display = "flex";
			elemGrid[i].style.flexDirection = "column";
		}
		show.style.display = "none";
	}
	show.addEventListener('click', openElemGrid);
}