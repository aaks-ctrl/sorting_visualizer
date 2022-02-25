async function bubble() {
  var x = document.getElementById("bars").querySelectorAll(".flex-child");
  var i, j;
  for (i = 0; i < x.length - 1; i++) {
    for (j = 0; j < x.length - i - 1; j++) {
      var h1 = parseInt(x[j].style.height);
      var h2 = parseInt(x[j + 1].style.height);
      if (h1 > h2) {
        x[j].style.background = "red";
        x[j].style.border = "red";
        x[j + 1].style.background = "red";
        x[j+1].style.border = "red";
        await waitforme(delay);
        swap(x[j], x[j + 1]);
        // await waitForme(50);
        x[j].style.background = "yellow";
        x[j].style.border = "yellow";
        x[j + 1].style.background = "yellow";
        x[j + 1].style.border = "yellow";
      }
    }
    x[x.length - i - 1].style.background = "green";
    x[x.length - i - 1].style.border = "green";
  }
  x[0].style.background = "green";
  x[0].style.border = "green";
}
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
