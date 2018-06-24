Package.describe({
    "name": "tritrul:pagination-blaze",
    "summary": "Blaze paginator template for kurounin:pagination package.",
    "version": "1.0.0",
    "git": "https://github.com/tritrul/PaginationBlaze.git"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use([
        "meteor-base",
        "underscore",
        "tritrul:pagination@1.0.0"
    ]);

    api.use([
        "reactive-var",
        "reactive-dict"
    ], "client");

    api.use([
        "templating",
        "blaze"
    ], "client");

    api.addFiles([
        "client/template.html",
        "client/template.js"
    ], "client");
});
