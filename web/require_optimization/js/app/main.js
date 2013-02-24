
requirejs.config({
    paths: {
        jquery: '../_libs/jquery-1.9.1',
        underscore: '../_libs/underscore' 
    }
});

require(['jquery', 'underscore', 'modules/sample/alpha', 'modules/sample/beta', 'modules/sample/gamma'], function ($, _, a, b, g) {
    $(document).ready(function () {
        a.appendTo('body');
        b.appendTo('body');
        g.appendTo('body');
    });

    //alert('hello');
});