export default class {
    constructor(ops) {
        this.spotlight = document.getElementById(ops.spotlight);
        this.nav = document.getElementById(ops.nav);

        if (this.spotlight) {
            this.one = this.spotlight.childNodes[1];
            this.two = this.spotlight.childNodes[3];
        }

        this.bound = ops.bound || 50;

        this.bodyRect = document.body.getBoundingClientRect();
        this.navRect = this.nav.getBoundingClientRect();
        this.navOffset = this.navRect.top - this.bodyRect.top;
        this.doFx(0, 0);
    }

    doFx(x, y) {
        if (this.nav) {
            this.nav.className = y > this.navOffset ? 'collapsed' : '';
        }

        if (this.one && this.two) {
            const wave = (y) => this.bound * Math.cos(y);
            this.rotate(this.one, -wave(y / 200));
            this.rotate(this.two, wave(y / 180));
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