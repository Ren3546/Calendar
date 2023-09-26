//wraps all the code into a function that only runs when the entire page is loaded. 
$(document).ready(function(){
  $(function () {
//event listener for clicking the save buttons beside each time slot
   $("i").click(function() {
    var timeId = this.parentElement.parentElement.id;
    var description = this.parentElement.parentElement.children[1].value;
   });
//saves the description and the time slot to local storage
localStorage.setItem(timeId, description)
  });
});

//loops through each time and compares is to the current time to apply the past, present, or future class. 
for (var i=9; i < 18; i++) {
  var otherHour = document.getElementById(i);
  var currHour = dayjs().format(`[H]`)

    if (otherHour.id == currHour) {
      otherHour.classList.add('present')
    } else if (otherHour.id >= currHour) {
      otherHour.classList.add('future')
    } else {
      otherHour.classList.add('past')
    }
}