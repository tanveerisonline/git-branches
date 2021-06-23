function select(id) {
  var element = document.getElementById(id);
  var classAlreadyAdded = element.classList.contains("highlight");
  classAlreadyAdded
    ? element.classList.remove("highlight")
    : element.classList.add("highlight");

  // 1) get class which are already applied to the element
  //2) if highlighted class is in the list remove it otherwise add it
}
