'use strict';

define('particle-hack/tests/acceptance/projects-test', ['exports', 'qunit', 'particle-hack/tests/helpers/module-for-acceptance', 'ember-hook'], function (exports, _qunit, _particleHackTestsHelpersModuleForAcceptance, _emberHook) {

  var expected = undefined;
  var actual = undefined;
  var message = undefined;

  (0, _particleHackTestsHelpersModuleForAcceptance['default'])('Acceptance | homepage');

  (0, _qunit.test)('visiting /', function callee$0$0(assert) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return regeneratorRuntime.awrap(visit('/'));

        case 2:

          message = 'the root URL is preserved at its index route';
          expected = '/';
          actual = currentURL();

          assert.equal(actual, expected, message);

          message = 'the "projects" route is mapped to the rootURL';
          expected = 'projects';
          actual = currentRouteName();

          assert.equal(actual, expected, message);

        case 10:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  });

  (0, _qunit.test)('showing project cards', function callee$0$0(assert) {
    var projectCardElems;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return regeneratorRuntime.awrap(visit('/'));

        case 2:
          projectCardElems = document.querySelectorAll((0, _emberHook.hook)('project-card'));

          expected = server.schema.projects.all().models.length;
          actual = projectCardElems.length;
          message = 'all project cards are shown';

          assert.equal(actual, expected, message);

        case 7:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  });
});
define('particle-hack/tests/acceptance/projects-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - acceptance/projects-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/projects-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/breakpoints.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - breakpoints.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/components/divider-dots.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/divider-dots.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/divider-dots.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/components/link-badge.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/link-badge.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/link-badge.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/components/project-card.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/project-card.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/project-card.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/components/svg-icon.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/svg-icon.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/svg-icon.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/components/x-navbar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/x-navbar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-navbar.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('particle-hack/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'particle-hack/tests/helpers/start-app', 'particle-hack/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _particleHackTestsHelpersStartApp, _particleHackTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _particleHackTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _particleHackTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('particle-hack/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/helpers/resolver', ['exports', 'particle-hack/resolver', 'particle-hack/config/environment'], function (exports, _particleHackResolver, _particleHackConfigEnvironment) {

  var resolver = _particleHackResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _particleHackConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _particleHackConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('particle-hack/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/helpers/responsive', ['exports', 'ember', 'ember-responsive/media'], function (exports, _ember, _emberResponsiveMedia) {
  exports.setBreakpointForIntegrationTest = setBreakpointForIntegrationTest;
  var K = _ember['default'].K;
  var getOwner = _ember['default'].getOwner;
  var classify = _ember['default'].String.classify;

  _emberResponsiveMedia['default'].reopen({
    // Change this if you want a different default breakpoint in tests.
    _defaultBreakpoint: 'desktop',

    _breakpointArr: _ember['default'].computed('breakpoints', function () {
      return Object.keys(this.get('breakpoints')) || _ember['default'].A([]);
    }),

    _forceSetBreakpoint: function _forceSetBreakpoint(breakpoint) {
      var found = false;

      var props = {};
      this.get('_breakpointArr').forEach(function (bp) {
        var val = bp === breakpoint;
        if (val) {
          found = true;
        }

        props['is' + classify(bp)] = val;
      });

      if (found) {
        this.setProperties(props);
      } else {
        throw new Error('You tried to set the breakpoint to ' + breakpoint + ', which is not in your app/breakpoint.js file.');
      }
    },

    match: K, // do not set up listeners in test

    init: function init() {
      this._super.apply(this, arguments);

      this._forceSetBreakpoint(this.get('_defaultBreakpoint'));
    }
  });

  exports['default'] = _ember['default'].Test.registerAsyncHelper('setBreakpoint', function (app, breakpoint) {
    // this should use getOwner once that's supported
    var mediaService = app.__deprecatedInstance__.lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
  });

  function setBreakpointForIntegrationTest(container, breakpoint) {
    var mediaService = getOwner(container).lookup('service:media');
    mediaService._forceSetBreakpoint(breakpoint);
    container.set('media', mediaService);

    return mediaService;
  }
});
define('particle-hack/tests/helpers/responsive.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/responsive.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/responsive.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/helpers/start-app', ['exports', 'ember', 'particle-hack/app', 'particle-hack/config/environment'], function (exports, _ember, _particleHackApp, _particleHackConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _particleHackConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _particleHackApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();

      return application;
    });
  }
});
define('particle-hack/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/initializers/responsive.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - initializers/responsive.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/responsive.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/integration/components/divider-dots-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('divider-dots', 'Integration | Component | divider dots', {
    integration: true
  });

  (0, _emberQunit.skip)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'k8YGOKkX',
      'block': '{"statements":[["append",["unknown",["divider-dots"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'Mr1WN0nf',
      'block': '{"statements":[["text","\\n"],["block",["divider-dots"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
/* , test */
define('particle-hack/tests/integration/components/divider-dots-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/divider-dots-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/divider-dots-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/integration/components/project-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('project-card', 'Integration | Component | project card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'mqQ7dIsX',
      'block': '{"statements":[["append",["unknown",["project-card"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'SIFadNEj',
      'block': '{"statements":[["text","\\n"],["block",["project-card"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('particle-hack/tests/integration/components/project-card-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/project-card-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/project-card-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/models/project.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/project.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/routes/about.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/about.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/routes/project.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/project.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/routes/projects.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/projects.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/services/navbar.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/navbar.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/navbar.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/test-helper', ['exports', 'particle-hack/tests/helpers/resolver', 'ember-qunit'], function (exports, _particleHackTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_particleHackTestsHelpersResolver['default']);
});
define('particle-hack/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/transforms/array.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - transforms/array.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/array.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/transitions.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - transitions.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('particle-hack/tests/unit/adapters/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/models/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('project', 'Unit | Model | project', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('particle-hack/tests/unit/models/project-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/project-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('particle-hack/tests/unit/routes/about-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/about-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/routes/project-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:project', 'Unit | Route | project', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('particle-hack/tests/unit/routes/project-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/project-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/project-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/routes/projects-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('particle-hack/tests/unit/routes/projects-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/projects-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/projects-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/services/navbar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:navbar', 'Unit | Service | navbar', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('particle-hack/tests/unit/services/navbar-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/navbar-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/navbar-test.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/unit/transforms/array-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('transform:array', 'Unit | Transform | array', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('particle-hack/tests/unit/transforms/array-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/transforms/array-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/array-test.js should pass ESLint.\n');
  });
});
require('particle-hack/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
