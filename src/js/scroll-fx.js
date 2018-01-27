export default class {
    constructor(ops) {
        this.spotlight = document.getElementById(ops.spotlight);
        this.one = this.spotlight.childNodes[1];
        this.two = this.spotlight.childNodes[3];
    }

    doFx(x, y) {
        y = Math.min(y, 75);
        this.rotate(this.one, y - 75);
        this.rotate(this.two, 75 - y);
    }

    rotate(el, deg) {
        let a = 0, b = 0;

        if (deg > 0) {
            a = deg + '%';
        } else {
            b = -deg + '%';
        }

        el.style.msClipPath = 'polygon(0 ' + a + ', 100% ' + b +', 100% 100%, 0% 100%';
        el.style.mozClipPath = 'polygon(0 ' + a + ', 100% ' + b +', 100% 100%, 0% 100%';
        el.style.webkitClipPath = 'polygon(0 ' + a + ', 100% ' + b +', 100% 100%, 0% 100%';
        el.style.clipPath = 'polygon(0 ' + a + ', 100% ' + b +', 100% 100%, 0% 100%'
    }

    mount() {
        let isScrolling = false;
        const context = this;

        window.addEventListener('scroll', () => {
            isScrolling = true;
        });

        setInterval(function () {
            if (isScrolling) {
                isScrolling = false;

                const doc = document.documentElement;
                const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
                const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

                context.doFx(left, top);
            }
        }, 10);
    }
}