"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    //alert("joinList");
    // validate the entries
    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required"; // this error shoes when email is not enterd in the 1st email address
        $("email_address1").focus();
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required"; // this error shoes when email is not enterd in the 2st email address
    	$("email_address2").focus();
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match"; // this error message shows when the 1st and 2nd emails are not the same
    	$("email_address2").focus();
    } else if (firstName == "") {
    	errorMessage = "First name entry required"; // this error message shoes when you skip the first name and move to next line
    	$("first_name").focus();
    }
    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage == "") {
        //here single "=" is used to assign values ----2nd error
        //the correct answer is "==" this double equlas is used for comparing the values for right or wrong 
        $("email_form").submit(); 
    } else {
    	alert(errorMessage);
    }
};
window.onload = function() {
    $("join_list").onclick = joinList;
    // here the error is upper case "L" in "join_List" ---1st error
    // the correct answer is lower case "l"
    $("email_address1").focus();
};
