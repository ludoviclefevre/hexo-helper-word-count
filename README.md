# hexo-helper-word-count

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-url]][daviddm-image]
[![Code Climate](https://codeclimate.com/github/ludoviclefevre/hexo-helper-word-count/badges/gpa.svg)](https://codeclimate.com/github/ludoviclefevre/hexo-helper-word-count)
[![Codacy Badge](https://www.codacy.com/project/badge/677ecf236ae94c8db11db4a946112cf7)](https://www.codacy.com/app/contact_18/hexo-helper-word-count)

Hexo helper that counts word in a specified text (post content for example).


## Install

``` bash
$ npm install hexo-helper-word-count --save
```

## Usage

In your theme, to count post content words, add:

```html
<%- wordcount(post.content) %>
```

## License

MIT © [Ludovic LEFEVRE](http://www.ludoviclefevre.fr)


[coveralls-image]: https://coveralls.io/repos/ludoviclefevre/hexo-helper-word-count/badge.svg
[coveralls-url]: https://coveralls.io/r/ludoviclefevre/hexo-helper-word-count?branch=master
[travis-url]: https://travis-ci.org/ludoviclefevre/hexo-helper-word-count
[travis-image]: https://travis-ci.org/ludoviclefevre/hexo-helper-word-count.svg?branch=master
[daviddm-url]: https://david-dm.org/ludoviclefevre/hexo-helper-word-count.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ludoviclefevre/hexo-helper-word-count
