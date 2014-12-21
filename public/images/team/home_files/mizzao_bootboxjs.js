//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/mizzao:bootboxjs/lib/bootbox.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
/**                                                                                                              // 1
 * bootbox.js [v4.3.0]                                                                                           // 2
 *                                                                                                               // 3
 * http://bootboxjs.com/license.txt                                                                              // 4
 */                                                                                                              // 5
                                                                                                                 // 6
// @see https://github.com/makeusabrew/bootbox/issues/180                                                        // 7
// @see https://github.com/makeusabrew/bootbox/issues/186                                                        // 8
(function (root, factory) {                                                                                      // 9
                                                                                                                 // 10
  "use strict";                                                                                                  // 11
  if (typeof define === "function" && define.amd) {                                                              // 12
    // AMD. Register as an anonymous module.                                                                     // 13
    define(["jquery"], factory);                                                                                 // 14
  } else if (typeof exports === "object") {                                                                      // 15
    // Node. Does not work with strict CommonJS, but                                                             // 16
    // only CommonJS-like environments that support module.exports,                                              // 17
    // like Node.                                                                                                // 18
    module.exports = factory(require("jquery"));                                                                 // 19
  } else {                                                                                                       // 20
    // Browser globals (root is window)                                                                          // 21
    root.bootbox = factory(root.jQuery);                                                                         // 22
  }                                                                                                              // 23
                                                                                                                 // 24
}(this, function init($, undefined) {                                                                            // 25
                                                                                                                 // 26
  "use strict";                                                                                                  // 27
                                                                                                                 // 28
  // the base DOM structure needed to create a modal                                                             // 29
  var templates = {                                                                                              // 30
    dialog:                                                                                                      // 31
      "<div class='bootbox modal' tabindex='-1' role='dialog'>" +                                                // 32
        "<div class='modal-dialog'>" +                                                                           // 33
          "<div class='modal-content'>" +                                                                        // 34
            "<div class='modal-body'><div class='bootbox-body'></div></div>" +                                   // 35
          "</div>" +                                                                                             // 36
        "</div>" +                                                                                               // 37
      "</div>",                                                                                                  // 38
    header:                                                                                                      // 39
      "<div class='modal-header'>" +                                                                             // 40
        "<h4 class='modal-title'></h4>" +                                                                        // 41
      "</div>",                                                                                                  // 42
    footer:                                                                                                      // 43
      "<div class='modal-footer'></div>",                                                                        // 44
    closeButton:                                                                                                 // 45
      "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
    form:                                                                                                        // 47
      "<form class='bootbox-form'></form>",                                                                      // 48
    inputs: {                                                                                                    // 49
      text:                                                                                                      // 50
        "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",            // 51
      textarea:                                                                                                  // 52
        "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",                       // 53
      email:                                                                                                     // 54
        "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",      // 55
      select:                                                                                                    // 56
        "<select class='bootbox-input bootbox-input-select form-control'></select>",                             // 57
      checkbox:                                                                                                  // 58
        "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
      date:                                                                                                      // 60
        "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",          // 61
      time:                                                                                                      // 62
        "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",          // 63
      number:                                                                                                    // 64
        "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",      // 65
      password:                                                                                                  // 66
        "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />" // 67
    }                                                                                                            // 68
  };                                                                                                             // 69
                                                                                                                 // 70
  var defaults = {                                                                                               // 71
    // default language                                                                                          // 72
    locale: "en",                                                                                                // 73
    // show backdrop or not                                                                                      // 74
    backdrop: true,                                                                                              // 75
    // animate the modal in/out                                                                                  // 76
    animate: true,                                                                                               // 77
    // additional class string applied to the top level dialog                                                   // 78
    className: null,                                                                                             // 79
    // whether or not to include a close button                                                                  // 80
    closeButton: true,                                                                                           // 81
    // show the dialog immediately by default                                                                    // 82
    show: true,                                                                                                  // 83
    // dialog container                                                                                          // 84
    container: "body"                                                                                            // 85
  };                                                                                                             // 86
                                                                                                                 // 87
  // our public object; augmented after our private API                                                          // 88
  var exports = {};                                                                                              // 89
                                                                                                                 // 90
  /**                                                                                                            // 91
   * @private                                                                                                    // 92
   */                                                                                                            // 93
  function _t(key) {                                                                                             // 94
    var locale = locales[defaults.locale];                                                                       // 95
    return locale ? locale[key] : locales.en[key];                                                               // 96
  }                                                                                                              // 97
                                                                                                                 // 98
  function processCallback(e, dialog, callback) {                                                                // 99
    e.stopPropagation();                                                                                         // 100
    e.preventDefault();                                                                                          // 101
                                                                                                                 // 102
    // by default we assume a callback will get rid of the dialog,                                               // 103
    // although it is given the opportunity to override this                                                     // 104
                                                                                                                 // 105
    // so, if the callback can be invoked and it *explicitly returns false*                                      // 106
    // then we'll set a flag to keep the dialog active...                                                        // 107
    var preserveDialog = $.isFunction(callback) && callback(e) === false;                                        // 108
                                                                                                                 // 109
    // ... otherwise we'll bin it                                                                                // 110
    if (!preserveDialog) {                                                                                       // 111
      dialog.modal("hide");                                                                                      // 112
    }                                                                                                            // 113
  }                                                                                                              // 114
                                                                                                                 // 115
  function getKeyLength(obj) {                                                                                   // 116
    // @TODO defer to Object.keys(x).length if available?                                                        // 117
    var k, t = 0;                                                                                                // 118
    for (k in obj) {                                                                                             // 119
      t ++;                                                                                                      // 120
    }                                                                                                            // 121
    return t;                                                                                                    // 122
  }                                                                                                              // 123
                                                                                                                 // 124
  function each(collection, iterator) {                                                                          // 125
    var index = 0;                                                                                               // 126
    $.each(collection, function(key, value) {                                                                    // 127
      iterator(key, value, index++);                                                                             // 128
    });                                                                                                          // 129
  }                                                                                                              // 130
                                                                                                                 // 131
  function sanitize(options) {                                                                                   // 132
    var buttons;                                                                                                 // 133
    var total;                                                                                                   // 134
                                                                                                                 // 135
    if (typeof options !== "object") {                                                                           // 136
      throw new Error("Please supply an object of options");                                                     // 137
    }                                                                                                            // 138
                                                                                                                 // 139
    if (!options.message) {                                                                                      // 140
      throw new Error("Please specify a message");                                                               // 141
    }                                                                                                            // 142
                                                                                                                 // 143
    // make sure any supplied options take precedence over defaults                                              // 144
    options = $.extend({}, defaults, options);                                                                   // 145
                                                                                                                 // 146
    if (!options.buttons) {                                                                                      // 147
      options.buttons = {};                                                                                      // 148
    }                                                                                                            // 149
                                                                                                                 // 150
    // we only support Bootstrap's "static" and false backdrop args                                              // 151
    // supporting true would mean you could dismiss the dialog without                                           // 152
    // explicitly interacting with it                                                                            // 153
    options.backdrop = options.backdrop ? "static" : false;                                                      // 154
                                                                                                                 // 155
    buttons = options.buttons;                                                                                   // 156
                                                                                                                 // 157
    total = getKeyLength(buttons);                                                                               // 158
                                                                                                                 // 159
    each(buttons, function(key, button, index) {                                                                 // 160
                                                                                                                 // 161
      if ($.isFunction(button)) {                                                                                // 162
        // short form, assume value is our callback. Since button                                                // 163
        // isn't an object it isn't a reference either so re-assign it                                           // 164
        button = buttons[key] = {                                                                                // 165
          callback: button                                                                                       // 166
        };                                                                                                       // 167
      }                                                                                                          // 168
                                                                                                                 // 169
      // before any further checks make sure by now button is the correct type                                   // 170
      if ($.type(button) !== "object") {                                                                         // 171
        throw new Error("button with key " + key + " must be an object");                                        // 172
      }                                                                                                          // 173
                                                                                                                 // 174
      if (!button.label) {                                                                                       // 175
        // the lack of an explicit label means we'll assume the key is good enough                               // 176
        button.label = key;                                                                                      // 177
      }                                                                                                          // 178
                                                                                                                 // 179
      if (!button.className) {                                                                                   // 180
        if (total <= 2 && index === total-1) {                                                                   // 181
          // always add a primary to the main option in a two-button dialog                                      // 182
          button.className = "btn-primary";                                                                      // 183
        } else {                                                                                                 // 184
          button.className = "btn-default";                                                                      // 185
        }                                                                                                        // 186
      }                                                                                                          // 187
    });                                                                                                          // 188
                                                                                                                 // 189
    return options;                                                                                              // 190
  }                                                                                                              // 191
                                                                                                                 // 192
  /**                                                                                                            // 193
   * map a flexible set of arguments into a single returned object                                               // 194
   * if args.length is already one just return it, otherwise                                                     // 195
   * use the properties argument to map the unnamed args to                                                      // 196
   * object properties                                                                                           // 197
   * so in the latter case:                                                                                      // 198
   * mapArguments(["foo", $.noop], ["message", "callback"])                                                      // 199
   * -> { message: "foo", callback: $.noop }                                                                     // 200
   */                                                                                                            // 201
  function mapArguments(args, properties) {                                                                      // 202
    var argn = args.length;                                                                                      // 203
    var options = {};                                                                                            // 204
                                                                                                                 // 205
    if (argn < 1 || argn > 2) {                                                                                  // 206
      throw new Error("Invalid argument length");                                                                // 207
    }                                                                                                            // 208
                                                                                                                 // 209
    if (argn === 2 || typeof args[0] === "string") {                                                             // 210
      options[properties[0]] = args[0];                                                                          // 211
      options[properties[1]] = args[1];                                                                          // 212
    } else {                                                                                                     // 213
      options = args[0];                                                                                         // 214
    }                                                                                                            // 215
                                                                                                                 // 216
    return options;                                                                                              // 217
  }                                                                                                              // 218
                                                                                                                 // 219
  /**                                                                                                            // 220
   * merge a set of default dialog options with user supplied arguments                                          // 221
   */                                                                                                            // 222
  function mergeArguments(defaults, args, properties) {                                                          // 223
    return $.extend(                                                                                             // 224
      // deep merge                                                                                              // 225
      true,                                                                                                      // 226
      // ensure the target is an empty, unreferenced object                                                      // 227
      {},                                                                                                        // 228
      // the base options object for this type of dialog (often just buttons)                                    // 229
      defaults,                                                                                                  // 230
      // args could be an object or array; if it's an array properties will                                      // 231
      // map it to a proper options object                                                                       // 232
      mapArguments(                                                                                              // 233
        args,                                                                                                    // 234
        properties                                                                                               // 235
      )                                                                                                          // 236
    );                                                                                                           // 237
  }                                                                                                              // 238
                                                                                                                 // 239
  /**                                                                                                            // 240
   * this entry-level method makes heavy use of composition to take a simple                                     // 241
   * range of inputs and return valid options suitable for passing to bootbox.dialog                             // 242
   */                                                                                                            // 243
  function mergeDialogOptions(className, labels, properties, args) {                                             // 244
    //  build up a base set of dialog properties                                                                 // 245
    var baseOptions = {                                                                                          // 246
      className: "bootbox-" + className,                                                                         // 247
      buttons: createLabels.apply(null, labels)                                                                  // 248
    };                                                                                                           // 249
                                                                                                                 // 250
    // ensure the buttons properties generated, *after* merging                                                  // 251
    // with user args are still valid against the supplied labels                                                // 252
    return validateButtons(                                                                                      // 253
      // merge the generated base properties with user supplied arguments                                        // 254
      mergeArguments(                                                                                            // 255
        baseOptions,                                                                                             // 256
        args,                                                                                                    // 257
        // if args.length > 1, properties specify how each arg maps to an object key                             // 258
        properties                                                                                               // 259
      ),                                                                                                         // 260
      labels                                                                                                     // 261
    );                                                                                                           // 262
  }                                                                                                              // 263
                                                                                                                 // 264
  /**                                                                                                            // 265
   * from a given list of arguments return a suitable object of button labels                                    // 266
   * all this does is normalise the given labels and translate them where possible                               // 267
   * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }                                                    // 268
   */                                                                                                            // 269
  function createLabels() {                                                                                      // 270
    var buttons = {};                                                                                            // 271
                                                                                                                 // 272
    for (var i = 0, j = arguments.length; i < j; i++) {                                                          // 273
      var argument = arguments[i];                                                                               // 274
      var key = argument.toLowerCase();                                                                          // 275
      var value = argument.toUpperCase();                                                                        // 276
                                                                                                                 // 277
      buttons[key] = {                                                                                           // 278
        label: _t(value)                                                                                         // 279
      };                                                                                                         // 280
    }                                                                                                            // 281
                                                                                                                 // 282
    return buttons;                                                                                              // 283
  }                                                                                                              // 284
                                                                                                                 // 285
  function validateButtons(options, buttons) {                                                                   // 286
    var allowedButtons = {};                                                                                     // 287
    each(buttons, function(key, value) {                                                                         // 288
      allowedButtons[value] = true;                                                                              // 289
    });                                                                                                          // 290
                                                                                                                 // 291
    each(options.buttons, function(key) {                                                                        // 292
      if (allowedButtons[key] === undefined) {                                                                   // 293
        throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");       // 294
      }                                                                                                          // 295
    });                                                                                                          // 296
                                                                                                                 // 297
    return options;                                                                                              // 298
  }                                                                                                              // 299
                                                                                                                 // 300
  exports.alert = function() {                                                                                   // 301
    var options;                                                                                                 // 302
                                                                                                                 // 303
    options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);                           // 304
                                                                                                                 // 305
    if (options.callback && !$.isFunction(options.callback)) {                                                   // 306
      throw new Error("alert requires callback property to be a function when provided");                        // 307
    }                                                                                                            // 308
                                                                                                                 // 309
    /**                                                                                                          // 310
     * overrides                                                                                                 // 311
     */                                                                                                          // 312
    options.buttons.ok.callback = options.onEscape = function() {                                                // 313
      if ($.isFunction(options.callback)) {                                                                      // 314
        return options.callback();                                                                               // 315
      }                                                                                                          // 316
      return true;                                                                                               // 317
    };                                                                                                           // 318
                                                                                                                 // 319
    return exports.dialog(options);                                                                              // 320
  };                                                                                                             // 321
                                                                                                                 // 322
  exports.confirm = function() {                                                                                 // 323
    var options;                                                                                                 // 324
                                                                                                                 // 325
    options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);          // 326
                                                                                                                 // 327
    /**                                                                                                          // 328
     * overrides; undo anything the user tried to set they shouldn't have                                        // 329
     */                                                                                                          // 330
    options.buttons.cancel.callback = options.onEscape = function() {                                            // 331
      return options.callback(false);                                                                            // 332
    };                                                                                                           // 333
                                                                                                                 // 334
    options.buttons.confirm.callback = function() {                                                              // 335
      return options.callback(true);                                                                             // 336
    };                                                                                                           // 337
                                                                                                                 // 338
    // confirm specific validation                                                                               // 339
    if (!$.isFunction(options.callback)) {                                                                       // 340
      throw new Error("confirm requires a callback");                                                            // 341
    }                                                                                                            // 342
                                                                                                                 // 343
    return exports.dialog(options);                                                                              // 344
  };                                                                                                             // 345
                                                                                                                 // 346
  exports.prompt = function() {                                                                                  // 347
    var options;                                                                                                 // 348
    var defaults;                                                                                                // 349
    var dialog;                                                                                                  // 350
    var form;                                                                                                    // 351
    var input;                                                                                                   // 352
    var shouldShow;                                                                                              // 353
    var inputOptions;                                                                                            // 354
                                                                                                                 // 355
    // we have to create our form first otherwise                                                                // 356
    // its value is undefined when gearing up our options                                                        // 357
    // @TODO this could be solved by allowing message to                                                         // 358
    // be a function instead...                                                                                  // 359
    form = $(templates.form);                                                                                    // 360
                                                                                                                 // 361
    // prompt defaults are more complex than others in that                                                      // 362
    // users can override more defaults                                                                          // 363
    // @TODO I don't like that prompt has to do a lot of heavy                                                   // 364
    // lifting which mergeDialogOptions can *almost* support already                                             // 365
    // just because of 'value' and 'inputType' - can we refactor?                                                // 366
    defaults = {                                                                                                 // 367
      className: "bootbox-prompt",                                                                               // 368
      buttons: createLabels("cancel", "confirm"),                                                                // 369
      value: "",                                                                                                 // 370
      inputType: "text"                                                                                          // 371
    };                                                                                                           // 372
                                                                                                                 // 373
    options = validateButtons(                                                                                   // 374
      mergeArguments(defaults, arguments, ["title", "callback"]),                                                // 375
      ["cancel", "confirm"]                                                                                      // 376
    );                                                                                                           // 377
                                                                                                                 // 378
    // capture the user's show value; we always set this to false before                                         // 379
    // spawning the dialog to give us a chance to attach some handlers to                                        // 380
    // it, but we need to make sure we respect a preference not to show it                                       // 381
    shouldShow = (options.show === undefined) ? true : options.show;                                             // 382
                                                                                                                 // 383
    /**                                                                                                          // 384
     * overrides; undo anything the user tried to set they shouldn't have                                        // 385
     */                                                                                                          // 386
    options.message = form;                                                                                      // 387
                                                                                                                 // 388
    options.buttons.cancel.callback = options.onEscape = function() {                                            // 389
      return options.callback(null);                                                                             // 390
    };                                                                                                           // 391
                                                                                                                 // 392
    options.buttons.confirm.callback = function() {                                                              // 393
      var value;                                                                                                 // 394
                                                                                                                 // 395
      switch (options.inputType) {                                                                               // 396
        case "text":                                                                                             // 397
        case "textarea":                                                                                         // 398
        case "email":                                                                                            // 399
        case "select":                                                                                           // 400
        case "date":                                                                                             // 401
        case "time":                                                                                             // 402
        case "number":                                                                                           // 403
        case "password":                                                                                         // 404
          value = input.val();                                                                                   // 405
          break;                                                                                                 // 406
                                                                                                                 // 407
        case "checkbox":                                                                                         // 408
          var checkedItems = input.find("input:checked");                                                        // 409
                                                                                                                 // 410
          // we assume that checkboxes are always multiple,                                                      // 411
          // hence we default to an empty array                                                                  // 412
          value = [];                                                                                            // 413
                                                                                                                 // 414
          each(checkedItems, function(_, item) {                                                                 // 415
            value.push($(item).val());                                                                           // 416
          });                                                                                                    // 417
          break;                                                                                                 // 418
      }                                                                                                          // 419
                                                                                                                 // 420
      return options.callback(value);                                                                            // 421
    };                                                                                                           // 422
                                                                                                                 // 423
    options.show = false;                                                                                        // 424
                                                                                                                 // 425
    // prompt specific validation                                                                                // 426
    if (!options.title) {                                                                                        // 427
      throw new Error("prompt requires a title");                                                                // 428
    }                                                                                                            // 429
                                                                                                                 // 430
    if (!$.isFunction(options.callback)) {                                                                       // 431
      throw new Error("prompt requires a callback");                                                             // 432
    }                                                                                                            // 433
                                                                                                                 // 434
    if (!templates.inputs[options.inputType]) {                                                                  // 435
      throw new Error("invalid prompt type");                                                                    // 436
    }                                                                                                            // 437
                                                                                                                 // 438
    // create the input based on the supplied type                                                               // 439
    input = $(templates.inputs[options.inputType]);                                                              // 440
                                                                                                                 // 441
    switch (options.inputType) {                                                                                 // 442
      case "text":                                                                                               // 443
      case "textarea":                                                                                           // 444
      case "email":                                                                                              // 445
      case "date":                                                                                               // 446
      case "time":                                                                                               // 447
      case "number":                                                                                             // 448
      case "password":                                                                                           // 449
        input.val(options.value);                                                                                // 450
        break;                                                                                                   // 451
                                                                                                                 // 452
      case "select":                                                                                             // 453
        var groups = {};                                                                                         // 454
        inputOptions = options.inputOptions || [];                                                               // 455
                                                                                                                 // 456
        if (!inputOptions.length) {                                                                              // 457
          throw new Error("prompt with select requires options");                                                // 458
        }                                                                                                        // 459
                                                                                                                 // 460
        each(inputOptions, function(_, option) {                                                                 // 461
                                                                                                                 // 462
          // assume the element to attach to is the input...                                                     // 463
          var elem = input;                                                                                      // 464
                                                                                                                 // 465
          if (option.value === undefined || option.text === undefined) {                                         // 466
            throw new Error("given options in wrong format");                                                    // 467
          }                                                                                                      // 468
                                                                                                                 // 469
                                                                                                                 // 470
          // ... but override that element if this option sits in a group                                        // 471
                                                                                                                 // 472
          if (option.group) {                                                                                    // 473
            // initialise group if necessary                                                                     // 474
            if (!groups[option.group]) {                                                                         // 475
              groups[option.group] = $("<optgroup/>").attr("label", option.group);                               // 476
            }                                                                                                    // 477
                                                                                                                 // 478
            elem = groups[option.group];                                                                         // 479
          }                                                                                                      // 480
                                                                                                                 // 481
          elem.append("<option value='" + option.value + "'>" + option.text + "</option>");                      // 482
        });                                                                                                      // 483
                                                                                                                 // 484
        each(groups, function(_, group) {                                                                        // 485
          input.append(group);                                                                                   // 486
        });                                                                                                      // 487
                                                                                                                 // 488
        // safe to set a select's value as per a normal input                                                    // 489
        input.val(options.value);                                                                                // 490
        break;                                                                                                   // 491
                                                                                                                 // 492
      case "checkbox":                                                                                           // 493
        var values   = $.isArray(options.value) ? options.value : [options.value];                               // 494
        inputOptions = options.inputOptions || [];                                                               // 495
                                                                                                                 // 496
        if (!inputOptions.length) {                                                                              // 497
          throw new Error("prompt with checkbox requires options");                                              // 498
        }                                                                                                        // 499
                                                                                                                 // 500
        if (!inputOptions[0].value || !inputOptions[0].text) {                                                   // 501
          throw new Error("given options in wrong format");                                                      // 502
        }                                                                                                        // 503
                                                                                                                 // 504
        // checkboxes have to nest within a containing element, so                                               // 505
        // they break the rules a bit and we end up re-assigning                                                 // 506
        // our 'input' element to this container instead                                                         // 507
        input = $("<div/>");                                                                                     // 508
                                                                                                                 // 509
        each(inputOptions, function(_, option) {                                                                 // 510
          var checkbox = $(templates.inputs[options.inputType]);                                                 // 511
                                                                                                                 // 512
          checkbox.find("input").attr("value", option.value);                                                    // 513
          checkbox.find("label").append(option.text);                                                            // 514
                                                                                                                 // 515
          // we've ensured values is an array so we can always iterate over it                                   // 516
          each(values, function(_, value) {                                                                      // 517
            if (value === option.value) {                                                                        // 518
              checkbox.find("input").prop("checked", true);                                                      // 519
            }                                                                                                    // 520
          });                                                                                                    // 521
                                                                                                                 // 522
          input.append(checkbox);                                                                                // 523
        });                                                                                                      // 524
        break;                                                                                                   // 525
    }                                                                                                            // 526
                                                                                                                 // 527
    if (options.placeholder) {                                                                                   // 528
      input.attr("placeholder", options.placeholder);                                                            // 529
    }                                                                                                            // 530
                                                                                                                 // 531
    if(options.pattern){                                                                                         // 532
      input.attr("pattern", options.pattern);                                                                    // 533
    }                                                                                                            // 534
                                                                                                                 // 535
    // now place it in our form                                                                                  // 536
    form.append(input);                                                                                          // 537
                                                                                                                 // 538
    form.on("submit", function(e) {                                                                              // 539
      e.preventDefault();                                                                                        // 540
      // Fix for SammyJS (or similar JS routing library) hijacking the form post.                                // 541
      e.stopPropagation();                                                                                       // 542
      // @TODO can we actually click *the* button object instead?                                                // 543
      // e.g. buttons.confirm.click() or similar                                                                 // 544
      dialog.find(".btn-primary").click();                                                                       // 545
    });                                                                                                          // 546
                                                                                                                 // 547
    dialog = exports.dialog(options);                                                                            // 548
                                                                                                                 // 549
    // clear the existing handler focusing the submit button...                                                  // 550
    dialog.off("shown.bs.modal");                                                                                // 551
                                                                                                                 // 552
    // ...and replace it with one focusing our input, if possible                                                // 553
    dialog.on("shown.bs.modal", function() {                                                                     // 554
      input.focus();                                                                                             // 555
    });                                                                                                          // 556
                                                                                                                 // 557
    if (shouldShow === true) {                                                                                   // 558
      dialog.modal("show");                                                                                      // 559
    }                                                                                                            // 560
                                                                                                                 // 561
    return dialog;                                                                                               // 562
  };                                                                                                             // 563
                                                                                                                 // 564
  exports.dialog = function(options) {                                                                           // 565
    options = sanitize(options);                                                                                 // 566
                                                                                                                 // 567
    var dialog = $(templates.dialog);                                                                            // 568
    var innerDialog = dialog.find(".modal-dialog");                                                              // 569
    var body = dialog.find(".modal-body");                                                                       // 570
    var buttons = options.buttons;                                                                               // 571
    var buttonStr = "";                                                                                          // 572
    var callbacks = {                                                                                            // 573
      onEscape: options.onEscape                                                                                 // 574
    };                                                                                                           // 575
                                                                                                                 // 576
    each(buttons, function(key, button) {                                                                        // 577
                                                                                                                 // 578
      // @TODO I don't like this string appending to itself; bit dirty. Needs reworking                          // 579
      // can we just build up button elements instead? slower but neater. Then button                            // 580
      // can just become a template too                                                                          // 581
      buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
      callbacks[key] = button.callback;                                                                          // 583
    });                                                                                                          // 584
                                                                                                                 // 585
    body.find(".bootbox-body").html(options.message);                                                            // 586
                                                                                                                 // 587
    if (options.animate === true) {                                                                              // 588
      dialog.addClass("fade");                                                                                   // 589
    }                                                                                                            // 590
                                                                                                                 // 591
    if (options.className) {                                                                                     // 592
      dialog.addClass(options.className);                                                                        // 593
    }                                                                                                            // 594
                                                                                                                 // 595
    if (options.size === "large") {                                                                              // 596
      innerDialog.addClass("modal-lg");                                                                          // 597
    }                                                                                                            // 598
                                                                                                                 // 599
    if (options.size === "small") {                                                                              // 600
      innerDialog.addClass("modal-sm");                                                                          // 601
    }                                                                                                            // 602
                                                                                                                 // 603
    if (options.title) {                                                                                         // 604
      body.before(templates.header);                                                                             // 605
    }                                                                                                            // 606
                                                                                                                 // 607
    if (options.closeButton) {                                                                                   // 608
      var closeButton = $(templates.closeButton);                                                                // 609
                                                                                                                 // 610
      if (options.title) {                                                                                       // 611
        dialog.find(".modal-header").prepend(closeButton);                                                       // 612
      } else {                                                                                                   // 613
        closeButton.css("margin-top", "-10px").prependTo(body);                                                  // 614
      }                                                                                                          // 615
    }                                                                                                            // 616
                                                                                                                 // 617
    if (options.title) {                                                                                         // 618
      dialog.find(".modal-title").html(options.title);                                                           // 619
    }                                                                                                            // 620
                                                                                                                 // 621
    if (buttonStr.length) {                                                                                      // 622
      body.after(templates.footer);                                                                              // 623
      dialog.find(".modal-footer").html(buttonStr);                                                              // 624
    }                                                                                                            // 625
                                                                                                                 // 626
                                                                                                                 // 627
    /**                                                                                                          // 628
     * Bootstrap event listeners; used handle extra                                                              // 629
     * setup & teardown required after the underlying                                                            // 630
     * modal has performed certain actions                                                                       // 631
     */                                                                                                          // 632
                                                                                                                 // 633
    dialog.on("hidden.bs.modal", function(e) {                                                                   // 634
      // ensure we don't accidentally intercept hidden events triggered                                          // 635
      // by children of the current dialog. We shouldn't anymore now BS                                          // 636
      // namespaces its events; but still worth doing                                                            // 637
      if (e.target === this) {                                                                                   // 638
        dialog.remove();                                                                                         // 639
      }                                                                                                          // 640
    });                                                                                                          // 641
                                                                                                                 // 642
    /*                                                                                                           // 643
    dialog.on("show.bs.modal", function() {                                                                      // 644
      // sadly this doesn't work; show is called *just* before                                                   // 645
      // the backdrop is added so we'd need a setTimeout hack or                                                 // 646
      // otherwise... leaving in as would be nice                                                                // 647
      if (options.backdrop) {                                                                                    // 648
        dialog.next(".modal-backdrop").addClass("bootbox-backdrop");                                             // 649
      }                                                                                                          // 650
    });                                                                                                          // 651
    */                                                                                                           // 652
                                                                                                                 // 653
    dialog.on("shown.bs.modal", function() {                                                                     // 654
      dialog.find(".btn-primary:first").focus();                                                                 // 655
    });                                                                                                          // 656
                                                                                                                 // 657
    /**                                                                                                          // 658
     * Bootbox event listeners; experimental and may not last                                                    // 659
     * just an attempt to decouple some behaviours from their                                                    // 660
     * respective triggers                                                                                       // 661
     */                                                                                                          // 662
                                                                                                                 // 663
    dialog.on("escape.close.bb", function(e) {                                                                   // 664
      if (callbacks.onEscape) {                                                                                  // 665
        processCallback(e, dialog, callbacks.onEscape);                                                          // 666
      }                                                                                                          // 667
    });                                                                                                          // 668
                                                                                                                 // 669
    /**                                                                                                          // 670
     * Standard jQuery event listeners; used to handle user                                                      // 671
     * interaction with our dialog                                                                               // 672
     */                                                                                                          // 673
                                                                                                                 // 674
    dialog.on("click", ".modal-footer button", function(e) {                                                     // 675
      var callbackKey = $(this).data("bb-handler");                                                              // 676
                                                                                                                 // 677
      processCallback(e, dialog, callbacks[callbackKey]);                                                        // 678
                                                                                                                 // 679
    });                                                                                                          // 680
                                                                                                                 // 681
    dialog.on("click", ".bootbox-close-button", function(e) {                                                    // 682
      // onEscape might be falsy but that's fine; the fact is                                                    // 683
      // if the user has managed to click the close button we                                                    // 684
      // have to close the dialog, callback or not                                                               // 685
      processCallback(e, dialog, callbacks.onEscape);                                                            // 686
    });                                                                                                          // 687
                                                                                                                 // 688
    dialog.on("keyup", function(e) {                                                                             // 689
      if (e.which === 27) {                                                                                      // 690
        dialog.trigger("escape.close.bb");                                                                       // 691
      }                                                                                                          // 692
    });                                                                                                          // 693
                                                                                                                 // 694
    // the remainder of this method simply deals with adding our                                                 // 695
    // dialogent to the DOM, augmenting it with Bootstrap's modal                                                // 696
    // functionality and then giving the resulting object back                                                   // 697
    // to our caller                                                                                             // 698
                                                                                                                 // 699
    $(options.container).append(dialog);                                                                         // 700
                                                                                                                 // 701
    dialog.modal({                                                                                               // 702
      backdrop: options.backdrop,                                                                                // 703
      keyboard: false,                                                                                           // 704
      show: false                                                                                                // 705
    });                                                                                                          // 706
                                                                                                                 // 707
    if (options.show) {                                                                                          // 708
      dialog.modal("show");                                                                                      // 709
    }                                                                                                            // 710
                                                                                                                 // 711
    // @TODO should we return the raw element here or should                                                     // 712
    // we wrap it in an object on which we can expose some neater                                                // 713
    // methods, e.g. var d = bootbox.alert(); d.hide(); instead                                                  // 714
    // of d.modal("hide");                                                                                       // 715
                                                                                                                 // 716
   /*                                                                                                            // 717
    function BBDialog(elem) {                                                                                    // 718
      this.elem = elem;                                                                                          // 719
    }                                                                                                            // 720
                                                                                                                 // 721
    BBDialog.prototype = {                                                                                       // 722
      hide: function() {                                                                                         // 723
        return this.elem.modal("hide");                                                                          // 724
      },                                                                                                         // 725
      show: function() {                                                                                         // 726
        return this.elem.modal("show");                                                                          // 727
      }                                                                                                          // 728
    };                                                                                                           // 729
    */                                                                                                           // 730
                                                                                                                 // 731
    return dialog;                                                                                               // 732
                                                                                                                 // 733
  };                                                                                                             // 734
                                                                                                                 // 735
  exports.setDefaults = function() {                                                                             // 736
    var values = {};                                                                                             // 737
                                                                                                                 // 738
    if (arguments.length === 2) {                                                                                // 739
      // allow passing of single key/value...                                                                    // 740
      values[arguments[0]] = arguments[1];                                                                       // 741
    } else {                                                                                                     // 742
      // ... and as an object too                                                                                // 743
      values = arguments[0];                                                                                     // 744
    }                                                                                                            // 745
                                                                                                                 // 746
    $.extend(defaults, values);                                                                                  // 747
  };                                                                                                             // 748
                                                                                                                 // 749
  exports.hideAll = function() {                                                                                 // 750
    $(".bootbox").modal("hide");                                                                                 // 751
                                                                                                                 // 752
    return exports;                                                                                              // 753
  };                                                                                                             // 754
                                                                                                                 // 755
                                                                                                                 // 756
  /**                                                                                                            // 757
   * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are           // 758
   * unlikely to be required. If this gets too large it can be split out into separate JS files.                 // 759
   */                                                                                                            // 760
  var locales = {                                                                                                // 761
    br : {                                                                                                       // 762
      OK      : "OK",                                                                                            // 763
      CANCEL  : "Cancelar",                                                                                      // 764
      CONFIRM : "Sim"                                                                                            // 765
    },                                                                                                           // 766
    cs : {                                                                                                       // 767
      OK      : "OK",                                                                                            // 768
      CANCEL  : "Zrušit",                                                                                        // 769
      CONFIRM : "Potvrdit"                                                                                       // 770
    },                                                                                                           // 771
    da : {                                                                                                       // 772
      OK      : "OK",                                                                                            // 773
      CANCEL  : "Annuller",                                                                                      // 774
      CONFIRM : "Accepter"                                                                                       // 775
    },                                                                                                           // 776
    de : {                                                                                                       // 777
      OK      : "OK",                                                                                            // 778
      CANCEL  : "Abbrechen",                                                                                     // 779
      CONFIRM : "Akzeptieren"                                                                                    // 780
    },                                                                                                           // 781
    el : {                                                                                                       // 782
      OK      : "Εντάξει",                                                                                       // 783
      CANCEL  : "Ακύρωση",                                                                                       // 784
      CONFIRM : "Επιβεβαίωση"                                                                                    // 785
    },                                                                                                           // 786
    en : {                                                                                                       // 787
      OK      : "OK",                                                                                            // 788
      CANCEL  : "Cancel",                                                                                        // 789
      CONFIRM : "OK"                                                                                             // 790
    },                                                                                                           // 791
    es : {                                                                                                       // 792
      OK      : "OK",                                                                                            // 793
      CANCEL  : "Cancelar",                                                                                      // 794
      CONFIRM : "Aceptar"                                                                                        // 795
    },                                                                                                           // 796
    et : {                                                                                                       // 797
      OK      : "OK",                                                                                            // 798
      CANCEL  : "Katkesta",                                                                                      // 799
      CONFIRM : "OK"                                                                                             // 800
    },                                                                                                           // 801
    fi : {                                                                                                       // 802
      OK      : "OK",                                                                                            // 803
      CANCEL  : "Peruuta",                                                                                       // 804
      CONFIRM : "OK"                                                                                             // 805
    },                                                                                                           // 806
    fr : {                                                                                                       // 807
      OK      : "OK",                                                                                            // 808
      CANCEL  : "Annuler",                                                                                       // 809
      CONFIRM : "D'accord"                                                                                       // 810
    },                                                                                                           // 811
    he : {                                                                                                       // 812
      OK      : "אישור",                                                                                         // 813
      CANCEL  : "ביטול",                                                                                         // 814
      CONFIRM : "אישור"                                                                                          // 815
    },                                                                                                           // 816
    id : {                                                                                                       // 817
      OK      : "OK",                                                                                            // 818
      CANCEL  : "Batal",                                                                                         // 819
      CONFIRM : "OK"                                                                                             // 820
    },                                                                                                           // 821
    it : {                                                                                                       // 822
      OK      : "OK",                                                                                            // 823
      CANCEL  : "Annulla",                                                                                       // 824
      CONFIRM : "Conferma"                                                                                       // 825
    },                                                                                                           // 826
    ja : {                                                                                                       // 827
      OK      : "OK",                                                                                            // 828
      CANCEL  : "キャンセル",                                                                                         // 829
      CONFIRM : "確認"                                                                                             // 830
    },                                                                                                           // 831
    lt : {                                                                                                       // 832
      OK      : "Gerai",                                                                                         // 833
      CANCEL  : "Atšaukti",                                                                                      // 834
      CONFIRM : "Patvirtinti"                                                                                    // 835
    },                                                                                                           // 836
    lv : {                                                                                                       // 837
      OK      : "Labi",                                                                                          // 838
      CANCEL  : "Atcelt",                                                                                        // 839
      CONFIRM : "Apstiprināt"                                                                                    // 840
    },                                                                                                           // 841
    nl : {                                                                                                       // 842
      OK      : "OK",                                                                                            // 843
      CANCEL  : "Annuleren",                                                                                     // 844
      CONFIRM : "Accepteren"                                                                                     // 845
    },                                                                                                           // 846
    no : {                                                                                                       // 847
      OK      : "OK",                                                                                            // 848
      CANCEL  : "Avbryt",                                                                                        // 849
      CONFIRM : "OK"                                                                                             // 850
    },                                                                                                           // 851
    pl : {                                                                                                       // 852
      OK      : "OK",                                                                                            // 853
      CANCEL  : "Anuluj",                                                                                        // 854
      CONFIRM : "Potwierdź"                                                                                      // 855
    },                                                                                                           // 856
    pt : {                                                                                                       // 857
      OK      : "OK",                                                                                            // 858
      CANCEL  : "Cancelar",                                                                                      // 859
      CONFIRM : "Confirmar"                                                                                      // 860
    },                                                                                                           // 861
    ru : {                                                                                                       // 862
      OK      : "OK",                                                                                            // 863
      CANCEL  : "Отмена",                                                                                        // 864
      CONFIRM : "Применить"                                                                                      // 865
    },                                                                                                           // 866
    sv : {                                                                                                       // 867
      OK      : "OK",                                                                                            // 868
      CANCEL  : "Avbryt",                                                                                        // 869
      CONFIRM : "OK"                                                                                             // 870
    },                                                                                                           // 871
    tr : {                                                                                                       // 872
      OK      : "Tamam",                                                                                         // 873
      CANCEL  : "İptal",                                                                                         // 874
      CONFIRM : "Onayla"                                                                                         // 875
    },                                                                                                           // 876
    zh_CN : {                                                                                                    // 877
      OK      : "OK",                                                                                            // 878
      CANCEL  : "取消",                                                                                            // 879
      CONFIRM : "确认"                                                                                             // 880
    },                                                                                                           // 881
    zh_TW : {                                                                                                    // 882
      OK      : "OK",                                                                                            // 883
      CANCEL  : "取消",                                                                                            // 884
      CONFIRM : "確認"                                                                                             // 885
    }                                                                                                            // 886
  };                                                                                                             // 887
                                                                                                                 // 888
  exports.init = function(_$) {                                                                                  // 889
    return init(_$ || $);                                                                                        // 890
  };                                                                                                             // 891
                                                                                                                 // 892
  return exports;                                                                                                // 893
}));                                                                                                             // 894
                                                                                                                 // 895
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mizzao:bootboxjs'] = {};

})();
