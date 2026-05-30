/* ==================================
   OPEN LETTER
================================== */

function openLetter() {

    const opening =
        document.getElementById("opening");

    const mainContent =
        document.getElementById("mainContent");

    const music =
        document.getElementById("bgMusic");

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        mainContent.style.display = "block";

        startTyping();

    }, 1000);

    if (music) {

        music.volume = 0.6;

        music.play().catch(() => {

            console.log(
                "Autoplay diblokir browser"
            );

        });

    }

}

/* ==================================
   TYPING LETTER
================================== */

const letterText =

`Selamat ulang tahun Meliana.

Semoga hari ini dipenuhi kebahagiaan,
tawa yang tulus,
dan semua hal baik yang pantas kamu dapatkan.

Terima kasih untuk setiap cerita,
kenangan,
dan momen yang pernah tercipta.

Mungkin waktu terus berjalan,
tetapi doa baik akan selalu menyertaimu.

Semoga impianmu tercapai,
kesehatanmu terjaga,
dan kebahagiaan selalu menemukanmu.

Happy Birthday ❤️`;

function startTyping() {

    const text =
        document.getElementById("typingText");

    let index = 0;

    function type() {

        if (index < letterText.length) {

            text.innerHTML +=
                letterText.charAt(index);

            index++;

            setTimeout(type, 40);
        }

    }

    type();

}

/* ==================================
   PHOTO SLIDESHOW
================================== */

const images = [

    "gendong.jpg",
    "fhotobox.jpg",
    "fhotoduduk.jpg",
    "fhotohijabhitam.jpg",
    "fhotohijabkrem.jpg",
    "rambut.jpg",
    "mata.jpg",
    "warkop.jpg"

];

let currentSlide = 0;

const slideImage =
    document.getElementById("slideImage");

const bgImage =
    document.getElementById("bgImage");

function changeSlide() {

    if (!slideImage || !bgImage)
        return;

    slideImage.style.opacity = "0";

    setTimeout(() => {

        currentSlide++;

        if (currentSlide >= images.length) {

            currentSlide = 0;

        }

        slideImage.src =
            images[currentSlide];

        bgImage.src =
            images[currentSlide];

        slideImage.style.opacity = "1";

    }, 600);

}

if (slideImage && bgImage) {

    slideImage.src = images[0];
    bgImage.src = images[0];

    setInterval(
        changeSlide,
        5000
    );

}

/* ==================================
   HEARTS
================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "heart";

    heart.innerHTML =
        "💖";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15)
        + "px";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(
    createHeart,
    1200
);

/* ==================================
   PETALS
================================== */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

    petal.innerHTML =
        "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (Math.random() * 15 + 15)
        + "px";

    petal.style.animationDuration =
        (Math.random() * 5 + 8)
        + "s";

    document.body.appendChild(
        petal
    );

    setTimeout(() => {

        petal.remove();

    }, 15000);

}

setInterval(
    createPetal,
    250
);

/* ==================================
   STARS
================================== */

for (let i = 0; i < 70; i++) {

    const star =
        document.createElement("div");

    star.className =
        "star";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    document.body.appendChild(
        star
    );

}

/* ==================================
   SPARKLES
================================== */

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.innerHTML =
        "✨";

    sparkle.style.position =
        "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.pointerEvents =
        "none";

    sparkle.style.zIndex =
        "999";

    sparkle.style.fontSize =
        (Math.random() * 10 + 10)
        + "px";

    document.body.appendChild(
        sparkle
    );

    sparkle.animate(

        [
            {
                opacity: 1,
                transform: "scale(1)"
            },

            {
                opacity: 0,
                transform: "scale(2)"
            }
        ],

        {
            duration: 2000
        }

    );

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}

setInterval(
    createSparkle,
    700
);

/* ==================================
   CONFETTI SURPRISE
================================== */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            "🎉";

        confetti.style.position =
            "fixed";

        confetti.style.left =
            "50%";

        confetti.style.top =
            "50%";

        confetti.style.zIndex =
            "9999";

        confetti.style.fontSize =
            (Math.random() * 20 + 15)
            + "px";

        document.body.appendChild(
            confetti
        );

        const x =
            (Math.random() - 0.5)
            * 1000;

        const y =
            (Math.random() - 0.5)
            * 1000;

        confetti.animate(

            [
                {
                    transform:
                        "translate(0,0)"
                },

                {
                    transform:
                        `translate(${x}px, ${y}px)`
                }

            ],

            {
                duration: 2500,
                easing: "ease-out"
            }

        );

        setTimeout(() => {

            confetti.remove();

        }, 2500);

    }

}

/* ==================================
   SURPRISE BUTTON
================================== */

function showSecret() {

    const box =
        document.getElementById(
            "secretBox"
        );

    if (
        box.style.display === "block"
    ) {

        box.style.display =
            "none";

    } else {

        box.style.display =
            "block";

        createConfetti();

    }

}

/* ==================================
   PARALLAX
================================== */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(
                ".hero"
            );

        if (hero) {

            hero.style.transform =
                `translateY(${window.scrollY * 0.15}px)`;

        }

    }
);

/* ==================================
   TITLE ANIMATION
================================== */

const titles = [

    "❤️ Happy Birthday Meliana ❤️",

    "🌸 Untuk Meliana 🌸",

    "✨ Selamat Ulang Tahun ✨"

];

let titleIndex = 0;

setInterval(() => {

    document.title =
        titles[titleIndex];

    titleIndex++;

    if (
        titleIndex >= titles.length
    ) {

        titleIndex = 0;

    }

}, 3000);

/* ==================================
   CONSOLE MESSAGE
================================== */

console.log(`
❤️

Happy Birthday
Meliana Putri Nurhaliza

Semoga selalu bahagia 🌸

❤️
`);