const nav = document.querySelector(".nav");
        let lastScrollY = window.scrollY;
        
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                // console.log("We are going down");
                nav.classList.add("nav-hidden");
            } else{
                
                nav.classList.remove("nav-hidden");
            }
        
            lastScrollY = window.scrollY;
        });