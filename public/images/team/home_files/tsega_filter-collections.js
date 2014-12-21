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
var _ = Package.underscore._;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/tsega:filter-collections/tsega:filter-collections-client.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.FilterCollections = function (collection, settings) {                                                           // 1
                                                                                                                       // 2
  var self = this;                                                                                                     // 3
                                                                                                                       // 4
  var _settings = settings || {};                                                                                      // 5
  var _initialized = false;                                                                                            // 6
  var _EJSONQuery = {};                                                                                                // 7
                                                                                                                       // 8
  self._collection = collection || {};                                                                                 // 9
                                                                                                                       // 10
  self.name = (_settings.name) ? _settings.name : self._collection._name;                                              // 11
                                                                                                                       // 12
  var _subscriptionResultsId = 'fc-' + self.name + '-results';                                                         // 13
  var _subscriptionCountId = 'fc-' + self.name + '-count';                                                             // 14
                                                                                                                       // 15
  self._collectionCount = new Meteor.Collection(self.name + 'CountFC');                                                // 16
                                                                                                                       // 17
  var _deps = {                                                                                                        // 18
    query: new Deps.Dependency(),                                                                                      // 19
    sort: new Deps.Dependency(),                                                                                       // 20
    pager: new Deps.Dependency(),                                                                                      // 21
    filter: new Deps.Dependency(),                                                                                     // 22
    search: new Deps.Dependency()                                                                                      // 23
  };                                                                                                                   // 24
                                                                                                                       // 25
  var _callbacks = {                                                                                                   // 26
    beforeSubscribe: (_settings.callbacks && _settings.callbacks.beforeSubscribe) ? _settings.callbacks.beforeSubscribe : null,
    afterSubscribe: (_settings.callbacks && _settings.callbacks.afterSubscribe) ? _settings.callbacks.afterSubscribe : null,
    beforeSubscribeCount: (_settings.callbacks && _settings.callbacks.beforeSubscribeCount) ? _settings.callbacks.beforeSubscribeCount : null,
    afterSubscribeCount: (_settings.callbacks && _settings.callbacks.afterSubscribeCount) ? _settings.callbacks.afterSubscribeCount : null,
    beforeResults: (_settings.callbacks && _settings.callbacks.beforeResults) ? _settings.callbacks.beforeResults : null,
    afterResults: (_settings.callbacks && _settings.callbacks.afterResults) ? _settings.callbacks.afterResults : null, // 32
    templateCreated: (_settings.callbacks && _settings.callbacks.templateCreated) ? _settings.callbacks.templateCreated : null,
    templateRendered: (_settings.callbacks && _settings.callbacks.templateRendered) ? _settings.callbacks.templateRendered : null,
    templateDestroyed: (_settings.callbacks && _settings.callbacks.templateDestroyed) ? _settings.callbacks.templateDestroyed : null,
  };                                                                                                                   // 36
                                                                                                                       // 37
  var _template = _settings.template || {};                                                                            // 38
                                                                                                                       // 39
  var _sorts = (_settings.sort && _settings.sort.defaults) ? _settings.sort.defaults : [];                             // 40
  var _sortOrder = (_settings.sort && _settings.sort.order) ? _settings.sort.order : ['asc', 'desc'];                  // 41
                                                                                                                       // 42
  var _pager = {                                                                                                       // 43
    totalItems: 0,                                                                                                     // 44
    defaultOptions: (_settings.pager && _settings.pager.options) ? _settings.pager.options : [10, 20, 30, 40, 50],     // 45
    itemsPerPage: (_settings.pager && _settings.pager.itemsPerPage) ? parseInt(_settings.pager.itemsPerPage, 10) : 10, // 46
    currentPage: (_settings.pager && _settings.pager.currentPage) ? parseInt(_settings.pager.currentPage, 10) : 1,     // 47
    showPages: (_settings.pager && _settings.pager.showPages) ? parseInt(_settings.pager.showPages, 10) : 10           // 48
  };                                                                                                                   // 49
                                                                                                                       // 50
  var _filters = _settings.filters || {};                                                                              // 51
                                                                                                                       // 52
  var _subs = {                                                                                                        // 53
    results: {},                                                                                                       // 54
    count: {}                                                                                                          // 55
  };                                                                                                                   // 56
                                                                                                                       // 57
  var _query = {                                                                                                       // 58
    selector: {},                                                                                                      // 59
    options: {}                                                                                                        // 60
  };                                                                                                                   // 61
                                                                                                                       // 62
  /**                                                                                                                  // 63
   * [_autorun description]                                                                                            // 64
   * @return {[type]} [description]                                                                                    // 65
   */                                                                                                                  // 66
  var _autorun = function () {                                                                                         // 67
                                                                                                                       // 68
    Deps.autorun(function (computation) {                                                                              // 69
                                                                                                                       // 70
      if (!_initialized) {                                                                                             // 71
        self.sort.init(); // Set default query values for sorting.                                                     // 72
        self.pager.init(); // Set defaul query values for paging.                                                      // 73
        self.search.init(); // Set default searchable fields.                                                          // 74
        _initialized = true;                                                                                           // 75
      }                                                                                                                // 76
                                                                                                                       // 77
      var query = self.query.get();                                                                                    // 78
                                                                                                                       // 79
      if (_.isFunction(_callbacks.beforeSubscribe))                                                                    // 80
        query = _callbacks.beforeSubscribe(query) || query;                                                            // 81
                                                                                                                       // 82
      _subs.results = Meteor.subscribe(_subscriptionResultsId, query, {                                                // 83
        onError: function(error){                                                                                      // 84
          if (_.isFunction(_callbacks.afterSubscribe))                                                                 // 85
            _callbacks.afterSubscribe(error, this);                                                                    // 86
        }                                                                                                              // 87
      });                                                                                                              // 88
                                                                                                                       // 89
      if(_subs.results.ready() && _.isFunction(_callbacks.afterSubscribe))                                             // 90
        _callbacks.afterSubscribe(null, this);                                                                         // 91
                                                                                                                       // 92
      if (_.isFunction(_callbacks.beforeSubscribeCount))                                                               // 93
        query = _callbacks.beforeSubscribeCount(query) || query;                                                       // 94
                                                                                                                       // 95
      _subs.count = Meteor.subscribe(_subscriptionCountId, query, {                                                    // 96
        onError: function(error){                                                                                      // 97
          if (_.isFunction(_callbacks.afterSubscribeCount))                                                            // 98
            _callbacks.afterSubscribeCount(error, this);                                                               // 99
        }                                                                                                              // 100
      });                                                                                                              // 101
                                                                                                                       // 102
      if(_subs.count.ready()){                                                                                         // 103
                                                                                                                       // 104
        if (_.isFunction(_callbacks.afterSubscribeCount))                                                              // 105
          _callbacks.afterSubscribeCount(null, this);                                                                  // 106
                                                                                                                       // 107
        var res = self._collectionCount.findOne({});                                                                   // 108
        self.pager.setTotals(res);                                                                                     // 109
      }                                                                                                                // 110
                                                                                                                       // 111
    });                                                                                                                // 112
                                                                                                                       // 113
    return;                                                                                                            // 114
  };                                                                                                                   // 115
                                                                                                                       // 116
  /**                                                                                                                  // 117
   * [sort description]                                                                                                // 118
   * @type {Object}                                                                                                    // 119
   */                                                                                                                  // 120
  self.sort = {                                                                                                        // 121
    init: function(){                                                                                                  // 122
      this.run(false);                                                                                                 // 123
      return;                                                                                                          // 124
    },                                                                                                                 // 125
    get: function () {                                                                                                 // 126
      _deps.sort.depend();                                                                                             // 127
                                                                                                                       // 128
      var ret = {};                                                                                                    // 129
      _.each(_sorts, function (sort) {                                                                                 // 130
        for(var parts = sort[0].split('.'), i=0, l=parts.length, cache=ret; i<l; i++) {                                // 131
          if(!cache[parts[i]])                                                                                         // 132
              cache[parts[i]] = {};                                                                                    // 133
          if(i === l-1)                                                                                                // 134
            cache[parts[i]][sort[1]] = true;                                                                           // 135
          cache = cache[parts[i]];                                                                                     // 136
        }                                                                                                              // 137
      });                                                                                                              // 138
                                                                                                                       // 139
      return ret;                                                                                                      // 140
    },                                                                                                                 // 141
    set: function (field, order, triggerUpdate) {                                                                      // 142
      field = field || "";                                                                                             // 143
      order = order || _sortOrder[0];                                                                                  // 144
      triggerUpdate = triggerUpdate || false;                                                                          // 145
                                                                                                                       // 146
      if (field) {                                                                                                     // 147
        var isNew = true;                                                                                              // 148
        var isUpdate = false;                                                                                          // 149
                                                                                                                       // 150
        _.each(_sorts, function (sort, idx) {                                                                          // 151
          var value = _.indexOf(_sortOrder, sort[1]);                                                                  // 152
                                                                                                                       // 153
          if (sort[0] === field) {                                                                                     // 154
            value = value + 1;                                                                                         // 155
            order = _sortOrder[value];                                                                                 // 156
            sort[1] = undefined;                                                                                       // 157
            isNew = false;                                                                                             // 158
            isUpdate = true;                                                                                           // 159
          }                                                                                                            // 160
                                                                                                                       // 161
          if (!sort[1])                                                                                                // 162
            _sorts.splice(idx, 1);                                                                                     // 163
        });                                                                                                            // 164
                                                                                                                       // 165
        if (isNew)                                                                                                     // 166
          _sorts.unshift([field, order]);                                                                              // 167
                                                                                                                       // 168
        if (isUpdate && order) {                                                                                       // 169
          _sorts.unshift([field, order]);                                                                              // 170
        }                                                                                                              // 171
      }                                                                                                                // 172
                                                                                                                       // 173
      if (triggerUpdate) {                                                                                             // 174
        this.run();                                                                                                    // 175
      }                                                                                                                // 176
                                                                                                                       // 177
      _deps.sort.changed();                                                                                            // 178
                                                                                                                       // 179
      return;                                                                                                          // 180
    },                                                                                                                 // 181
    run: function () {                                                                                                 // 182
      _query.options.sort = (!_.isEmpty(_sorts)) ? _sorts : [];                                                        // 183
      self.query.set(_query);                                                                                          // 184
                                                                                                                       // 185
      return;                                                                                                          // 186
    },                                                                                                                 // 187
    clear: function (triggerUpdate) {                                                                                  // 188
      _sorts = [];                                                                                                     // 189
      _query.options.sort = [];                                                                                        // 190
                                                                                                                       // 191
      triggerUpdate = triggerUpdate || true;                                                                           // 192
                                                                                                                       // 193
      if (triggerUpdate)                                                                                               // 194
        this.run();                                                                                                    // 195
                                                                                                                       // 196
      return;                                                                                                          // 197
    }                                                                                                                  // 198
  };                                                                                                                   // 199
                                                                                                                       // 200
  /**                                                                                                                  // 201
   * [pager description]                                                                                               // 202
   * @type {Object}                                                                                                    // 203
   */                                                                                                                  // 204
  self.pager = {                                                                                                       // 205
    init: function () {                                                                                                // 206
      _query.options.skip = this.getOffsetStart();                                                                     // 207
      _query.options.limit = _pager.itemsPerPage;                                                                      // 208
                                                                                                                       // 209
      self.query.set(_query);                                                                                          // 210
                                                                                                                       // 211
      return;                                                                                                          // 212
    },                                                                                                                 // 213
    get: function () {                                                                                                 // 214
      _deps.pager.depend();                                                                                            // 215
      return _pager;                                                                                                   // 216
    },                                                                                                                 // 217
    set: function (triggerUpdate) {                                                                                    // 218
                                                                                                                       // 219
      triggerUpdate = triggerUpdate || false;                                                                          // 220
                                                                                                                       // 221
      var pages = this.getPages();                                                                                     // 222
      var options = this.getOptions();                                                                                 // 223
      var offsetStart = this.getOffsetStart();                                                                         // 224
      var offsetEnd = this.getOffsetEnd();                                                                             // 225
                                                                                                                       // 226
      _pager = _.extend(_pager, {                                                                                      // 227
        pages: pages,                                                                                                  // 228
        options: options,                                                                                              // 229
        offsetStart: offsetStart,                                                                                      // 230
        offsetEnd: offsetEnd                                                                                           // 231
      });                                                                                                              // 232
                                                                                                                       // 233
      if (triggerUpdate)                                                                                               // 234
        this.run();                                                                                                    // 235
                                                                                                                       // 236
      _deps.pager.changed();                                                                                           // 237
                                                                                                                       // 238
      return;                                                                                                          // 239
    },                                                                                                                 // 240
    run: function () {                                                                                                 // 241
                                                                                                                       // 242
      _query.options.skip = _pager.offsetStart;                                                                        // 243
      _query.options.limit = _pager.itemsPerPage;                                                                      // 244
      self.query.set(_query);                                                                                          // 245
                                                                                                                       // 246
      return;                                                                                                          // 247
    },                                                                                                                 // 248
    setItemsPerPage: function (itemsPerPage, triggerUpdate) {                                                          // 249
      triggerUpdate = triggerUpdate || false;                                                                          // 250
                                                                                                                       // 251
      _pager.itemsPerPage = parseInt(itemsPerPage, 10);                                                                // 252
                                                                                                                       // 253
      if (triggerUpdate)                                                                                               // 254
        this.set(true);                                                                                                // 255
                                                                                                                       // 256
      return;                                                                                                          // 257
    },                                                                                                                 // 258
    setCurrentPage: function (page, triggerUpdate) {                                                                   // 259
      triggerUpdate = triggerUpdate || false;                                                                          // 260
                                                                                                                       // 261
      _pager.currentPage = parseInt(page, 10);                                                                         // 262
                                                                                                                       // 263
      if (triggerUpdate)                                                                                               // 264
        this.set(true);                                                                                                // 265
                                                                                                                       // 266
      return;                                                                                                          // 267
    },                                                                                                                 // 268
    getOptions: function () {                                                                                          // 269
      var options = [];                                                                                                // 270
      var totalItems = _pager.totalItems;                                                                              // 271
      var appendLast = false;                                                                                          // 272
      var selected = false;                                                                                            // 273
                                                                                                                       // 274
      _.each(_pager.defaultOptions, function (value) {                                                                 // 275
        if(totalItems >= value){                                                                                       // 276
          selected = (_pager.itemsPerPage === value) ? true : false;                                                   // 277
          options.unshift({                                                                                            // 278
            value: value,                                                                                              // 279
            status: (selected) ? 'selected' : ''                                                                       // 280
          });                                                                                                          // 281
        }else{                                                                                                         // 282
          appendLast = true;                                                                                           // 283
        }                                                                                                              // 284
      });                                                                                                              // 285
                                                                                                                       // 286
      if (appendLast){                                                                                                 // 287
        options.unshift({                                                                                              // 288
          value: totalItems,                                                                                           // 289
          status: (selected) ? 'selected' : ''                                                                         // 290
        });                                                                                                            // 291
      }                                                                                                                // 292
                                                                                                                       // 293
      return options;                                                                                                  // 294
    },                                                                                                                 // 295
    getOffsetStart: function () {                                                                                      // 296
      var offsetStart = (_pager.currentPage - 1) * _pager.itemsPerPage;                                                // 297
      return offsetStart;                                                                                              // 298
    },                                                                                                                 // 299
    getOffsetEnd: function () {                                                                                        // 300
      var offsetEnd = this.getOffsetStart() + _pager.itemsPerPage;                                                     // 301
      return (offsetEnd > _pager.totalItems) ? _pager.totalItems : offsetEnd;                                          // 302
    },                                                                                                                 // 303
    getPages: function () {                                                                                            // 304
      var pages = [];                                                                                                  // 305
      var allPages = [];                                                                                               // 306
                                                                                                                       // 307
      var totalPages = _pager.totalPages;                                                                              // 308
      var currentPage = _pager.currentPage;                                                                            // 309
      var showPages = _pager.showPages;                                                                                // 310
                                                                                                                       // 311
      var start = (currentPage - 1) - Math.floor(showPages / 2);                                                       // 312
      if (start < 0) start = 0;                                                                                        // 313
      var end = start + showPages;                                                                                     // 314
      if (end > totalPages) {                                                                                          // 315
        end = totalPages;                                                                                              // 316
        start = end - showPages;                                                                                       // 317
        if (start < 0) start = 0;                                                                                      // 318
      }                                                                                                                // 319
                                                                                                                       // 320
      for (var i = start; i < end; i++) {                                                                              // 321
        var status = (currentPage === i + 1) ? 'active' : '';                                                          // 322
        pages.push({                                                                                                   // 323
          page: i + 1,                                                                                                 // 324
          status: status                                                                                               // 325
        });                                                                                                            // 326
      }                                                                                                                // 327
                                                                                                                       // 328
      return pages;                                                                                                    // 329
    },                                                                                                                 // 330
    setTotals: function(res){                                                                                          // 331
      _pager.totalItems = res.count;                                                                                   // 332
      _pager.totalPages = Math.ceil(_pager.totalItems / _pager.itemsPerPage);                                          // 333
      self.pager.set();                                                                                                // 334
    },                                                                                                                 // 335
    hasPrevious: function () {                                                                                         // 336
      var hasPrevious = (_pager.currentPage > 1);                                                                      // 337
      return hasPrevious;                                                                                              // 338
    },                                                                                                                 // 339
    hasNext: function () {                                                                                             // 340
      var hasNext = (_pager.currentPage < _pager.totalPages);                                                          // 341
      return hasNext;                                                                                                  // 342
    },                                                                                                                 // 343
    moveTo: function (page) {                                                                                          // 344
      if (_pager.currentPage !== page) {                                                                               // 345
        _pager.currentPage = page;                                                                                     // 346
        self.pager.set(true);                                                                                          // 347
      }                                                                                                                // 348
                                                                                                                       // 349
      return;                                                                                                          // 350
    },                                                                                                                 // 351
    movePrevious: function () {                                                                                        // 352
      if (this.hasPrevious()) {                                                                                        // 353
        _pager.currentPage--;                                                                                          // 354
        this.set(true);                                                                                                // 355
      }                                                                                                                // 356
                                                                                                                       // 357
      return;                                                                                                          // 358
    },                                                                                                                 // 359
    moveFirst: function () {                                                                                           // 360
      if (this.hasPrevious()) {                                                                                        // 361
        _pager.currentPage = 1;                                                                                        // 362
        this.set(true);                                                                                                // 363
      }                                                                                                                // 364
                                                                                                                       // 365
      return;                                                                                                          // 366
    },                                                                                                                 // 367
    moveNext: function () {                                                                                            // 368
      if (this.hasNext()) {                                                                                            // 369
        _pager.currentPage++;                                                                                          // 370
        this.set(true);                                                                                                // 371
      }                                                                                                                // 372
                                                                                                                       // 373
      return;                                                                                                          // 374
    },                                                                                                                 // 375
    moveLast: function () {                                                                                            // 376
      if (this.hasNext()) {                                                                                            // 377
        _pager.currentPage = _pager.totalPages;                                                                        // 378
        this.set(true);                                                                                                // 379
      }                                                                                                                // 380
                                                                                                                       // 381
      return;                                                                                                          // 382
    }                                                                                                                  // 383
  };                                                                                                                   // 384
                                                                                                                       // 385
  /**                                                                                                                  // 386
   * [filter description]                                                                                              // 387
   * @type {Object}                                                                                                    // 388
   */                                                                                                                  // 389
  self.filter = {                                                                                                      // 390
    get: function () {                                                                                                 // 391
      var filters = _filters;                                                                                          // 392
      return filters;                                                                                                  // 393
    },                                                                                                                 // 394
    set: function (key, filter, triggerUpdate) {                                                                       // 395
                                                                                                                       // 396
      triggerUpdate = triggerUpdate || true;                                                                           // 397
                                                                                                                       // 398
      if (!_.has(_filters, key))                                                                                       // 399
        throw new Error("Filter Collection Error: " + key + " is not a valid filter.");                                // 400
                                                                                                                       // 401
      _filters[key] = _.extend(_filters[key], filter);                                                                 // 402
                                                                                                                       // 403
      _filters[key].active = _filters[key].active ? false : true;                                                      // 404
                                                                                                                       // 405
      if(triggerUpdate)                                                                                                // 406
        this.run();                                                                                                    // 407
                                                                                                                       // 408
      return;                                                                                                          // 409
    },                                                                                                                 // 410
    getSelector: function(){                                                                                           // 411
      var selector = {};                                                                                               // 412
      var condition = {};                                                                                              // 413
                                                                                                                       // 414
      _.each(_filters, function (filter, key) {                                                                        // 415
                                                                                                                       // 416
        if (filter.value) {                                                                                            // 417
                                                                                                                       // 418
          var segment = {};                                                                                            // 419
          var append = {};                                                                                             // 420
          var value;                                                                                                   // 421
          segment[key] = {};                                                                                           // 422
                                                                                                                       // 423
          if(filter.value && filter.transform && _.isFunction(filter.transform))                                       // 424
            value = filter.transform(filter.value);                                                                    // 425
          else                                                                                                         // 426
            value = filter.value;                                                                                      // 427
                                                                                                                       // 428
          if (filter.operator && filter.operator[0]) {                                                                 // 429
            segment[key][filter.operator[0]] = value;                                                                  // 430
            if (filter.operator[1])                                                                                    // 431
              segment[key].$options = filter.operator[1];                                                              // 432
          } else {                                                                                                     // 433
            segment[key] = value;                                                                                      // 434
          }                                                                                                            // 435
                                                                                                                       // 436
          if (!_.isEmpty(filter.condition)) {                                                                          // 437
            condition[filter.condition] = condition[filter.condition] || [];                                           // 438
            condition[filter.condition].push(segment);                                                                 // 439
          }                                                                                                            // 440
                                                                                                                       // 441
          if(filter.sort && _.indexOf(_sortOrder, filter.sort) !== -1){                                                // 442
            self.sort.clear(true);                                                                                     // 443
            self.sort.set(key, filter.sort, true);                                                                     // 444
          }                                                                                                            // 445
                                                                                                                       // 446
          append = (!_.isEmpty(condition)) ? condition : segment;                                                      // 447
          selector = _.extend(selector, append);                                                                       // 448
        }                                                                                                              // 449
      });                                                                                                              // 450
      return selector;                                                                                                 // 451
    },                                                                                                                 // 452
    getActive: function(){                                                                                             // 453
      var filters = [];                                                                                                // 454
                                                                                                                       // 455
      _.each(_filters, function (filter, key) {                                                                        // 456
        if (filter.value)                                                                                              // 457
          filters.push({                                                                                               // 458
            title: filter.title,                                                                                       // 459
            operator: (filter.operator && filter.operator[0]) ? filter.operator[0] : 'match',                          // 460
            value: filter.value,                                                                                       // 461
            key: key                                                                                                   // 462
          });                                                                                                          // 463
      });                                                                                                              // 464
                                                                                                                       // 465
      return filters;                                                                                                  // 466
    },                                                                                                                 // 467
    isActive: function(field, value, operator){                                                                        // 468
      var filters = self.filter.get();                                                                                 // 469
                                                                                                                       // 470
      if(_.has(filters, field)){                                                                                       // 471
        var check = filters[field];                                                                                    // 472
                                                                                                                       // 473
        if(!check.value || check.value != value)                                                                       // 474
          return false;                                                                                                // 475
                                                                                                                       // 476
        if(check.operator && check.operator[0]){                                                                       // 477
          if(check.operator[0] != operator)                                                                            // 478
            return false;                                                                                              // 479
        }                                                                                                              // 480
                                                                                                                       // 481
        return true;                                                                                                   // 482
      }                                                                                                                // 483
      return false;                                                                                                    // 484
    },                                                                                                                 // 485
    run: function(){                                                                                                   // 486
      _query.selector = this.getSelector();                                                                            // 487
      self.query.set(_query);                                                                                          // 488
      self.pager.moveTo(1);                                                                                            // 489
                                                                                                                       // 490
      return;                                                                                                          // 491
    },                                                                                                                 // 492
    clear: function(key, triggerUpdate){                                                                               // 493
                                                                                                                       // 494
      triggerUpdate = triggerUpdate || true;                                                                           // 495
                                                                                                                       // 496
      if(key && _filters[key] && _filters[key].value){                                                                 // 497
        _filters[key] = _.omit(_filters[key], 'value');                                                                // 498
      }else{                                                                                                           // 499
        _.each(_filters, function (filter, key) {                                                                      // 500
          if (filter.value)                                                                                            // 501
            _filters[key] = _.omit(_filters[key], 'value');                                                            // 502
        });                                                                                                            // 503
      }                                                                                                                // 504
                                                                                                                       // 505
      if(triggerUpdate)                                                                                                // 506
        this.run();                                                                                                    // 507
    }                                                                                                                  // 508
  };                                                                                                                   // 509
                                                                                                                       // 510
  /**                                                                                                                  // 511
   * [search description]                                                                                              // 512
   * @type {Object}                                                                                                    // 513
   */                                                                                                                  // 514
  self.search = {                                                                                                      // 515
    criteria: "",                                                                                                      // 516
    fields: [],                                                                                                        // 517
    required: [],                                                                                                      // 518
    init: function(){                                                                                                  // 519
      this.setFields();                                                                                                // 520
      return;                                                                                                          // 521
    },                                                                                                                 // 522
    getFields: function(full){                                                                                         // 523
      _deps.search.depend();                                                                                           // 524
                                                                                                                       // 525
      full = full || false;                                                                                            // 526
                                                                                                                       // 527
      if(full)                                                                                                         // 528
        return _.union(this.fields, this.required);                                                                    // 529
      else                                                                                                             // 530
        return this.fields;                                                                                            // 531
    },                                                                                                                 // 532
    setFields: function(){                                                                                             // 533
      var _this = this;                                                                                                // 534
      var activeSearch = [];                                                                                           // 535
      var requiredSearch = [];                                                                                         // 536
                                                                                                                       // 537
      _.each(_filters, function(field, key){                                                                           // 538
        if(field.searchable && field.searchable === 'optional'){                                                       // 539
          activeSearch.push({                                                                                          // 540
            field: key,                                                                                                // 541
            title: field.title,                                                                                        // 542
            active: false                                                                                              // 543
          });                                                                                                          // 544
        }                                                                                                              // 545
                                                                                                                       // 546
        if(field.searchable && field.searchable === 'required'){                                                       // 547
          requiredSearch.push({                                                                                        // 548
            field: key,                                                                                                // 549
            title: field.title,                                                                                        // 550
            active: true                                                                                               // 551
          });                                                                                                          // 552
        }                                                                                                              // 553
      });                                                                                                              // 554
                                                                                                                       // 555
      this.fields = activeSearch;                                                                                      // 556
      this.required = requiredSearch;                                                                                  // 557
                                                                                                                       // 558
      return;                                                                                                          // 559
    },                                                                                                                 // 560
    setField: function(key){                                                                                           // 561
      var _this = this;                                                                                                // 562
      _.each(this.fields, function(field, idx){                                                                        // 563
        if(_this.fields[idx].field === key && _filters[field.field] && _filters[field.field].searchable !== 'required')
          _this.fields[idx].active = (_this.fields[idx].active === true) ? false : true;                               // 565
      });                                                                                                              // 566
                                                                                                                       // 567
      _deps.search.changed();                                                                                          // 568
      return;                                                                                                          // 569
    },                                                                                                                 // 570
    setCriteria: function(value, triggerUpdate){                                                                       // 571
                                                                                                                       // 572
      triggerUpdate = triggerUpdate || false;                                                                          // 573
                                                                                                                       // 574
      var activeFields = this.getFields(true);                                                                         // 575
                                                                                                                       // 576
      if(value){                                                                                                       // 577
        this.criteria = value;                                                                                         // 578
        _.each(activeFields, function (field, key) {                                                                   // 579
          if (field.active){                                                                                           // 580
            self.filter.set(field.field, {                                                                             // 581
              value: value                                                                                             // 582
            });                                                                                                        // 583
          }                                                                                                            // 584
        });                                                                                                            // 585
                                                                                                                       // 586
        if(triggerUpdate)                                                                                              // 587
          this.run();                                                                                                  // 588
      }                                                                                                                // 589
                                                                                                                       // 590
      return;                                                                                                          // 591
    },                                                                                                                 // 592
    getCriteria: function(){                                                                                           // 593
      var criteria = this.criteria;                                                                                    // 594
      return criteria;                                                                                                 // 595
    },                                                                                                                 // 596
    run: function(){                                                                                                   // 597
      self.pager.moveTo(1);                                                                                            // 598
      return;                                                                                                          // 599
    },                                                                                                                 // 600
    clear: function(){                                                                                                 // 601
      this.criteria = "";                                                                                              // 602
      self.filter.clear();                                                                                             // 603
      return;                                                                                                          // 604
    }                                                                                                                  // 605
  };                                                                                                                   // 606
                                                                                                                       // 607
  /**                                                                                                                  // 608
   * [query description]                                                                                               // 609
   * @type {Object}                                                                                                    // 610
   */                                                                                                                  // 611
  self.query = {                                                                                                       // 612
    get: function () {                                                                                                 // 613
      _deps.query.depend();                                                                                            // 614
      return EJSON.parse(_EJSONQuery);                                                                                 // 615
    },                                                                                                                 // 616
    set: function (query) {                                                                                            // 617
      _EJSONQuery = EJSON.stringify(query);                                                                            // 618
      _deps.query.changed();                                                                                           // 619
      return;                                                                                                          // 620
    },                                                                                                                 // 621
    updateResults: function(){                                                                                         // 622
      _query.force = new Date().getTime();                                                                             // 623
      this.set(_query);                                                                                                // 624
    },                                                                                                                 // 625
    getResults: function(){                                                                                            // 626
      var q = _.clone(_query);                                                                                         // 627
      q.options = _.omit(q.options, 'skip', 'limit');                                                                  // 628
                                                                                                                       // 629
      if (_.isFunction(_callbacks.beforeResults))                                                                      // 630
        q = _callbacks.beforeResults(q) || q;                                                                          // 631
                                                                                                                       // 632
      var cursor = self._collection.find(q.selector, q.options);                                                       // 633
                                                                                                                       // 634
      if (_.isFunction(_callbacks.afterResults))                                                                       // 635
        cursor = _callbacks.afterResults(cursor) || cursor;                                                            // 636
                                                                                                                       // 637
      return cursor;                                                                                                   // 638
    }                                                                                                                  // 639
  };                                                                                                                   // 640
                                                                                                                       // 641
  /**                                                                                                                  // 642
   * Template extensions                                                                                               // 643
   */                                                                                                                  // 644
                                                                                                                       // 645
  if (Template[_template]) {                                                                                           // 646
                                                                                                                       // 647
    Template[_template].created = function () {                                                                        // 648
      _autorun();                                                                                                      // 649
                                                                                                                       // 650
      if (_.isFunction(_callbacks.templateCreated))                                                                    // 651
        _callbacks.templateCreated(this);                                                                              // 652
                                                                                                                       // 653
      return;                                                                                                          // 654
    };                                                                                                                 // 655
                                                                                                                       // 656
    Template[_template].rendered = function () {                                                                       // 657
                                                                                                                       // 658
      if (_.isFunction(_callbacks.templateRendered))                                                                   // 659
        _callbacks.templateRendered(this);                                                                             // 660
                                                                                                                       // 661
      return;                                                                                                          // 662
    };                                                                                                                 // 663
                                                                                                                       // 664
    /** Template cleanup. **/                                                                                          // 665
    Template[_template].destroyed = function () {                                                                      // 666
      _subs.results.stop();                                                                                            // 667
      _subs.count.stop();                                                                                              // 668
                                                                                                                       // 669
      if (_.isFunction(_callbacks.templateDestroyed))                                                                  // 670
        _callbacks.templateDestroyed(this);                                                                            // 671
    };                                                                                                                 // 672
                                                                                                                       // 673
    Template[_template].helpers({                                                                                      // 674
      fcResults: function(){                                                                                           // 675
        return self.query.getResults();                                                                                // 676
      },                                                                                                               // 677
      fcSort: function(){                                                                                              // 678
        return self.sort.get();                                                                                        // 679
      },                                                                                                               // 680
      fcPager: function(){                                                                                             // 681
        return self.pager.get();                                                                                       // 682
      },                                                                                                               // 683
      fcFilter: function(){                                                                                            // 684
        return self.filter.get();                                                                                      // 685
      },                                                                                                               // 686
      fcFilterActive: function(){                                                                                      // 687
        return self.filter.getActive();                                                                                // 688
      },                                                                                                               // 689
      fcFilterSearchable: function(){                                                                                  // 690
        return {                                                                                                       // 691
          available: self.search.getFields(),                                                                          // 692
          criteria: self.search.getCriteria()                                                                          // 693
        };                                                                                                             // 694
      },                                                                                                               // 695
      fcFilterObj: function(){                                                                                         // 696
        return self.filter;                                                                                            // 697
      },                                                                                                               // 698
      fcPagerObj: function(){                                                                                          // 699
        return self.pager;                                                                                             // 700
      }                                                                                                                // 701
    });                                                                                                                // 702
                                                                                                                       // 703
    /** Template events. **/                                                                                           // 704
    Template[_template].events({                                                                                       // 705
                                                                                                                       // 706
      /** Filters **/                                                                                                  // 707
      'click .fc-filter': function (event) {                                                                           // 708
        event.preventDefault();                                                                                        // 709
                                                                                                                       // 710
        var field = event.currentTarget.getAttribute('data-fc-filter-field') || false;                                 // 711
        var value = event.currentTarget.getAttribute('data-fc-filter-value') || false;                                 // 712
        var operator = event.currentTarget.getAttribute('data-fc-filter-operator') || false;                           // 713
        var options = event.currentTarget.getAttribute('data-fc-filter-options') || false;                             // 714
        var sort = event.currentTarget.getAttribute('data-fc-filter-sort') || false;                                   // 715
                                                                                                                       // 716
        var filter = {};                                                                                               // 717
                                                                                                                       // 718
        if (field && value)                                                                                            // 719
          filter['value'] = value;                                                                                     // 720
                                                                                                                       // 721
        if (operator)                                                                                                  // 722
          filter['operator'] = [operator, options];                                                                    // 723
                                                                                                                       // 724
        if (sort)                                                                                                      // 725
          filter['sort'] = sort;                                                                                       // 726
                                                                                                                       // 727
        self.filter.set(field, filter);                                                                                // 728
      },                                                                                                               // 729
      'click .fc-filter-clear': function (event) {                                                                     // 730
        event.preventDefault();                                                                                        // 731
                                                                                                                       // 732
        if (self.filter.getActive().length ===1)                                                                       // 733
          self.search.clear();                                                                                         // 734
                                                                                                                       // 735
        if (_filters[this.key])                                                                                        // 736
          self.filter.clear(this.key);                                                                                 // 737
      },                                                                                                               // 738
      'click .fc-filter-reset': function (event) {                                                                     // 739
        event.preventDefault();                                                                                        // 740
                                                                                                                       // 741
        if (self.filter.getActive().length){                                                                           // 742
          self.search.clear();                                                                                         // 743
          self.filter.clear();                                                                                         // 744
        }                                                                                                              // 745
      },                                                                                                               // 746
                                                                                                                       // 747
      /** Search **/                                                                                                   // 748
      'click .fc-search-trigger': function (event, template) {                                                         // 749
        event.preventDefault();                                                                                        // 750
                                                                                                                       // 751
        var target = event.currentTarget.getAttribute('data-fc-search-trigger');                                       // 752
        var value = template.find('[data-fc-search-target="'+target+'"]').value || '';                                 // 753
        self.search.setCriteria(value, true);                                                                          // 754
      },                                                                                                               // 755
      'click .fc-search-fields': function (event, template) {                                                          // 756
        event.preventDefault();                                                                                        // 757
        self.search.setField(this.field);                                                                              // 758
      },                                                                                                               // 759
      'click .fc-search-clear': function (event, template) {                                                           // 760
        event.preventDefault();                                                                                        // 761
        self.search.clear();                                                                                           // 762
      },                                                                                                               // 763
                                                                                                                       // 764
      /** Pager **/                                                                                                    // 765
      'change .fc-pager-options': function (event) {                                                                   // 766
        event.preventDefault();                                                                                        // 767
        var itemsPerPage = parseInt(event.target.value, 10) || _pager.itemsPerPage;                                    // 768
        self.pager.setItemsPerPage(itemsPerPage);                                                                      // 769
        self.pager.setCurrentPage(1, true);                                                                            // 770
      },                                                                                                               // 771
      'click .fc-pager-option': function (event) {                                                                     // 772
        event.preventDefault();                                                                                        // 773
        var itemsPerPage = parseInt(event.currentTarget.getAttribute('data-fc-pager-page'), 10) || _pager.itemsPerPage;
        self.pager.setItemsPerPage(itemsPerPage);                                                                      // 775
        self.pager.setCurrentPage(1, true);                                                                            // 776
      },                                                                                                               // 777
      'click .fc-pager-page': function (event) {                                                                       // 778
        event.preventDefault();                                                                                        // 779
        var page = parseInt(event.currentTarget.getAttribute('data-fc-pager-page'), 10) || _pager.currentPage;         // 780
        self.pager.moveTo(page);                                                                                       // 781
      },                                                                                                               // 782
      'click .fc-pager-first': function (event) {                                                                      // 783
        event.preventDefault();                                                                                        // 784
        self.pager.moveFirst();                                                                                        // 785
      },                                                                                                               // 786
      'click .fc-pager-previous': function (event) {                                                                   // 787
        event.preventDefault();                                                                                        // 788
        self.pager.movePrevious();                                                                                     // 789
      },                                                                                                               // 790
      'click .fc-pager-next': function (event) {                                                                       // 791
        event.preventDefault();                                                                                        // 792
        self.pager.moveNext();                                                                                         // 793
      },                                                                                                               // 794
      'click .fc-pager-last': function (event) {                                                                       // 795
        event.preventDefault();                                                                                        // 796
        self.pager.moveLast();                                                                                         // 797
      },                                                                                                               // 798
                                                                                                                       // 799
      /** Sort **/                                                                                                     // 800
      'click .fc-sort': function (event, template) {                                                                   // 801
        event.preventDefault();                                                                                        // 802
        var field = event.currentTarget.getAttribute('data-fc-sort');                                                  // 803
        self.sort.set(field, null, true);                                                                              // 804
      },                                                                                                               // 805
      'click .fc-sort-clear': function (event, template) {                                                             // 806
        event.preventDefault();                                                                                        // 807
        self.sort.clear();                                                                                             // 808
      }                                                                                                                // 809
    });                                                                                                                // 810
  } else {                                                                                                             // 811
    _autorun();                                                                                                        // 812
  }                                                                                                                    // 813
};                                                                                                                     // 814
                                                                                                                       // 815
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tsega:filter-collections'] = {};

})();
