export default class {
    constructor() {
        const tags = document.body.querySelectorAll('.tag');
        const context = this;

        for (let k in tags) {
            if (tags.hasOwnProperty(k)) {
                const el = tags[k];

                if (el.rel === 'tickets' && el.dataset && el.dataset.onsale === 'false') {
                    console.dir(el);
                    el.onclick = function() {
                        context.track('#', el.rel);
                        const current = el.innerHTML;
                        el.innerHTML = el.dataset.alternate;
                        el.dataset.alternate = current;
                        return false;
                    };

                    continue;
                }

                el.onclick = function () {
                    context.track(el.href, el.rel ? el.rel : el.href);
                    return false;
                };
            }
        }
    }

    track(url, label) {
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': label,
            'transport_type': 'beacon',
            'event_callback': function () {
                if (url !== '#') {
                    document.location = url;
                }
            }
        });
    }
}
