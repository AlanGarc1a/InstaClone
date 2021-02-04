let user = document.querySelector('.fa-user-circle');

user.addEventListener('click', function(){
    document.querySelector('.dropdown-content').classList.toggle("show");
});

window.onclick = function(event) {
    if(!event.target.matches('.fa-user-circle'))
    {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) 
            {
              openDropdown.classList.remove('show');
            }
        }
    }
}