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

function editCanvas(val)
{	
	var canvas = document.getElementById('myCanvas'),
		context = canvas.getContext('2d');
	var img = document.getElementById("imgview");
	img.crossOrigin = "Anonymous";
	canvas.width = img.width;
	canvas.height = img.height;
	context.drawImage(img, 0, 0);
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
			break;
			case "Thaddeus":
			break;
			case "Jace":
			break;
			case "Julian":
			pix[i]=((R-B)+(R-G))
			pix[i+1]=((G-R)+G)
			pix[i+2]=(B*0.394)
			break;
			case "Michael":
			break;
			case "Cris":
			break;
			case "John":
			// Sepia formula
			pix[i] = (r*.393)+(g*.769)+(b*.189);
			pix[i+1] = (r*.394)+(g*.686)+(b*.168);
			pix[i+2] = (r*.272)+(g*.534)+(b*.131);
			break;
			case "Nicolas":
			break
			case "Ali":
			break;
			case "Ahmad":
			break;
			case "Karol":
			break;
		}
	}
	context.putImageData(imageData, 0, 0);

	var savedImage = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
}
