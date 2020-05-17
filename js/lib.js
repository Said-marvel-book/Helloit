function send() {
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let age = document.getElementById("age").value;

	let API = "Your Api";
	console.log(name);
	console.log(surname);
	console.log(age);

	$.ajax({
		url: API,
		data: {
			name:name,
			surname:surname,
			age:age
		},
		contentType: "application/json"
	})
	.done(function(data){
		console.log(data);
	});
}