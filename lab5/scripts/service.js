// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers

var selected;
function validatePhone(txtPhone) {
  let a = document.getElementById(txtPhone).value;
  //regular expression from stackoverflow, https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
  let filter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  let a = document.getElementById(email).value;

  //regex for emails from stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  let filter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

//https://guides.co/g/seamlessdocs-manual/29719
function validateCC(cc) {
  let a = document.getElementById(cc).value;
  let filter =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

//https://stackoverflow.com/questions/35413746/regex-to-match-date-like-month-name-day-comma-and-year/35413952
function validateMonth(month) {
  let a = document.getElementById(month).value;
  let filter =
    /^(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

//https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
function validatePostalCode(pc) {
  let a = document.getElementById(pc).value;
  let filter =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

//https://guides.co/g/seamlessdocs-manual/29719
function validateProvince(pv) {
  let a = document.getElementById(pv).value;
  let filter = /^(?:AB|BC|MB|N[BLTSU]|ON|PE|QC|SK|YT)*$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["08/29/2021", "07/01/2021", "08/10/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if (date.getDay() === 0) return [false];
  if (date.getDay() === 6) return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [unavailableDates.indexOf(string) === -1];
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function () {
  // phone validation, it calls validatePhone
  // and also some feedback as an Alert + putting a value in the input that shows the format required
  // the "addClass" will use the class "error" defined in style.css and add it to the phone input
  // The "error" class in style.css defines yellow background and red foreground
  $("#phone").on("change", function () {
    if (!validatePhone("phone")) {
      alert("Wrong format for phone");
      $("#phone").val("(555)555-5555");
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }
  });

  $("#email").on("change", function () {
    if (!validateEmail("email")) {
      alert("Wrong format for email");
      $("#email").val("asas");
      $("#email").addClass("error");
    } else {
      $("#email").removeClass("error");
    }
  });

  $("#ccnum").on("change", function () {
    if (!validateCC("cc")) {
      alert("Wrong format for credit card");
      $("#cc").addClass("error");
    } else {
      $("#cc").removeClass("error");
    }
  });

  $("#expmonth").on("change", function () {
    if (!validateMonth("expmonth")) {
      alert("Not a month");
      $("#expmonth").addClass("error");
    } else {
      $("#expmonth").removeClass("error");
    }
  });

  $("#province").on("change", function () {
    if (!validateProvince("province")) {
      alert("Not a province (use common shortform)");
      $("#province").addClass("error");
    } else {
      $("#province").removeClass("error");
    }
  });

  $("#postal").on("change", function () {
    if (!validatePostalCode("postal")) {
      alert("Not a postal code");
      $("#postal").addClass("error");
    } else {
      $("#postal").removeClass("error");
    }
  });

  // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
  // You can try different themes (the names are under the calendars) / This is Excite Bike
  // To use a different theme you must include its css in your HTML file.
  // The one I included in my HTML is the Excite Bike, but you can try others

  // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
  // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  $("#dateInput").datepicker({
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date("06/01/2020"),
    maxDate: "+4M",
    // used to disable some dates
    beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates,
  });

  // Look at the different events on which an action can be performed
  // https://www.w3schools.com/jquery/jquery_events.asp
  // Here, we put
  $("#debit").on("mouseenter", function () {
    $("#debit").addClass("showInput");
  });

  $("#debit").on("mouseleave", function () {
    $("#debit").removeClass("showInput");
  });

  // https://jqueryui.com/tooltip/
  // The class "highlight" used here is predefined in JQuery UI
  // the message of the tooltip is encoded in the input (in the HTML file)
  $("#debit").tooltip({
    classes: {
      "ui-tooltip": "highlight",
    },
  });

  $("#seeAnotherField").change(function () {
    if ($(this).val() == "mtherapist") {
      $("#mtherapistdiv").collapse("show");
      $("#mtherapistdiv").show();
      $("#mtherapistdiv");
      $("#otherFieldm").attr("required", "");
      $("#otherFieldm").attr("data-error", "This field is required.");
      $("#tmjdiv").hide();
      $("#rehabdiv").hide();
      $("#otherFieldtmj").removeAttr("required");
      $("#otherFieldtmj").removeAttr("data-error");
      $("#otherFieldrehab").removeAttr("required");
      $("#otherFieldrehab").removeAttr("data-error");
    }
    if ($(this).val() == "rehab") {
      $("#rehabdiv").show();
      $("#otherFieldrehab").attr("required", "");
      $("#otherFieldrehab").attr("data-error", "This field is required.");
      $("#mtherapistdiv").hide();
      $("#tmjdiv").hide();
      $("#otherFieldtmj").removeAttr("required");
      $("#otherFieldtmj").removeAttr("data-error");
      $("#otherFieldm").removeAttr("required");
      $("#otherFieldm").removeAttr("data-error");
    }
    if ($(this).val() == "tmj") {
      $("#tmjdiv").show();
      $("#otherFieldtmj").attr("required", "");
      $("#otherFieldtmj").attr("data-error", "This field is required.");
      $("#mtherapistdiv").hide();
      $("#rehabdiv").hide();
      $("#otherFieldrehab").removeAttr("required");
      $("#otherFieldrehab").removeAttr("data-error");
      $("#otherFieldm").removeAttr("required");
      $("#otherFieldm").removeAttr("data-error");
    } else if ($(this).val() == "def") {
      $("#tmjdiv").hide();
      $("#mtherapistdiv").hide();
      $("#rehabdiv").hide();
      $("#otherFieldtmj").removeAttr("required");
      $("#otherFieldtmj").removeAttr("data-error");
      $("#otherFieldrehab").removeAttr("required");
      $("#otherFieldrehab").removeAttr("data-error");
      $("#otherFieldm").removeAttr("required");
      $("#otherFieldm").removeAttr("data-error");
    }
    selected = $("#seeAnotherField").find(":selected").text();
    $("#paymentservice").html(function () {
      var span = '<span class="price">' + "$150" + "</span>";
      return "<p>" + selected + span + "</p>";
    });
    // $("#priceT").html($150);
    /* $("select option:selected").each(function () {
      selected = $(this).text() + " ";
      $("#paymentservice").text("" + selected);
    });*/
  });

  $("#submitbtn").click(function () {
    let dateInput = $("#dateInput").val();
    let timein = $("#time").find(":selected").text();
    let specialist = "";
    if (
      $("#otherFieldm")
        .find(":selected")
        .val()
        .localeCompare("Please Select") !== 0
    ) {
      specialist = $("#otherFieldm").find(":selected").val();
    }
    if (
      $("#rehabfield")
        .find(":selected")
        .val()
        .localeCompare("Please Select") !== 0
    ) {
      specialist = $("#rehabfield").find(":selected").val();
    }
    if (
      $("#otherFieldtmj")
        .find(":selected")
        .val()
        .localeCompare("Please Select") !== 0
    ) {
      specialist = $("#otherFieldtmj").find(":selected").val();
    }
    alert(
      "Appointment booked for " +
        selected +
        "! The appointment is at " +
        dateInput +
        " " +
        timein +
        " " +
        "with " +
        specialist
    );
  });
});
