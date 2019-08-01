var topAppBar;

var patients_name;
var dob;
var phone;

var address;
var city;
var phone;
var zip_code;

document.addEventListener("DOMContentLoaded", function(){
	topAppBar = new mdc.topAppBar.MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

	patients_name = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#patients_name'));
	//patients_name_icon = new mdc.textField.MDCTextFieldIcon(document.querySelector('.mdc-text-field#patients_name .mdc-text-field__icon'));
	dob = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#dob'));
	phone = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#phone'));
	
	address = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#address'));
	city = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#city'));
	state = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#state'));
	zip_code = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field#zip_code'));
	
	console.log('done');
});
