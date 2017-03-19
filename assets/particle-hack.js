"use strict";



define('particle-hack/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({});
});
define('particle-hack/app', ['exports', 'ember', 'particle-hack/resolver', 'ember-load-initializers', 'particle-hack/config/environment'], function (exports, _ember, _particleHackResolver, _emberLoadInitializers, _particleHackConfigEnvironment) {

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = _ember['default'].Application.extend({
    modulePrefix: _particleHackConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _particleHackConfigEnvironment['default'].podModulePrefix,
    Resolver: _particleHackResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _particleHackConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("particle-hack/breakpoints", ["exports"], function (exports) {
  /**
   * Breakpoint threshold measurements in ems.
   */
  var THRESHOLDS = {
    mobile: 30,
    tablet: 49.125,
    smallDesktop: 64,
    largeDesktop: 90
  };

  /**
   * Breakpoint mapping
   *
   *  - In rendered markup, these are converted to dasherized element classes
   *    and prefaced with "media-".
   *  - In interpolated HTMLBars contexts, these are prefaced with "is",
   *    camelized, and available on the `media` object
   *      - for example, "{{#if media.isMobile}}"
   */
  exports["default"] = {
    mobile: "(max-width: " + THRESHOLDS.mobile + "em)",
    tablet: "(min-width: " + (THRESHOLDS.mobile + 1) + "em) and (max-width: " + THRESHOLDS.tablet + "em)",
    smallDesktop: "(min-width: " + (THRESHOLDS.tablet + 1) + "em) and (max-width: " + THRESHOLDS.smallDesktop + "em)",
    largeDesktop: "(min-width: " + (THRESHOLDS.smallDesktop + 1) + "em)", // AKA "monitor"

    // meta semantic helpers
    greaterThanMobile: "(min-width: " + (THRESHOLDS.mobile + 1) + "em)",
    greaterThanTablet: "(min-width: " + (THRESHOLDS.tablet + 1) + "em)",
    greaterThanSmallDesktop: "(min-width: " + (THRESHOLDS.smallDesktop + 1) + "em)",
    greaterThanLargeDesktop: "(min-width: " + (THRESHOLDS.largeDesktop + 1) + "em)",

    lessThanTablet: "(max-width: " + THRESHOLDS.mobile + "em)",
    lessThanSmallDesktop: "(max-width: " + THRESHOLDS.tablet + "em)",
    lessThanLargeDesktop: "(max-width: " + THRESHOLDS.smallDesktop + "em)"
  };
});
define("particle-hack/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('particle-hack/components/divider-dots', ['exports', 'ember-component', 'ember-computed', 'ember-metal/get'], function (exports, _emberComponent, _emberComputed, _emberMetalGet) {
  exports['default'] = _emberComponent['default'].extend({
    tagName: 'svg',
    attributeBindings: ['viewBox', 'fill'],

    fill: 'currentColor',
    dotGapSize: 50,
    dotRadius: 10,
    numDots: 3,

    viewBoxLength: (0, _emberComputed['default'])('dotGapSize', 'numDots', 'dotRadius', {
      get: function get() {
        var numDots = (0, _emberMetalGet['default'])(this, 'numDots');
        var dotGapSize = (0, _emberMetalGet['default'])(this, 'dotGapSize');
        var dotRadius = (0, _emberMetalGet['default'])(this, 'dotRadius');

        return dotGapSize * (numDots - 1) + dotRadius * (numDots - 1);
      }
    }),

    viewBox: (0, _emberComputed['default'])('viewBoxLength', 'dotRadius', {
      get: function get() {
        var viewBoxLength = (0, _emberMetalGet['default'])(this, 'viewBoxLength');
        var dotRadius = (0, _emberMetalGet['default'])(this, 'dotRadius');

        return '0 0 ' + viewBoxLength + ' ' + dotRadius * 2;
      }
    }),

    dots: (0, _emberComputed['default'])('viewBox', {
      get: function get() {
        var numDots = (0, _emberMetalGet['default'])(this, 'numDots');
        var dotGapSize = (0, _emberMetalGet['default'])(this, 'dotGapSize');
        var dotRadius = (0, _emberMetalGet['default'])(this, 'dotRadius');

        return Array.from({ length: numDots }, function (item, idx) {
          return {
            cx: dotRadius + idx * dotGapSize,
            cy: dotRadius,
            radius: dotRadius
          };
        });
      }
    })
  });
});
define("particle-hack/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('particle-hack/components/link-badge', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'a',
    attributeBindings: ['url:href', 'target'],

    classNames: ['c-link-badge', 'u-p-inset-squish', 'o-grid', 'o-grid--align-middle', 'g-link-reset'],

    target: '_blank',

    url: '',
    title: ''
  });
});
define("particle-hack/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("particle-hack/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("particle-hack/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("particle-hack/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("particle-hack/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("particle-hack/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("particle-hack/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('particle-hack/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("particle-hack/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("particle-hack/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('particle-hack/components/project-card', ['exports', 'ember-component', 'ember-service/inject'], function (exports, _emberComponent, _emberServiceInject) {
  exports['default'] = _emberComponent['default'].extend({
    hook: 'project-card',
    mediaService: (0, _emberServiceInject['default'])('media'),
    classNames: ['c-project-card', 'u-relative', 'u-overflow-hide'],
    classNameBindings: ['mediaService.classNames'],

    project: null
  });
});
define('particle-hack/components/svg-icon', ['exports', 'ember-component', 'ember-computed', 'ember-metal/get', 'particle-hack/templates/components/svg-icon', 'particle-hack/config/environment'], function (exports, _emberComponent, _emberComputed, _emberMetalGet, _particleHackTemplatesComponentsSvgIcon, _particleHackConfigEnvironment) {
  var rootURL = _particleHackConfigEnvironment['default'].rootURL;

  var ICON_PATH_PREFIX = rootURL + 'assets/icons.svg#';

  exports['default'] = _emberComponent['default'].extend({
    layout: _particleHackTemplatesComponentsSvgIcon['default'],
    tagName: 'svg',
    attributeBindings: ['id', 'aria-hidden', 'version', 'viewBox', 'xmlns', 'xmlnsXlink:xmlns:xlink', // special syntax for namespaced attributes (https://github.com/emberjs/ember.js/pull/10186#discussion_r22911832)
    'x', 'y', 'width', 'height', 'stroke', 'stroke-width', 'fill', 'preserveAspectRatio', 'style'],

    classNames: ['c-svg-icon'],

    /* ------------------- API ------------------- */
    version: '1.1',
    'aria-hidden': 'true', // @see: https://github.com/WebDevStudios/wd_s/issues/168
    width: '1em',
    height: '1em',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    stroke: 'none',
    fill: 'none',
    'stroke-width': '0.19em',

    fileName: '',

    /* ------------------- COMPUTED ------------------- */

    filePath: (0, _emberComputed['default'])('fileName', {
      get: function get() {
        return '' + ICON_PATH_PREFIX + (0, _emberMetalGet['default'])(this, 'fileName');
      }
    })
  });
});
define('particle-hack/components/x-navbar', ['exports', 'ember-component'], function (exports, _emberComponent) {
  exports['default'] = _emberComponent['default'].extend({
    classNames: ['c-navbar', 'o-content-box', 'u-fixed', 'u-fill-width']
  });
});
define('particle-hack/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/app-version', ['exports', 'ember', 'particle-hack/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _particleHackConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _particleHackConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('particle-hack/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('particle-hack/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _emberComposableHelpersHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray['default'];
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray.array;
    }
  });
});
define('particle-hack/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('particle-hack/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('particle-hack/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('particle-hack/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('particle-hack/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('particle-hack/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('particle-hack/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('particle-hack/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('particle-hack/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('particle-hack/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('particle-hack/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('particle-hack/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('particle-hack/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('particle-hack/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('particle-hack/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('particle-hack/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('particle-hack/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('particle-hack/helpers/hook', ['exports', 'ember-hook/helpers/hook'], function (exports, _emberHookHelpersHook) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook['default'];
    }
  });
  Object.defineProperty(exports, 'hook', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook.hook;
    }
  });
});
define('particle-hack/helpers/html-safe', ['exports', 'ember-composable-helpers/helpers/html-safe'], function (exports, _emberComposableHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('particle-hack/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('particle-hack/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('particle-hack/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('particle-hack/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('particle-hack/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('particle-hack/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('particle-hack/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('particle-hack/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('particle-hack/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('particle-hack/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('particle-hack/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('particle-hack/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('particle-hack/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('particle-hack/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('particle-hack/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('particle-hack/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('particle-hack/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('particle-hack/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('particle-hack/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('particle-hack/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('particle-hack/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('particle-hack/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('particle-hack/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('particle-hack/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('particle-hack/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('particle-hack/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('particle-hack/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('particle-hack/helpers/titleize', ['exports', 'ember-composable-helpers/helpers/titleize'], function (exports, _emberComposableHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize.titleize;
    }
  });
});
define('particle-hack/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('particle-hack/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('particle-hack/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('particle-hack/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('particle-hack/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('particle-hack/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('particle-hack/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('particle-hack/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('particle-hack/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'particle-hack/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _particleHackConfigEnvironment) {
  var _config$APP = _particleHackConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('particle-hack/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('particle-hack/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('particle-hack/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'particle-hack/config/environment', 'particle-hack/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _emberCliMirageUtilsReadModules, _particleHackConfigEnvironment, _particleHackMirageConfig, _emberCliMirageServer, _lodashAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_particleHackConfigEnvironment['default'].environment, _particleHackConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_particleHackConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _particleHackConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashAssign['default'])(modules, { environment: environment, baseConfig: _particleHackMirageConfig['default'], testConfig: _particleHackMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('particle-hack/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('particle-hack/initializers/ember-hook/initialize', ['exports', 'ember-hook/initializers/ember-hook/initialize'], function (exports, _emberHookInitializersEmberHookInitialize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersEmberHookInitialize['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersEmberHookInitialize.initialize;
    }
  });
});
define('particle-hack/initializers/export-application-global', ['exports', 'ember', 'particle-hack/config/environment'], function (exports, _ember, _particleHackConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_particleHackConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _particleHackConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_particleHackConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('particle-hack/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("particle-hack/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('particle-hack/initializers/responsive', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _emberResponsiveInitializersResponsive) {

  /**
   * Ember responsive initializer
   *
   * Supports auto injecting media service app-wide.
   *
   * Generated by the ember-responsive addon. Customize initialize to change
   * injection.
   */

  exports['default'] = {
    name: 'responsive',
    initialize: _emberResponsiveInitializersResponsive.initialize
  };
});
define('particle-hack/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('particle-hack/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('particle-hack/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("particle-hack/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('particle-hack/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    this.urlPrefix = ''; // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = ''; // make this `api`, for example, if your API is namespaced
    this.timing = 400; // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */
    this.get('/projects');
    this.get('/projects/:id');
  };
});
define('particle-hack/mirage/fixtures/project', ['exports', 'particle-hack/config/environment'], function (exports, _particleHackConfigEnvironment) {
  var rootURL = _particleHackConfigEnvironment['default'].rootURL;
  exports['default'] = [{
    title: '$100 Muon Detector',
    imageURL: rootURL + 'assets/img/muon-detector.png',
    projectLinks: [{ title: 'Cornell Project Page', url: 'https://arxiv.org/abs/1606.01196' }],
    socialLinks: [],
    copy: '<p>Muons, the heavier cousins of the electron are\n    pretty common particles in nature, especially from\n    cosmic rays, but also often used in the detection of\n    neutrinos and other particles. However, muon\n    detectors have traditionally been a complex piece of\n    machinery to manufacture. This design shows how to make\n    your own desktop muon detector for about 100 USD.</p>'
  }, {
    title: 'Simplest Particle Detector',
    imageURL: rootURL + 'assets/img/diy-particle-detector.png',
    projectLinks: [{ title: 'Tutorial Homepage', url: 'https://blogs.scientificamerican.com/critical-opalescence/how-to-build-the-worlds-simplest-particle-detector/' }],
    socialLinks: [],
    copy: '<p>If this is your first time building a particle detector of any kind, you might want to try a simple cloud chamber,\n    made using readily available equipment. It will show traces of passing cosmic rays, or decay particles from radioactive sources,\n    as think white streaks of cloud inside the chamber. Then, when you have the idea, you can work your way up to a more\n    <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.particlehack.org/portfolio/cloud-chamber/" target="_blank">advanced cloud chamber</a> project.</p>'
  }, {
    title: 'CRAYFIS Cosmic Ray Detection',
    imageURL: rootURL + 'assets/img/crayfis-cosmic-ray-detection.png',
    projectLinks: [{ title: 'CRAYFIS Homepage', url: 'https://crayfis.io/' }],
    socialLinks: [],
    copy: '<p>Cosmic rays are hitting the Earth’s atmosphere all the time and creating showers of charged particles\n    that rain down on us. The most energetic cosmic rays create vast showers spread over huge distances.\n    The CRAYFIS project uses your cell phone when it is asleep to detect the charged particles from cosmic\n    ray showers and piece together global maps of cosmic ray activity.</p>'
  }, {
    title: 'Build a Cyclotron',
    imageURL: rootURL + 'assets/img/diy-cyclotron.png',
    projectLinks: [{ title: 'Cyclotrons.net Forum Discussion', url: 'https://www.cyclotrons.net/showthread.php/31-quot-I-want-to-build-a-cyclotron-for-my-science-fair-project-quot' }, { title: 'The Cyclotron Kids Project', url: 'https://thecyclotronkids.org/' }],
    socialLinks: [],
    copy: '<p>If you’re getting really serious about building your own particle accelerator, a\n    cyclotron might be the way to go. But beware, you need time and commitment to see it through.\n    Finding detailed documentation for how to build a cyclotron is challenging because in practice,\n    building one is a series of compromises based around an original idea. You’ll need to learn the physics\n    concepts reasonably well to get the whole thing operational. However, read the links below, and you’ll start to\n    get a sense for what you have to do. And remember that the Cyclotron Kids did it!</p>'
  }, {
    title: 'Ping-pong Ball Accelerator',
    imageURL: rootURL + 'assets/img/diy-particle-detector.png',
    projectLinks: [{ title: 'Tutorial: Instructables', url: 'https://www.instructables.com/id/How-to-make-a-macro-particle-accelerator/' }, { title: 'Tutorial: Explore Your Universe', url: 'https://www.exploreyouruniverse.org/how-to-build-and-use-the-salad-bowl-particle-accelerator/' }, { title: 'Tutorial: Rimstar', url: 'https://rimstar.org/science_electronics_projects/ball_cyclotron_electrostatic_accelerator.htm' }],
    socialLinks: [],
    copy: '<p>The simplest version of particle acceleration involves the simple alternating pushing and pulling of\n    particles by electromagnetic fields. One way to show this on the macro scale is to\n    accelerate a ping pong ball around a glass bowl by using conductive tape to provide the pushes and pulls.\n    There are a series of designs available, some of which use van de Graaf generators to provide the strong\n    electric fields, while others use electrical transformers. Have a look at some of the options\n    linked below before deciding which version suits you best.</p>'
  }, {
    title: 'Kaggle Competitions',
    imageURL: rootURL + 'assets/img/kaggle-screenshot.png',
    projectLinks: [{ title: 'Kaggle Homepage', url: 'https://www.kaggle.com/' }],
    socialLinks: [{ label: 'Kaggle on Twitter', iconFileName: 'icon-twitter-logo', url: 'https://www.twitter.com/kaggle' }, { label: 'Kaggle on Facebook', iconFileName: 'icon-facebook-logo-f', url: 'https://www.twitter.com/kaggle' }, { label: 'Kaggle on GitHub', iconFileName: 'icon-github-logo-mark', url: 'https://github.com/Kaggle' }],
    copy: '<p>For the more advanced coders among you, Kaggle offers occasional particle-physics-themed\n    challenges in which you can win money for the best solutions to the problems on offer.\n    Past challenges have included <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.kaggle.com/c/higgs-boson">using ATLAS data to find the Higgs Boson</a>\n    and <a class="c-markup-link o-color-shifting o-underline-shifting" href="https://www.kaggle.com/c/flavours-of-physics"> using LHCb data to look for signs of new physics</a>.\n    Most winning solutions tend to use convolutional neural networks\n    plus a combination of other ideas, but you often don’t need to know much of the physics involved.\n    Learning it is just a fun bonus!</p>'
  }, {
    title: 'Particle Physics Playground',
    imageURL: rootURL + 'assets/img/cern-lhc.png',
    projectLinks: [{ title: 'P^3 Homepage', url: 'https://particle-physics-playground.github.io/' }],
    socialLinks: [{ label: 'Particle Physics Playground on GitHub', iconFileName: 'icon-github-logo-mark', url: 'https://github.com/particle-physics-playground/playground' }],
    copy: '<p>Want to get your hands on real particle physics data from the\n    Large Hadron Collider? Here is a place you can go to get the data,\n    learn how to interact with it, and potentially even make your own\n    discoveries. The site has tutorials and exercises to get you started,\n    based on open github code repositories and iPython notebooks.</p>'
  }, {
    title: 'LHC@home',
    imageURL: rootURL + 'assets/img/lhc-at-home.png',
    projectLinks: [{ title: 'LHC@home Website', url: 'https://lhcathome.web.cern.ch/' }],
    socialLinks: [],
    copy: '<p>If you have some spare idle time available on your compute, why not\n    donate it to help find new particles, improve the operation of particle\n    collider beams, or simulate physics to help improve theoretical understanding\n    of the universe. LHC@home uses your unused background computing cycles\n    to perform these calculations as part of a large distributed computing\n    effort aimed at a series of projects.</p>'
  }, {
    title: 'Cloud Chamber',
    imageURL: 'assets/img/cloud-chamber-particle-detector.png',
    projectLinks: [{ title: 'Tutorial: Instructables', url: 'https://www.instructables.com/id/Cloud-Chamber-Particle-Detector/' }],
    socialLinks: [],
    copy: '<p>If you’ve ever wanted to see subatomic particles, this is\n    your chance! Using a few hundred dollars worth of equipment,\n    you can build a high-quality miniature cloud chamber that shows\n    passing subatomic particles from either cosmic rays or a\n    radioactive source as streaks of cloud inside the chamber.\n    Developed by Siena College faculty and students over a series of\n    Science Hack Day events and other workshops, the design continues\n    to iterate toward an easier build that more reliable with better results.\n    The team welcomes ideas for how to improve the system as well!</p>'
  }];
});
define('particle-hack/mirage/models/project', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define("particle-hack/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
    server.loadFixtures();
  };
});
define('particle-hack/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('particle-hack/models/project', ['exports', 'ember-data', 'ember-computed'], function (exports, _emberData, _emberComputed) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend({
    title: attr('string'),
    imageURL: attr('string'),
    projectLinks: attr('array'),
    socialLinks: attr('array'),

    // 📋 TODO: HTMLSafe?
    copy: attr('string'),

    hasSocialLinks: (0, _emberComputed.notEmpty)('socialLinks')
  });
});
define('particle-hack/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('particle-hack/router', ['exports', 'ember', 'particle-hack/config/environment'], function (exports, _ember, _particleHackConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _particleHackConfigEnvironment['default'].locationType,
    rootURL: _particleHackConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('projects', { path: '/' });
    // this.route('projects', { path: '/' }, function () {
    //   this.route('project', { path: '/:project_id' });
    // });

    this.route('project', { path: '/project/:project_id' });

    this.route('about');
  });

  exports['default'] = Router;
});
define('particle-hack/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('particle-hack/routes/project', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({
    activate: function activate() {
      window.scrollTo(0, 0);
    }
  });
});
define('particle-hack/routes/projects', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({
    model: function model() {
      return this.store.findAll('project');
    }
  });
});
define('particle-hack/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("particle-hack/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('particle-hack/services/media', ['exports', 'ember-responsive/media'], function (exports, _emberResponsiveMedia) {
  exports['default'] = _emberResponsiveMedia['default'];
});
define('particle-hack/services/navbar', ['exports', 'ember-service'], function (exports, _emberService) {
  exports['default'] = _emberService['default'].extend({});
});
define("particle-hack/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VvPk8NKX", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"p-about o-article-frame u-fill\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"header\",[]],[\"static-attr\",\"class\",\"u-mt3 u-mb3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"p-about__headline u-text-center\"],[\"flush-element\"],[\"text\",\"About Particle Hack\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"u-pl3 u-pr3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      Particle physics, usually thought of as the domain of multi-million or -billion dollar\\n      accelerators and detectors, has a more approachable side. You can join in the search\\n      for a better understanding of the fundamental details of the universe in a variety of ways.\\n      particlehack.org is designed simply as a directory of ways you can participate in particle\\n      physics, from simple experiments to do at home, through to more complex data analysis\\n      challenges in which you can take part.\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      particlehack.org is a volunteer-run site curated by David Harris, a physicist, journalist,\\n      and artist who was previously founding editor-in-chief of Symmetry magazine, an\\n      international particle physics magazine.\\n      Any suggestions you have for entries to be included on the site should be\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"c-markup-link o-color-shifting o-underline-shifting\"],[\"static-attr\",\"href\",\"mailto:physicsdavid@gmail.com\"],[\"flush-element\"],[\"text\",\"emailed\"],[\"close-element\"],[\"text\",\" to him.\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      particlehack.org is based on the idea of\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"c-markup-link o-color-shifting o-underline-shifting\"],[\"static-attr\",\"href\",\"https://www.spacehack.org\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"Spacehack\"],[\"close-element\"],[\"text\",\"\\n      by Ariel Waldman and Lisa Ballard.\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/about.hbs" } });
});
define("particle-hack/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8jIQ2i+7", "block": "{\"statements\":[[\"open-element\",\"header\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"x-navbar\"],null,[[\"class\"],[[\"helper\",[\"concat\"],[\"c-application__navbar \",\"u-z1 \",[\"get\",[\"media\",\"classNames\"]]],null]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"main\",[]],[\"dynamic-attr\",\"class\",[\"helper\",[\"concat\"],[\"c-application__main-content \",\"u-relative \",\"u-fill \",\"u-z0 \",[\"helper\",[\"if\"],[[\"get\",[\"media\",\"isMobile\"]],\"u-ml0 u-mr0 u-pl0 u-pr0 \"],null],[\"get\",[\"media\",\"classNames\"]]],null],null],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"liquid-outlet\"],null,[[\"class\"],[\"u-full-bleed u-overflow-auto\"]]],false],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/application.hbs" } });
});
define("particle-hack/templates/components/divider-dots", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FfezSHCm", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"dots\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"circle\",[]],[\"dynamic-attr\",\"cx\",[\"concat\",[[\"unknown\",[\"dot\",\"cx\"]]]]],[\"dynamic-attr\",\"cy\",[\"concat\",[[\"unknown\",[\"dot\",\"cy\"]]]]],[\"dynamic-attr\",\"r\",[\"concat\",[[\"unknown\",[\"dot\",\"radius\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"dot\"]}],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/components/divider-dots.hbs" } });
});
define("particle-hack/templates/components/link-badge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+z+S53m8", "block": "{\"statements\":[[\"append\",[\"helper\",[\"svg-icon\"],null,[[\"class\",\"fileName\",\"stroke\"],[\"c-link-badge__icon u-mr1\",\"icon-atomic-rings\",\"currentColor\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"o-grid-cell\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/components/link-badge.hbs" } });
});
define("particle-hack/templates/components/project-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lnsDRgJo", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"project\",[\"get\",[\"project\",\"id\"]]],[[\"class\"],[\"c-project-card__content-wrapper\\n         u-block\\n         u-relative\\n         u-fill-width\\n         g-link-reset\"]],0],[\"text\",\"\\n\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"c-project-card__image-section\\n          u-relative\\n          u-block\\n          u-fill-width\\n          u-z1\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"o-aspect-ratio-placeholder--grid-tile\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"c-project-card__image\\n            u-absolute\\n            u-edge-top\\n            u-edge-left\\n            u-fill\\n            u-fit-cover\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"project\",\"imageURL\"]]]]],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"unknown\",[\"project\",\"title\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"c-project-card__meta-section\\n          u-relative\\n          u-fill-width\\n          u-text-center\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"c-project-card__title u-mt1 u-mb1 g-truncate u-inline-block\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"project\",\"title\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/components/project-card.hbs" } });
});
define("particle-hack/templates/components/svg-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "z6VQWW3B", "block": "{\"statements\":[[\"open-element\",\"use\",[]],[\"dynamic-attr\",\"xlink:href\",[\"concat\",[[\"unknown\",[\"filePath\"]]]],\"http://www.w3.org/1999/xlink\"],[\"flush-element\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/components/svg-icon.hbs" } });
});
define("particle-hack/templates/components/x-navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2TBvSmv3", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"u-fill-height o-page-frame\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"o-grid o-grid--align-middle u-fill g-font-alt\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"o-grid-cell g-link-reset\"]],1],[\"text\",\"\\n    \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"o-grid-cell u-ml-auto\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"g-list-reset\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"about\"],[[\"class\"],[\"c-navbar__nav-link\\n                   g-link-reset\\n                   g-caps\\n                   o-color-shifting\\n                   o-underline-shifting\"]],0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"            About\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n      \"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"o-grid o-grid--align-middle\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"svg-icon\"],null,[[\"class\",\"fileName\"],[\"o-grid-cell u-mr2\",\"icon-atomic-rings--nucleus\"]]],false],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"o-grid-cell\"],[\"flush-element\"],[\"text\",\"Particle Hack\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/components/x-navbar.hbs" } });
});
define("particle-hack/templates/project", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "R5lrxMIU", "block": "{\"statements\":[[\"open-element\",\"article\",[]],[\"static-attr\",\"class\",\"p-project c-page u-relative u-fill-width\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"header\",[]],[\"static-attr\",\"class\",\"p-project__image-header u-relative u-mb3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"o-aspect-ratio-placeholder--details-header\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"u-absolute u-edge-top u-edge-bottom u-fill u-fit-cover\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"model\",\"imageURL\"]]]]],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"unknown\",[\"model\",\"title\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"p-project__body-content o-article-frame u-pl3 u-pr3\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"    \"],[\"open-element\",\"header\",[]],[\"static-attr\",\"class\",\"o-grid o-grid--align-middle u-mb3\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"static-attr\",\"class\",\"o-grid-cell u-mr-auto u-pr2\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"ul\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"concat\"],[\"o-grid-cell \",\"g-list-reset \",[\"helper\",[\"if\"],[[\"helper\",[\"gt\"],[[\"get\",[\"model\",\"projectLinks\",\"length\"]],1],null],\"o-grid-cell-12 o-grid o-grid--fill\"],null]],null]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"projectLinks\"]]],null,2],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"u-mb3\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"html-safe\"],[[\"get\",[\"model\",\"copy\"]]],null],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"socialLinks\",\"length\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"o-grid-cell\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"p-project__social-link\\n                        o-tap-target--md\\n                        o-grid\\n                        o-grid--align-center\\n                        o-grid--align-middle\\n                        o-color-shifting\"],[\"dynamic-attr\",\"href\",[\"unknown\",[\"link\",\"url\"]],null],[\"static-attr\",\"target\",\"_blank\"],[\"dynamic-attr\",\"aria-label\",[\"unknown\",[\"link\",\"label\"]],null],[\"flush-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"svg-icon\"],null,[[\"fileName\",\"fill\",\"width\",\"height\"],[[\"get\",[\"link\",\"iconFileName\"]],\"currentColor\",\"100%\",\"100%\"]]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"link\"]},{\"statements\":[[\"text\",\"\\n      \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"u-mb3\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"divider-dots\"],null,[[\"class\"],[\"c-page__divider-dots\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"footer\",[]],[\"static-attr\",\"class\",\"u-pb4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"u-mb2\"],[\"flush-element\"],[\"text\",\"Social Links\"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"o-grid o-grid--align-middle o-grid--guttered-lg g-list-reset\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"socialLinks\"]]],null,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"li\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"if\"],[[\"helper\",[\"gt\"],[[\"get\",[\"model\",\"projectLinks\",\"length\"]],1],null],\"o-grid-cell u-mb1 u-flex\"],null]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"link-badge\"],null,[[\"class\",\"url\",\"title\"],[\"p-project__link-badge o-color-shifting g-font-700\",[\"get\",[\"projectLink\",\"url\"]],[\"get\",[\"projectLink\",\"title\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"projectLink\"]}],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/project.hbs" } });
});
define("particle-hack/templates/projects", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TMGzoE7S", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"p-projects u-relative o-page-frame u-mt3\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"p-projects__projects-grid\\n             o-grid\\n             o-grid--align-center\\n             o-grid--guttered\\n             o-grid--fill\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"project-card\"],null,[[\"tagName\",\"class\",\"project\"],[\"li\",\"p-projects__project-card o-grid-cell u-pt1 u-pr1 u-pl1\",[\"get\",[\"project\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"project\",\"idx\"]}],\"hasPartials\":false}", "meta": { "moduleName": "particle-hack/templates/projects.hbs" } });
});
define('particle-hack/tests/mirage/mirage/config.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/config.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/mirage/mirage/fixtures/project.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/fixtures/project.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/project.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/mirage/mirage/models/project.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/models/project.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/project.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/mirage/mirage/scenarios/default.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/scenarios/default.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint.\n');
  });
});
define('particle-hack/tests/mirage/mirage/serializers/application.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - mirage/serializers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint.\n');
  });
});
define('particle-hack/transforms/array', ['exports', 'ember-data', 'ember-array/utils'], function (exports, _emberData, _emberArrayUtils) {
  var Transform = _emberData['default'].Transform;
  exports['default'] = Transform.extend({
    deserialize: function deserialize(serialized) {
      return (0, _emberArrayUtils.isEmberArray)(serialized) ? serialized : (0, _emberArrayUtils.A)(serialized);
    },

    serialize: function serialize(deserialized) {
      return (0, _emberArrayUtils.isEmberArray)(deserialized) ? deserialized : (0, _emberArrayUtils.A)(deserialized);
    }
  });
});
define('particle-hack/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.fromRoute('projects'), this.toRoute('project'), this.use('toLeft'), this.reverse('toRight'));

    this.transition(this.fromRoute('projects'), this.toRoute('about'), this.use('toLeft'), this.reverse('toRight'));
  };
});
define('particle-hack/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('particle-hack/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('particle-hack/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('particle-hack/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('particle-hack/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('particle-hack/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('particle-hack/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('particle-hack/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('particle-hack/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('particle-hack/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('particle-hack/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('particle-hack/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('particle-hack/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('particle-hack/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('particle-hack/utils/titleize', ['exports', 'ember-composable-helpers/utils/titleize'], function (exports, _emberComposableHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersUtilsTitleize['default'];
    }
  });
});


define('particle-hack/config/environment', ['ember'], function(Ember) {
  var prefix = 'particle-hack';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("particle-hack/app")["default"].create({"name":"particle-hack","version":"0.0.0+a22dbbcc"});
}
//# sourceMappingURL=particle-hack.map
