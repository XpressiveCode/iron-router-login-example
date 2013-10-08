Router.configure({
    layout: 'layout',
    notFoundTemplate: '404',
    loadingTemplate: 'loading',
    routesUri: '/_routes'
});

Router.map(function(){

    this.resource('clients');

    this.route('root', {
        path: '/',
        controller: 'rootController',
        action: 'index'
    });

    this.route('update', {
        path: '/update',
        controller: 'rootController',
        action: 'update'
    });

    this.route('dashboard', {
        path: '/dashboard',
        controller: 'dashboardController',
        action: 'index'
    });
});