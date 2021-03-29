$(document).ready(function() {

	var modal = document.getElementById("confirmation-modal");
	var modalContent = $(".modal-content");
	var openModalBtn = document.getElementById("open-modal-button");
	var cancel = document.getElementById("close");

	openModalBtn.onclick = function() {
	  modal.style.display = "block";
	  centreVertically(modalContent);
	}

	cancel.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	function centreVertically(item) {
		var windowHeight = window.innerHeight;
		var windowMidPoint = windowHeight/2;
		var itemHeight = item.height();
		var itemMidPoint = itemHeight/2;
		var marginTop = windowMidPoint-itemMidPoint;
		console.log(windowHeight, windowMidPoint, itemHeight, itemMidPoint, marginTop);
		item.css("margin-top", marginTop);
	}

	$( window ).resize(function() {
	  	centreVertically(modalContent);
	});


});

