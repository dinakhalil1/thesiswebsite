var button = document.getElementById("clickme"),
count = 0;
button.onclick = function() {
	count += 1;
	// button.innerHTML = count + " people chose this too!";
	button.classList.add('correct');
}

// document.getElementById("clickme")addEventListener('click', function() 
// 	{document.getElementById("clickme").classList.add('correct');});

// var correct= document.getElementById("clickme");
//     clickme.className += " correct";


// var button = document.getElementById("clickme"),
// button.onclick = function () {
//    var element = document.getElementById("clickme");
//    element.classList.toggle("correct");
//    // button.classList.add('correct');
// }

// init controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: '#end1'})
		.setClassToggle('#animation1')
		.addIndicators() 
		.addTo(controller);
	// build scene
	// var scene = new ScrollMagic.Scene({triggerElement: "#animation1"})
	// 				// trigger a velocity opaticy animation
	// 				.setVelocity("#end1", {opacity: 0}, {duration: 400})
	// 				.addIndicators() // add indicators (requires plugin)
	// 				.addTo(controller);
