//this function is enrolling the students into table

function enroll_student_btn()
{   // checks if the fields are not blank
    if (document.getElementById("name").value != '' && document.getElementById("email").value!= '' 
    && document.getElementById("website").value!= '' && document.getElementById("imageLink").value != '') {
            enroll_student();
            remove_form_entries();
     
    }
    else {
        if(document.getElementById("name").value==""){
            document.getElementById("print_message1").innerHTML = "Name field is empty";
            document.getElementById("print_message1").style.color="red";
        }
        else{
            document.getElementById("print_message1").innerHTML="";
        }
        if(document.getElementById("email").value==""){
            document.getElementById("print_message2").innerHTML = "Email field is empty";
            document.getElementById("print_message2").style.color="red";
        }
        else{
            document.getElementById("print_message2").innerHTML="";
        }
        if(document.getElementById("website").value==""){
            document.getElementById("print_message3").innerHTML = "Email field is empty";
            document.getElementById("print_message3").style.color="red";
        }
        else{

        }
        if(document.getElementById("website").value==""){
            document.getElementById("print_message4").innerHTML = "ImageLink field is empty";
            document.getElementById("print_message4").style.color="red";
        }
        else{
            document.getElementById("print_message4").innerHTML="";
        }
        
    }
}

let count = 0;
function enroll_student()
{
    if ($("#Student_Table tbody").length == 0) {
        $("#Student_Table").append("<tbody></tbody>");
    }
    // applying the diffrent style on odd row
    if (count % 2 == 0) {
        $("#Student_Table tbody").append("<tr>" + "<td  >" + "<b>" + $("#name").val() + "</b>" + "<br>" +
        Select_gender() + "<br>" + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" + $("#email").val() +"<br>" + Select_skills()
            + "</td>" + "<td  >" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:123px;height:104px"></a>' + "</td>" + "</tr>");

    }
    // applying the diffrent style on even row
    else {
        $("#Student_Table tbody").append("<tr>" + "<td  >" + "<b>" + $("#name").val() + "</b>" + "<br>" +
        Select_gender() + "<br>" + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" + $("#email").val() +"<br>" + Select_skills()
            + "</td>" + "<td  >" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:123px;height:104px"></a>' + "</td>" + "</tr>");
    }
    count++;
}
// checking the radio button which user has selected
function Select_gender()
{
    const choices = document.querySelectorAll("#genderchoice");
   // console.log(choices[0].innerHTML);
    let radio_selected_Val;
    for (const choice of choices) {
        if (choice.checked) {
            radio_selected_Val = choice.value;
            break;
        }
    }
    return radio_selected_Val;
}
// storing the skills into the array which user has selected in checkbox
function Select_skills()
{
    const choices = document.querySelectorAll("#skillchoice");
    let array_of_checkbox_input = [];
    for (const choice of choices) {
        if (choice.checked) {
            array_of_checkbox_input.push(choice.value);
        }
    }
    return array_of_checkbox_input.toString();
}

// this fuction clearing the all field
function remove_form_entries()
{
    
    document.getElementById("print_message1").innerHTML="";
    document.getElementById("print_message2").innerHTML="";
    document.getElementById("print_message3").innerHTML="";
    document.getElementById("print_message4").innerHTML="";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("website").value="";
    document.getElementById("imageLink").value="";
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;

}