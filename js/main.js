function go_home(){
    $(document).ready(function(){
        $("#main_section").load("home.php");
        // $("nav li #home").css({
        //     "padding": "15px",
        //     "background-color": "#9575CD",
        //     "font-family":" Helvetica, sans-serif",
        //     "border-radius":" 5px 5px 0px 0px"
        // });
    });
}

function go_about(){
    $(document).ready(function(){
        $("#main_section").load("about.php");
    });
}

function go_certificates(){
    $(document).ready(function(){
        $("#main_section").load("certificates.php");
    });
}
function go_contacts(){
    $(document).ready(function(){
        $("#main_section").load("contacts.php");
    });
}

