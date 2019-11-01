
function myFunctionLanguage() {
    document.getElementById("myDropdown-language").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-language')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-language");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function myCrypto() {
    document.getElementById("myDropdown-crypto").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-crypto')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-crypto");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdownCrypto");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
