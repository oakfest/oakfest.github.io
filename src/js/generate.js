
const treeContent = (content, depth) => {
    depth = depth ?? 0;

    if ((typeof content) === 'string') {
        return content;
    }

    if (Array.isArray(content)) {
        let out = "<ul>\n";

        for(let i in content) {
            if (content.hasOwnProperty(i)) {
                out += "\t<li>\n";
                out += treeContent(content[i], depth + 1);
                out += "\t</li>\n"
            }
        }

        return out + "</ul>\n";
    }

    let out = "<ul>\n";

    for (let i in content) {
        if (content.hasOwnProperty(i)) {
            out += "\t<li>\n";
            if (depth === 0) {
                out += "\t\t<h4>" + i + "</h4>\n";

            } else {
                out +=  i;
            }

            out += "\t\t<div>\n";
            out += treeContent(content[i], depth + 1);
            out += '\t\t</div>\n';
            out += "\t</li>\n";
        }
    }

    return out + "</ul>\n";
};


module.exports = {
    treeContent
};