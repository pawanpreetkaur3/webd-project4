/********w************
    
	Project 4 Javascript
	Name: Pawanpreet Kaur
	Date: 26-04-2023
	Description: Represnts the Javascript document for Project 4.

*********************/
/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("orderform").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

//	Complete the validations below

	// Checks validation for name to include a value.
	if(document.getElementById("name").value == ""){
		document.getElementById("name_error").style.display = "block";

		errors = 1;
	}

    // Checks validation for phone number to include a value.
	if(document.getElementById("phonenumber").value == ""){
		document.getElementById("phonenumber_error").style.display = "block";

		errors = 1;
	}

    // Checks validation for email to include a value.
    let regex2 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
	let email = document.getElementById("email").value;

	if(document.getElementById("email").value == ""){
		document.getElementById("email_error").style.display = "block";

		errors = 1;
	}

	// Checks validation for email to be in valid format.
	if(!regex2.test(email) && document.getElementById("email").value != ""){
		document.getElementById("emailformat_error").style.display = "block";

		errors = 1;
	}

    // Checks validation for comments to include a value.
    if(document.getElementById("comments").value == ""){
		document.getElementById("comments_error").style.display = "block";

		errors = 1;
	}

/*
 * Handles the load event of the document.
 */
function load() {

    // Add event listener for the form submit

	document.getElementById("contactform").addEventListener("submit", validate);

	document.getElementById("contactform").addEventListener("reset", resetForm);

    hideErrors();

}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
