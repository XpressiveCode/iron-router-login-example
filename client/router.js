Router.configure({
    layout: 'layout',
    notFoundTemplate: '404',
    loadingTemplate: 'loading'
});

Router.map(function(){
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