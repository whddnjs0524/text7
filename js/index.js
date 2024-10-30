document.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById("slide");
    const toLeft = () => {
        slide.style.left = "-100%"
        slide.style.transition = "left 1s"

        setTimeout(append, 1000)
    };

    const append = () => {
        slide.append(slide.children[0])
        slide.style.left = 0;
        slide.style.transition = "none"
    };

    setInterval(toLeft, 2800);

    ///////////// 팝업/////////////////

    const notice_li = document.querySelectorAll("#notice li")
    const popup = document.getElementById("popup")
    const popup_btn = document.querySelector("#popup button")
    const ul_a = document.querySelectorAll("#notice ul a");

    // let p = 0;

    // const pop = () => {
    //     if (p == 0) {
    //         popup.classList.add("show")
    //         p = 1;
    //     }
    //     else {
    //         popup.classList.remove("show")
    //         p = 0;
    //     }
    // }


    // notice_li.forEach(i => {
    //     i.children[0].addEventListener("click", pop);

    // });
    // popup_btn.addEventListener("click", pop);

    ul_a.forEach(i => {
        i.addEventListener("click", () => {
            popup.style.display = "block";
        });
    });

    popup.querySelector("button").addEventListener("click", () => {
        popup.style.display = "none";
    });


});//////////////////