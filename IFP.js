 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imgview')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
				reader.crossOrigin = "Anonymous";
            }
        }
		
function makeGray()
{
	document.getElementById("imgview").style.filter = "grayscale(100%)";
}

function editCanvas()
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
		
		// Sepia formula
		pix[i] = (r*.393)+(g*.769)+(b*.189);
		pix[i+1] = (r*.394)+(g*.686)+(b*.168);
		pix[i+2] = (r*.272)+(g*.534)+(b*.131);
	}
	context.putImageData(imageData, 0, 0);
	
	var download = document.getElementById("test");

	if (document.getElementById("myCanvas"))
	{
		console.log("Found");
	}
	else
	{
		console.log("Not found");
	}
	var savedImage = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.href = savedImage;
	console.log(img.name);
	download.download = "test.png";
	

	
	// Can we copy pixels from img to canvas pixels?
}
