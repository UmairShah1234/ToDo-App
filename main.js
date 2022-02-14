$(document).ready(function(){
    $(console.log(""))
    // add todos
    $("button").on("click",function(){
        if (this.id == "btn1"){
            $(".box1").append('<div class="innerbox"><textarea name="" id="" ></textarea><i class="fas fa-trash-alt"></i></div>')
        }else if(this.id == "btn2"){
            $(".box2").append('<div class="innerbox"><textarea name="" id="" ></textarea><i class="fas fa-trash-alt"></i></div>')
        }else if(this.id == "btn3"){
            $(".box3").append('<div class="innerbox"><textarea name="" id="" ></textarea><i class="fas fa-trash-alt"></i></div>')
        }
    })
    
    //sorting todos
    $(function(){
        $(".box1,.box2,.box3").sortable({
            connectWith: ".box1,.box2,.box3",
            start: function (event, ui) {
                    ui.item.toggleClass("highlight");
            },
            stop: function (event, ui) {
                    ui.item.toggleClass("highlight");
            }
    });
    $(".box1,.box2,.box3").disableSelection();
    })

    //delete div    (soln on  stackoverflow)
   $(".box").on("click","i",function(){
       $(this).parent().remove() ;
   })
})




