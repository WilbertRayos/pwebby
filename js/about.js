$("document").ready(function(){
    $(".accordion-content").hide();
    $(".accordion-toggle").on("click", function(event){
        // event.preventDefault();
        var accordion = $(this);
        var accordionContent = accordion.next(".accordion-content");

        accordion.toggleClass("open");
        accordionContent.slideToggle(250);
    });
});
