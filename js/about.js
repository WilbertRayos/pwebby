// JQUERY

$("document").ready(function(){
    $(".accordion-content").hide();
    $(".accordion-toggle").on("click", function(event){
        // event.preventDefault();
        var accordion = $(this);
        var accordionContent = accordion.next(".accordion-content");

        accordion.toggleClass("open");
        accordionContent.slideToggle(250);


        init_work_experiences();
        init_education();
        init_technical_skills();
        return false;
    });
});


// VANILLA JAVASCRIPT

function init_work_experiences() {
    fetch("./json/work_experiences.json")
        .then(response => response.json())
        .then(data => {
                var table_content = "";
                for(var key in data) {
                    table_content +=
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
                document.getElementById("work_experiences")
                    .innerHTML = table_content;
        })
}

function init_education() {
    fetch("./json/education.json")
        .then(response => response.json())
        .then(data => {
                var table_content = "";
                for(var key in data) {
                    table_content +=
                    "<tr style='background-color: blue;'>"+
                        "<td rowspan='3'>"+data[key].logo+"</td>"+
                        "<td>"+data[key].school_name+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+data[key].grade+"</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+data[key].duration+"</td>"+
                    "</tr>"
                }
                document.getElementById("education")
                    .innerHTML = table_content;
        })
}

function init_technical_skills() {
    fetch("./json/technical_skill.json")
        .then(response => response.json())
        .then(data => {
            for(var x in data){
                var temp1 = data[x];
                for(var y in temp1) {
                    console.log(y);
                }
            }
        });
}
