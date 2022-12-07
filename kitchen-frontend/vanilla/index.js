//mark version:
const render = () => {
	const root = document.getElementById("root");
	const App = document.createElement("div");
	
	const OrderForm = document.createElement("Form");

	const name = document.createElement("input");
	
	//keyval pair
	//same as setAttribute() performance wise?
	name.placeholder = "Name";
	const address = document.createElement("input");
	address.placeholder = "Address";
	const items = document.createElement("input");
	items.placeholder = "Items";
	const submit = document.createElement("button");
	submit.innerText = "Submit";

	OrderForm.append(name, address, items, submit);
	App.append(OrderForm);
	root.append(App);
}

document.addEventListener('DOMContentLoaded', () => {
	render();
});


//My version:
//might not need this because we have defer
// window.addEventListener("DOMContentLoaded", ()=>{
//     const root = document.getElementById("root");

//     const form = document.createElement("form");

//     const nameInput = document.createElement("input");
//     nameInput.setAttribute("type","text");
//     nameInput.setAttribute("placeholder", "name");
//     form.append(nameInput); // vs appendChild?

//     const addressInput = document.createElement("input");
//     addressInput.setAttribute("type","text");
//     addressInput.setAttribute("placeholder", "address");
//     form.append(addressInput);

//     const itemsInput = document.createElement("input");
//     itemsInput.setAttribute("type","text");
//     itemsInput.setAttribute("placeholder", "name");
//     form.append(itemsInput);

//     const submitButton = document.createElement("button");
//     submitButton.value = "Place Order";

//     root.appendChild(form);
// });




