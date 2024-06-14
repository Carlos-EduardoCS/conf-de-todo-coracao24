// NAV
const btnMobile = document.getElementById('btn-mobile');

        function toggleMenu(event){
            if (event.type == 'touchstart') event.preventDefault();
            const nav = document.getElementById('nav');
            nav.classList.toggle('active');
            const active = nav.classList.contains('active')
            event.currentTarget.setAttribute('aria-expanded', active);
            if (active) {
            event.currentTarget.setAttribute('aria-label', 'fechar menu');
            } else {
                event.currentTarget.setAttribute('aria-label', 'abrir menu menu');
            }
        }

        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu);

// COUNTDOWN
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const segsEl = document.getElementById("segs");

        const newYears = "2024-07-05T00:00:00";
        
        function countDown() {
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const segs = Math.floor(totalSeconds) % 60;

            daysEl.innerHTML = days;
            hoursEl.innerHTML = formatTime(hours);
            minsEl.innerHTML = formatTime(mins);
            segsEl.innerHTML = formatTime(segs);
        }

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        countDown();

        setInterval(countDown, 1000);

