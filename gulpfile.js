'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Keyframe names use kebab-case by convention; they are not real CSS modules
// classes, so silence the cosmetic camelCase warnings the sass loader emits.
[/mosai-slide-up/, /mosai-reveal/, /mosai-pop/, /mosai-pulse/].forEach((re) =>
  build.addSuppression(re)
);

// Disable the new (1.21) fast-serve incompatible CLI checks where needed.
const getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  const result = getTasks.call(build.rig);
  result.set('serve', result.get('serve-deprecated'));
  return result;
};

build.initialize(require('gulp'));
