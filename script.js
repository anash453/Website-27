// https://preview.themeforest.net/item/furnicom-responsive-magento-2-and-19-furniture-theme/full_screen_preview/15798823?_ga=2.187849261.401728789.1739171660-993370187.1728848196
let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 0) { // Adjust the scroll threshold as needed
                navbar.classList.add('fixed');
            } else {
                    navbar.classList.remove('fixed');
            }
            });