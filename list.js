


    $("#arrow").click(function () {
        let value = $(".val").val();
        $(".li1").append("<li class='element'>" + value + "</li>");

        var litoadd = $(".element");

    });

    $(document.body).on("click",'.element',function(){
        
            $(this).css("text-decoration", "line-through");
    });
    $(document.body).on("dblclick",'.element',function(){
        $(this).hide()
    })



    $("#delete").click(function () {
        $(".element").hide("slow");

    })




