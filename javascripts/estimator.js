$( document ).ready(function() {

  // When the start date has been provided, populate the earnings div and display it.
  $("#start_date").change(function(){
    
    // Validate the provided date
    end_date = $("#start_date").val();
    var date = new Date(end_date);

    // Define the names of months, so that we can provide human-readable text.
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Provide the end date of the salary estimate period.
    var end_date_formatted = monthNames[date.getMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();

    // Calculate and store the start date of the salary estimate period.
    date.setDate(date.getDate() - 365);
    var start_date_formatted = monthNames[date.getMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();

    // Populate the start and end date fields.
    $("#start_date_formatted").text(start_date_formatted);
    $("#end_date_formatted").text(end_date_formatted);
    
    // Show the earnings DIV.
    $("#earnings").show();

  });

  // When the form is being submitted, do the math on benefits and display the results.
  $( "#claim" ).submit(function( event ){
    
    // Don't actually submit the form via GET.
    event.preventDefault();

    // Hide the form that the applicant just completed.
    $("#estimator-form").hide();

    // Bring the provided salary into scope.
    var applicant_salary = $("#annual_salary").val();

    // Set the minimum wage, and calculate what that is over a one-year period.
    var minimum_wage = 7.25;
    var minimum_salary = minimum_wage * 1.5 * 40 * 52;

    // Declare a variable.
    var estimated_benefit;

    // If the applicant makes less than 150% of minimum wage, they get 90% of their wages.
    if (applicant_salary < (minimum_salary * 1.5)){
      estimated_benefit = applicant_salary * 0.9 / 52;
    }

    // If the applicant makes 150% of minimum wage or more, they get 90% of minimum wage,
    // plus 50% of their salary.
    else {
      estimated_benefit = ((minimum_salary * 0.9) + (applicant_salary * 0.5)) / 52;
    }

    // Cap benefits at $1,000.
    if (estimated_benefit > 1000){
      estimated_benefit = 1000;
    }

    // Round to the nearest dollar.
    estimated_benefit = Math.round(estimated_benefit);

    // Populate the estimated benefit.
    $("#estimated_benefit").text(estimated_benefit);

    // Show the results.
    $("#estimator-results").show();


  });
});
