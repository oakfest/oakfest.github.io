export default class {
    constructor () {
        const tags = document.body.querySelectorAll('.tag');
        const context = this;

        for (let k in tags) {
            if (tags.hasOwnProperty(k)) {
                tags[k].onclick = function () {
                    context.track(tags[k].href, tags[k].rel ? tags[k].rel : tags[k].href);
                    return false;
                };
            }
        }
    }

    track (url, label) {
        gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': label,
            'transport_type': 'beacon',
            'event_callback': function(){
                document.location = url;
            }
        });
    }
}
