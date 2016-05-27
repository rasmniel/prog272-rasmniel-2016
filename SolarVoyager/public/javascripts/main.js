requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables/renewables',
        renewableByYear: 'javascripts/renewables/renewable-by-year',
        renewableByIndex: 'javascripts/renewables/renewable-by-index'
    }
});

requirejs(['jquery'], function($) {
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control.init();
    });
});