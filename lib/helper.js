(function () {
    'use strict';

    var htmlToText = require('html-to-text');
    var wordCount = require('wordcount');

    module.exports = function (content) {
        var options = {
            wordwrap: false,
            ignoreImage: true,
            ignoreHref: true
        };

        var text = htmlToText.fromString(content, options);

        return wordCount(text);
    };
})();
