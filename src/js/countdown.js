export default function (endDate, parentId, daysId, hoursId, minutesId, secondsId) {
    const count = document.getElementById(parentId);

    if (count) {
        count.style.display = 'block';
        const daysEl = document.getElementById(daysId);
        const hoursEl = document.getElementById(hoursId);
        const minutesEl = document.getElementById(minutesId);
        const secondsEl = document.getElementById(secondsId);

        const updateCounter = () => {
            const diff = endDate - Date.now();
            const days = Math.floor(diff / (24 * 3600 * 1000));
            const hours = Math.floor((diff - (days * (24 * 3600 * 1000))) / (3600 * 1000));
            const minutes = Math.floor((diff - (hours * (3600 * 1000)) - (days * (24 * 3600 * 1000))) / (60 * 1000));
            const seconds = Math.floor((diff - (hours * (3600 * 1000)) - (days * (24 * 3600 * 1000)) - (minutes * (60 * 1000))) / (1000));

            daysEl.innerText = days + "";
            hoursEl.innerText = hours + "";
            minutesEl.innerText = minutes + "";
            secondsEl.innerText = seconds + "";
        };

        updateCounter();

        setInterval(updateCounter, 1000);
    }
}