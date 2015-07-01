Package.describe({
  name: "stratosphere:lib",
  summary: "Stratosphere Library package",
  version: "1.0.0-alpha2",
  git: "https://github.com/sebakerckhof/stratosphere.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.1.0.2']);

  var packages = [
    'underscore',
    'accounts-password',
    'livedata',
    'http',
    'webapp',
    'standard-app-packages',
    'meteor-platform',
    'package-version-parser',
    'service-configuration',
    //'accounts-oauth',
    //'accounts-meteor-developer',
    'iron:router@1.0.7',
    'sacha:spin@2.0.4',
    'ian:accounts-ui-bootstrap-3@1.2.56',
    'twbs:bootstrap@3.3.4',
    'fourseven:scss@2.1.1',
    'fortawesome:fontawesome@4.3.0',
    'aldeed:simple-schema@1.3.3',
    //'jagi:astronomy@0.10.5',
    //'jagi:astronomy-behaviors@0.6.0',
    //'jagi:astronomy-validators@0.10.7',
    'meteorhacks:search-source@1.3.0',
    'percolate:find-from-publication@0.1.0',
    'tmeasday:publish-counts@0.3.9',
    'mrt:q@1.0.1',
    'meteorhacks:async@1.0.0'
  ];

  api.imply(packages);

  api.use(packages);

  api.export([
    'Stratosphere'
  ]);

  api.addFiles([
    'lib/core.js'
  ], ['server','client']);

  api.addFiles([
    'server/utils.js'
  ], ['server']);

  Npm.depends({
    "semver-loose":"0.2.0",
    "wrench":"1.5.8",
    "fs-extra":"0.19.0"
  });

});