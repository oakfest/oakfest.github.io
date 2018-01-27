export default class {
    constructor(ops) {
        this.spotlight = document.getElementById(ops.spotlight);
        this.nav = document.getElementById(ops.nav);

        this.one = this.spotlight.childNodes[1];
        this.two = this.spotlight.childNodes[3];
    }

    doFx(x, y) {
        if (this.nav) {
            this.nav.className = y > 20 ? 'collapsed' : '';
        }

        if (this.one && this.two) {
            const wave = (y) => 75 * Math.sin(y);
            this.rotate(this.one, wave(y / 100) - 75);
            this.rotate(this.two, 75 - wave(y / 90));
        }
    }

    rotate(el, deg) {
        let a = 0, b = 0;

        if (deg > 0) {
            a = deg + '%';
        } else {
            b = -deg + '%';
        }

        el.style.msClipPath = 'polygon(0 ' + a + ', 100% ' + b + ', 100% 100%, 0% 100%';
        el.style.mozClipPath = 'polygon(0 ' + a + ', 100% ' + b + ', 100% 100%, 0% 100%';
        el.style.webkitClipPath = 'polygon(0 ' + a + ', 100% ' + b + ', 100% 100%, 0% 100%';
        el.style.clipPath = 'polygon(0 ' + a + ', 100% ' + b + ', 100% 100%, 0% 100%'
    }

    mount() {
        let isScrolling = false;
        const context = this;

        window.addEventListener('scroll', () => {
            isScrolling = true;
        });

        setInterval(() => {
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