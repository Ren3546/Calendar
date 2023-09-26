//wraps all the code into a function that only runs when the entire page is loaded. 
$(document).ready(function(){
  $(function () {
//event listener for clicking the save buttons beside each time slot
   $("i").click(function() {
    var timeId = this.parentElement.parentElement.id;
    var description = this.parentElement.parentElement.children[1].value;
   });
  });
});
