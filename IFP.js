function readURL(input)
{
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#imgview')
				.attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}
}

window.onload = function()
{
	document.getElementById('urlbtn').onclick = function()
	{
		var img = document.getElementById("imgview");
		var url = document.getElementById("urlbox").value;
		img.src = url + '?' + new Date().getTime(); // Avoids DOME errors
		img.setAttribute("crossOrigin", "");
	}
}

function editCanvas(val)
{
	var canvas = document.getElementById('myCanvas'),
		context = canvas.getContext('2d');
	var img = document.getElementById("imgview");
	img.crossOrigin = "Anonymous";
	canvas.width = img.width;
	canvas.height = img.height;
	context.drawImage(img, 0, 0);
	passOne = Math.random() * (0.700 - 0.000)+ 0.100;
	passTwo = Math.random() * (0.700 - 0.000) + 0.100;
	passThree = Math.random() * (0.700 - 0.000) + 0.100;
	//var savedImage = canvas.toDataURL("image/png");

	var imageData = context.getImageData(0, 0, canvas.width, canvas.height),
		pix = imageData.data;

	n = pix.length;
	for (i = 0; i < n; i+=4)
	{
		var r = pix[i], g = pix[i+1], b = pix[i+2];

		switch(val)
		{
			case "NoEdit":
			pix[i] = r;
			pix[i+1] = g;
			pix[i+2] = b;
			break;
			case "Jacob":
			pix[i] = (r*.230)+(g*.159)+(b*.0);
			pix[i+1] = (r*.86)+(g*.180)+(b*.233);
			pix[i+2] = (r*.0)+(g*.114)+(b*.178);
			break;
			case "Thaddeus":
			pix[i] = (r*.500)+(g*.200)+(b*.160);
			pix[i+1] = (r*.200)+(g*.400)+(b*.130);
			pix[i+2] = (r*.300)+(g*.222)+(b*.666);
			break;
			case "Jace":
			pix[i] = (r*.390)+(g*.700)+(b*.185);
			pix[i+1] = (r*.300)+(g*.600)+(b*.100);
			pix[i+2] = (r*.200)+(g*.500)+(b*.100);
			break;
			case "Julian":
			pix[i] = (r*.390)+(g*1.3)+(b);
            pix[i+1] = (r)+(g)+(b);
            pix[i+2] = (r*.9)+(g*.783)+(b*1.2);
			//pix[i]=((r-b)+(r-g))
			//pix[i+1]=((g-r)+g)
			//pix[i+2]=(b*0.394)
			break;
			case "Michael":
			pix[i] = (r*.150)+(g*.550)+(b*.110);
			pix[i+1] = (r*200)+(g*.750)+(b*.340);
			pix[i+2] = (r*300)+(g*.300)+(b*.210);
			break;
			case "Cris":
			pix[i] = (r*passOne + g*passOne + b*passOne);
			pix[i+1] = (r*passTwo + g*passTwo + b*passTwo);
			pix[i+2] = (r*passThree + g*passThree + b*passThree);
			break;
			case "John":
			// Sepia formula
			//pix[i] = (r*.393)+(g*.769)+(b*.189);
			//pix[i+1] = (r*.394)+(g*.686)+(b*.168);
			//pix[i+2] = (r*.272)+(g*.534)+(b*.131);
			pix[i] = b;
			pix[i+1] = r;
			pix[i+2] = g;
			break;
			case "Nicolas":
			pix[i] = (r*.21)+(g*.72)+(b*.07)
			break
			case "Ali":
			pix[i] = (r*.227)+(g*.137)+(b*.80);
			pix[i+1]=(r*.630)+(g*.334)+(b*.250);
			pix[i+2]=(r*.780)+(g*.479)+(b*.324);
			break;
			case "Ahmad":
			break;
			case "Karol":
			pix[i] = r+(b*.25);
			pix[i+1] = g+(b*.25);
			pix[i+2] = b+(b*.25);
			break;
		}
	}
	context.putImageData(imageData, 0, 0);

	var savedImage = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
}