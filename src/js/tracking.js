export default{
    init: () => {
        const tags = document.body.querySelectorAll('.tag');
        for (let k in tags) {
            if (tags.hasOwnProperty(k)) {
                tags[k].addEventListener('click', function () {
                    ga('send', 'event', 'outbound', 'click', tags[k].href, {
                        'transport': 'beacon',
                        'hitCallback': function () {
                            document.location = tags[k].href;
                        }
                    });

                    return false;
                })
            }
        }
    }
}
