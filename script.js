const nav = document.querySelector('nav');
const navToggleBtn = document.querySelector('.nav-toggle');
if (nav != undefined && navToggleBtn != undefined) {
    navToggleBtn.addEventListener(
        'click', function () {
            nav.classList.toggle('on');
            if (nav.classList.contains('on')) {
                navToggleBtn.innerHTML = '<ion-icon name="close-sharp"></ion-icon>';
            } else {
                navToggleBtn.innerHTML = '<ion-icon name="ellipsis-vertical-sharp"></ion-icon>';
            }
        }
    );
}

const calendar = $(".calendar").evoCalendar({
    theme: "Orange Coral"
})

const themeBox = document.querySelectorAll(".theme-box");
themeBox.forEach(function (box) {
    box.addEventListener('click', function (el) {
        let selectedTheme = el.target.dataset.theme;
        calendar.evoCalendar("setTheme", `${selectedTheme}`)
    });
});

const boxesTheme = document.querySelectorAll(".change-theme-wrapper .theme-box");
boxesTheme.forEach(function (box) {
    box.addEventListener("click", function (el) {
        const classTheme = el.target.dataset.class_theme;
        const activeTheme = document.querySelector(".theme-box.active");
        const prevTheme = activeTheme.dataset.class_theme;

        activeTheme.classList.remove("active");
        activeTheme.classList.remove(prevTheme);

        el.target.classList.add(classTheme);
        el.target.classList.add("active");

    });
});

