// ======================================
// ACCESSIBLE MOBILE NAVIGATION
// ======================================

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector("#primary-nav");


if (menuButton && navigation) {


    // Open / Close menu

    menuButton.addEventListener("click", function () {

        const isOpen =
            navigation.classList.toggle("open");


        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );


        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close menu after clicking a link

    const navLinks =
        navigation.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Close menu using Escape key

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                menuButton.focus();

            }

        }
    );

}
