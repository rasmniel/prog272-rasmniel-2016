requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        work: 'javascripts/work',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables',
        renewableByYear: 'javascripts/renewable-by-year',
        renewableByIndex: 'javascripts/renewable-by-index'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});