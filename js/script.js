/* =========================================================
   DESIGN 03 — INTERACTIVE STORY INVITATION
   JAVASCRIPT PART 2
   CINEMATIC OPENING EXPERIENCE
   ========================================================= */

const openingScreen = document.getElementById("openingScreen");
const enterInvitation = document.getElementById("enterInvitation");

let invitationOpened = false;

if (openingScreen) {
    document.body.style.overflow = "hidden";

    /* Ganpati reveal happens first */
    setTimeout(function () {
        openingScreen.classList.add("ganpati-ready");
    }, 700);
}

if (enterInvitation && openingScreen) {

    enterInvitation.addEventListener("click", function () {

        if (invitationOpened) return;

        invitationOpened = true;
        enterInvitation.disabled = true;

        /* Start opening transition */
        openingScreen.classList.add("opened");

        setTimeout(function () {

            document.body.style.overflow = "auto";

            const invitation =
                document.getElementById("invitation");

            if (invitation) {
                invitation.classList.add("invitation-visible");
            }

        }, 900);

        setTimeout(function () {
            openingScreen.style.display = "none";
        }, 1500);
    });
}

/* =========================================================
   SMALL PARALLAX EFFECT
   ========================================================= */

if (openingScreen) {

    openingScreen.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);


            const light =
                document.querySelector(".opening-light");

            const particles =
                document.querySelector(".opening-particles");


            if (light) {

                light.style.transform =
                    `translate(
                        calc(-50% + ${x * 20}px),
                        calc(-50% + ${y * 20}px)
                    )`;

            }


            if (particles) {

                particles.style.transform =
                    `translate(
                        ${x * 8}px,
                        ${y * 8}px
                    )`;

            }

        }
    );

}


/* =========================================================
   TOUCH / MOBILE SUPPORT
   ========================================================= */

if (openingScreen) {

    openingScreen.addEventListener(
        "touchmove",
        function (event) {

            const touch =
                event.touches[0];

            if (!touch) return;

            const x =
                (touch.clientX / window.innerWidth - 0.5);

            const y =
                (touch.clientY / window.innerHeight - 0.5);


            const light =
                document.querySelector(".opening-light");


            if (light) {

                light.style.transform =
                    `translate(
                        calc(-50% + ${x * 12}px),
                        calc(-50% + ${y * 12}px)
                    )`;

            }

        },
        { passive: true }
    );

}
/* =========================================================
   DESIGN 03 — CHAPTER 01
   SCROLL REVEAL
   ========================================================= */

const arrivalSection = document.querySelector(".arrival-section");

if (arrivalSection) {

    const arrivalElements = [
        arrivalSection.querySelector(".section-number"),
        arrivalSection.querySelector(".section-kicker"),
        arrivalSection.querySelector("h2"),
        arrivalSection.querySelector(".section-description"),
        arrivalSection.querySelector(".arrival-details")
    ];

    arrivalElements.forEach(function (element) {
        if (element) {
            element.classList.add("scroll-reveal");
        }
    });

    const arrivalObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const elements =
                        entry.target.querySelectorAll(".scroll-reveal");

                    elements.forEach(function (element, index) {

                        setTimeout(function () {
                            element.classList.add("revealed");
                        }, index * 180);

                    });

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.18
        }
    );

    arrivalObserver.observe(arrivalSection);
}
/* =========================================================
   DESIGN 03 — CHAPTER 02
   INTERACTIVE DOOR REVEAL
   ========================================================= */

const familySection = document.querySelector(".family-section");

if (familySection) {

    const familyDoor = familySection.querySelector(".family-door-scene");

    const familyContent = familySection.querySelector(".family-content");

    const familyObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    familySection.classList.add("doors-opening");

                    setTimeout(function () {
                        if (familyContent) {
                            familyContent.classList.add("family-revealed");
                        }
                    }, 650);

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.35
        }
    );

    familyObserver.observe(familySection);
}
/* =========================================================
   DESIGN 03 — CHAPTER 03
   FESTIVAL TIMELINE REVEAL
   ========================================================= */

const festivalSection = document.querySelector(".festival-section");

if (festivalSection) {

    const festivalEvents =
        festivalSection.querySelectorAll(".festival-event");

    const festivalLine =
        festivalSection.querySelector(".timeline-line");

    festivalEvents.forEach(function (event, index) {

        event.classList.add("festival-hidden");

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        setTimeout(function () {
                            event.classList.add("festival-visible");

                            if (festivalLine) {
                                festivalLine.classList.add(
                                    "timeline-active-" + (index + 1)
                                );
                            }

                        }, index * 120);

                        observer.unobserve(event);
                    }

                });

            },
            {
                threshold: 0.45
            }
        );

        observer.observe(event);
    });
}
/* =========================================================
   CHAPTER 04 — LOCATION REVEAL
   ========================================================= */

const locationSection = document.querySelector(".location-section");

if (locationSection) {
    const locationArt = locationSection.querySelector(".location-art");
    const locationDetails = locationSection.querySelector(".location-details");

    const locationElements = [
        locationSection.querySelector(".section-number"),
        locationSection.querySelector(".section-kicker"),
        locationSection.querySelector("h2"),
        locationArt,
        locationDetails
    ];

    locationElements.forEach(function (element) {
        if (element) {
            element.classList.add("location-hidden");
        }
    });

    const revealLocation = function () {
        locationSection.classList.add("location-active");

        locationElements.forEach(function (element, index) {
            if (element) {
                setTimeout(function () {
                    element.classList.add("location-visible");
                }, index * 120);
            }
        });
    };

    const locationObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    revealLocation();
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -5% 0px"
        }
    );

    locationObserver.observe(locationSection);

    /* Mobile safety fallback */
    setTimeout(function () {
        const rect = locationSection.getBoundingClientRect();

        if (
            rect.top < window.innerHeight * 0.9 &&
            rect.bottom > 0
        ) {
            revealLocation();
        }
    }, 1200);
}
/* =========================================================
   FINAL CHAPTER — BLESSING REVEAL
   ========================================================= */

const finalSection = document.querySelector(".final-section");

if (finalSection) {
    const finalElements = [
        finalSection.querySelector(".final-diya"),
        finalSection.querySelector(".final-symbol"),
        finalSection.querySelector(".final-divider"),
        finalSection.querySelector(".final-content p")
    ];

    finalElements.forEach(function (element) {
        if (element) {
            element.classList.add("final-hidden");
        }
    });

    const finalObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {

                    finalSection.classList.add("final-active");

                    finalElements.forEach(function (element, index) {
                        if (element) {
                            setTimeout(function () {
                                element.classList.add("final-visible");
                            }, index * 250);
                        }
                    });

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    finalObserver.observe(finalSection);
}

