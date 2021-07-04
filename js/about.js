// JQUERY

$("document").ready(function(){
    $(".accordion-content").hide();
    $(".accordion-toggle").on("click", function(event){
        // event.preventDefault();
        var accordion = $(this);
        var accordionContent = accordion.next(".accordion-content");

        accordion.toggleClass("open");
        accordionContent.slideToggle(250);

        json_init();
    });
});


// VANILLA JAVASCRIPT

function json_init() {
    fetch("./json/information.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // work_experiences(data);
                var samp_text = "";
                for(var key in data) {
                    samp_text +=
                    "<tr style='background-color: blue;'>"+
                        "<td rowspan='4'>"+data[key].logo+"</td>"+
                        "<td>"+data[key].job_description+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+data[key].company_name+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+data[key].duration+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+data[key].tasks+"</td>"+
                    "</tr>";
                }
                console.log(samp_text);
                document.getElementById("work_experiences")
                    .innerHTML = samp_text;


        })
}

// function work_experiences(data) {
//     for(var key in data){
//         document.getElementById("work_experiences").innerHTML =
//             "<tr>"
//                 "<td>"
//                     data[key].logo
//                 "</td>"
//             "</tr>"

//     }
// }
