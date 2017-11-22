Package.describe({
    name: 'slayerokk:adminlte',
    version: '0.0.1',
    summary: 'Includes AdminLTE 2.4.2 to Meteor Project',
    git: 'https://github.com/slayerokk/meteor-adminlte.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use('slayerokk:jquery@0.0.1');
    api.use('slayerokk:bootstrap@0.0.1');
    api.addFiles([
        'adminlte.min.css',
        'skinblue.min.css',
        'adminlte.min.js'
    ], 'client');
});