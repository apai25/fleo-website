(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-post-posts-module~components-workshops-workshops-module"],{

/***/ "/vdw":
/*!********************************************!*\
  !*** ./src/app/core/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
        this.routeURL = this.router.url;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.user.subscribe(function (user) {
                if (!user && _this.routeURL !== '/homepage') {
                    _this.routeURL = '/login';
                    _this.router.navigate(['/homepage'], {
                        queryParams: {
                            return: 'login'
                        }
                    });
                    alert("Not logged in");
                    return resolve(false);
                }
                else {
                    _this.routeURL = _this.router.url;
                    return resolve(true);
                }
            });
        });
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "LmZi":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm.js ***!
  \**********************************************************/
/*! exports provided: registerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerStorage", function() { return registerStorage; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "zIRd");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "qOnz");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ "/6Yf");




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Constants used in the Firebase Storage library.
 */

/**
 * Domain name for firebase storage.
 */

var DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */

var CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */

var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */

var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */

var FirebaseStorageError =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FirebaseStorageError, _super);
  /**
   * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
   *  added to the end of the message.
   * @param message  - Error message.
   */


  function FirebaseStorageError(code, message) {
    var _this = _super.call(this, prependCode(code), "Firebase Storage: " + message + " (" + prependCode(code) + ")") || this;
    /**
     * Stores custom error data unque to FirebaseStorageError.
     */


    _this.customData = {
      serverResponse: null
    }; // Without this, `instanceof FirebaseStorageError`, in tests for example,
    // returns false.

    Object.setPrototypeOf(_this, FirebaseStorageError.prototype);
    return _this;
  }
  /**
   * Compares a StorageErrorCode against this error's code, filtering out the prefix.
   */


  FirebaseStorageError.prototype._codeEquals = function (code) {
    return prependCode(code) === this.code;
  };

  Object.defineProperty(FirebaseStorageError.prototype, "message", {
    /**
     * Error message including serverResponse if available.
     */
    get: function get() {
      if (this.customData.serverResponse) {
        return this.message + "\n" + this.customData.serverResponse;
      } else {
        return this.message;
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
    /**
     * Optional response message that was added by the server.
     */
    get: function get() {
      return this.customData.serverResponse;
    },
    set: function set(serverResponse) {
      this.customData.serverResponse = serverResponse;
    },
    enumerable: false,
    configurable: true
  });
  return FirebaseStorageError;
}(_firebase_util__WEBPACK_IMPORTED_MODULE_2__["FirebaseError"]);

function prependCode(code) {
  return 'storage/' + code;
}

function unknown() {
  var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
  return new FirebaseStorageError("unknown"
  /* UNKNOWN */
  , message);
}

function objectNotFound(path) {
  return new FirebaseStorageError("object-not-found"
  /* OBJECT_NOT_FOUND */
  , "Object '" + path + "' does not exist.");
}

function quotaExceeded(bucket) {
  return new FirebaseStorageError("quota-exceeded"
  /* QUOTA_EXCEEDED */
  , "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}

function unauthenticated() {
  var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
  return new FirebaseStorageError("unauthenticated"
  /* UNAUTHENTICATED */
  , message);
}

function unauthorized(path) {
  return new FirebaseStorageError("unauthorized"
  /* UNAUTHORIZED */
  , "User does not have permission to access '" + path + "'.");
}

function retryLimitExceeded() {
  return new FirebaseStorageError("retry-limit-exceeded"
  /* RETRY_LIMIT_EXCEEDED */
  , 'Max retry time for operation exceeded, please try again.');
}

function canceled() {
  return new FirebaseStorageError("canceled"
  /* CANCELED */
  , 'User canceled the upload/download.');
}

function invalidUrl(url) {
  return new FirebaseStorageError("invalid-url"
  /* INVALID_URL */
  , "Invalid URL '" + url + "'.");
}

function invalidDefaultBucket(bucket) {
  return new FirebaseStorageError("invalid-default-bucket"
  /* INVALID_DEFAULT_BUCKET */
  , "Invalid default bucket '" + bucket + "'.");
}

function noDefaultBucket() {
  return new FirebaseStorageError("no-default-bucket"
  /* NO_DEFAULT_BUCKET */
  , 'No default bucket ' + "found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}

function cannotSliceBlob() {
  return new FirebaseStorageError("cannot-slice-blob"
  /* CANNOT_SLICE_BLOB */
  , 'Cannot slice blob for upload. Please retry the upload.');
}

function serverFileWrongSize() {
  return new FirebaseStorageError("server-file-wrong-size"
  /* SERVER_FILE_WRONG_SIZE */
  , 'Server recorded incorrect upload file size, please retry the upload.');
}

function noDownloadURL() {
  return new FirebaseStorageError("no-download-url"
  /* NO_DOWNLOAD_URL */
  , 'The given file does not have any download URLs.');
}

function invalidArgument(message) {
  return new FirebaseStorageError("invalid-argument"
  /* INVALID_ARGUMENT */
  , message);
}

function appDeleted() {
  return new FirebaseStorageError("app-deleted"
  /* APP_DELETED */
  , 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 */


function invalidRootOperation(name) {
  return new FirebaseStorageError("invalid-root-operation"
  /* INVALID_ROOT_OPERATION */
  , "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */


function invalidFormat(format, message) {
  return new FirebaseStorageError("invalid-format"
  /* INVALID_FORMAT */
  , "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */


function internalError(message) {
  throw new FirebaseStorageError("internal-error"
  /* INTERNAL_ERROR */
  , 'Internal error: ' + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An enumeration of the possible string formats for upload.
 * @public
 */


var StringFormat = {
  /**
   * Indicates the string should be interpreted "raw", that is, as normal text.
   * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
   * sequence.
   * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
   * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
   */
  RAW: 'raw',

  /**
   * Indicates the string should be interpreted as base64-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64: 'base64',

  /**
   * Indicates the string should be interpreted as base64url-encoded data.
   * Padding characters (trailing '='s) are optional.
   * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
   * ad 69 8e fb e1 3a b7 bf eb 97
   */
  BASE64URL: 'base64url',

  /**
   * Indicates the string is a data URL, such as one obtained from
   * canvas.toDataURL().
   * Example: the string 'data:application/octet-stream;base64,aaaa'
   * becomes the byte sequence
   * 69 a6 9a
   * (the content-type "application/octet-stream" is also applied, but can
   * be overridden in the metadata object).
   */
  DATA_URL: 'data_url'
};

var StringData =
/** @class */
function () {
  function StringData(data, contentType) {
    this.data = data;
    this.contentType = contentType || null;
  }

  return StringData;
}();

function dataFromString(format, stringData) {
  switch (format) {
    case StringFormat.RAW:
      return new StringData(utf8Bytes_(stringData));

    case StringFormat.BASE64:
    case StringFormat.BASE64URL:
      return new StringData(base64Bytes_(format, stringData));

    case StringFormat.DATA_URL:
      return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    // do nothing
  } // assert(false);


  throw unknown();
}

function utf8Bytes_(value) {
  var b = [];

  for (var i = 0; i < value.length; i++) {
    var c = value.charCodeAt(i);

    if (c <= 127) {
      b.push(c);
    } else {
      if (c <= 2047) {
        b.push(192 | c >> 6, 128 | c & 63);
      } else {
        if ((c & 64512) === 55296) {
          // The start of a surrogate pair.
          var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;

          if (!valid) {
            // The second surrogate wasn't there.
            b.push(239, 191, 189);
          } else {
            var hi = c;
            var lo = value.charCodeAt(++i);
            c = 65536 | (hi & 1023) << 10 | lo & 1023;
            b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
          }
        } else {
          if ((c & 64512) === 56320) {
            // Invalid low surrogate.
            b.push(239, 191, 189);
          } else {
            b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
          }
        }
      }
    }
  }

  return new Uint8Array(b);
}

function percentEncodedBytes_(value) {
  var decoded;

  try {
    decoded = decodeURIComponent(value);
  } catch (e) {
    throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
  }

  return utf8Bytes_(decoded);
}

function base64Bytes_(format, value) {
  switch (format) {
    case StringFormat.BASE64:
      {
        var hasMinus = value.indexOf('-') !== -1;
        var hasUnder = value.indexOf('_') !== -1;

        if (hasMinus || hasUnder) {
          var invalidChar = hasMinus ? '-' : '_';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
        }

        break;
      }

    case StringFormat.BASE64URL:
      {
        var hasPlus = value.indexOf('+') !== -1;
        var hasSlash = value.indexOf('/') !== -1;

        if (hasPlus || hasSlash) {
          var invalidChar = hasPlus ? '+' : '/';
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
        }

        value = value.replace(/-/g, '+').replace(/_/g, '/');
        break;
      }
    // do nothing
  }

  var bytes;

  try {
    bytes = atob(value);
  } catch (e) {
    throw invalidFormat(format, 'Invalid character found');
  }

  var array = new Uint8Array(bytes.length);

  for (var i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  return array;
}

var DataURLParts =
/** @class */
function () {
  function DataURLParts(dataURL) {
    this.base64 = false;
    this.contentType = null;
    var matches = dataURL.match(/^data:([^,]+)?,/);

    if (matches === null) {
      throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
    }

    var middle = matches[1] || null;

    if (middle != null) {
      this.base64 = endsWith(middle, ';base64');
      this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
    }

    this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
  }

  return DataURLParts;
}();

function dataURLBytes_(dataUrl) {
  var parts = new DataURLParts(dataUrl);

  if (parts.base64) {
    return base64Bytes_(StringFormat.BASE64, parts.rest);
  } else {
    return percentEncodedBytes_(parts.rest);
  }
}

function dataURLContentType_(dataUrl) {
  var parts = new DataURLParts(dataUrl);
  return parts.contentType;
}

function endsWith(s, end) {
  var longEnough = s.length >= end.length;

  if (!longEnough) {
    return false;
  }

  return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An event that is triggered on a task.
 */


var TaskEvent = {
  /**
   * For this event,
   * <ul>
   *   <li>The `next` function is triggered on progress updates and when the
   *       task is paused/resumed with an `UploadTaskSnapshot` as the first
   *       argument.</li>
   *   <li>The `error` function is triggered if the upload is canceled or fails
   *       for another reason.</li>
   *   <li>The `complete` function is triggered if the upload completes
   *       successfully.</li>
   * </ul>
   */
  STATE_CHANGED: 'state_changed'
};
/**
 * Represents the current state of a running upload.
 */

var TaskState = {
  /** The task is currently transferring data. */
  RUNNING: 'running',

  /** The task was paused by the user. */
  PAUSED: 'paused',

  /** The task completed successfully. */
  SUCCESS: 'success',

  /** The task was canceled. */
  CANCELED: 'canceled',

  /** The task failed with an error. */
  ERROR: 'error'
};

function taskStateFromInternalTaskState(state) {
  switch (state) {
    case "running"
    /* RUNNING */
    :
    case "pausing"
    /* PAUSING */
    :
    case "canceling"
    /* CANCELING */
    :
      return TaskState.RUNNING;

    case "paused"
    /* PAUSED */
    :
      return TaskState.PAUSED;

    case "success"
    /* SUCCESS */
    :
      return TaskState.SUCCESS;

    case "canceled"
    /* CANCELED */
    :
      return TaskState.CANCELED;

    case "error"
    /* ERROR */
    :
      return TaskState.ERROR;

    default:
      // TODO(andysoto): assert(false);
      return TaskState.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Error codes for requests made by the the XhrIo wrapper.
 */


var ErrorCode;

(function (ErrorCode) {
  ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
  ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
  ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */


var NetworkXhrIo =
/** @class */
function () {
  function NetworkXhrIo() {
    var _this = this;

    this.sent_ = false;
    this.xhr_ = new XMLHttpRequest();
    this.errorCode_ = ErrorCode.NO_ERROR;
    this.sendPromise_ = new Promise(function (resolve) {
      _this.xhr_.addEventListener('abort', function () {
        _this.errorCode_ = ErrorCode.ABORT;
        resolve(_this);
      });

      _this.xhr_.addEventListener('error', function () {
        _this.errorCode_ = ErrorCode.NETWORK_ERROR;
        resolve(_this);
      });

      _this.xhr_.addEventListener('load', function () {
        resolve(_this);
      });
    });
  }
  /**
   * @override
   */


  NetworkXhrIo.prototype.send = function (url, method, body, headers) {
    if (this.sent_) {
      throw internalError('cannot .send() more than once');
    }

    this.sent_ = true;
    this.xhr_.open(method, url, true);

    if (headers !== undefined) {
      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          this.xhr_.setRequestHeader(key, headers[key].toString());
        }
      }
    }

    if (body !== undefined) {
      this.xhr_.send(body);
    } else {
      this.xhr_.send();
    }

    return this.sendPromise_;
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getErrorCode = function () {
    if (!this.sent_) {
      throw internalError('cannot .getErrorCode() before sending');
    }

    return this.errorCode_;
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getStatus = function () {
    if (!this.sent_) {
      throw internalError('cannot .getStatus() before sending');
    }

    try {
      return this.xhr_.status;
    } catch (e) {
      return -1;
    }
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getResponseText = function () {
    if (!this.sent_) {
      throw internalError('cannot .getResponseText() before sending');
    }

    return this.xhr_.responseText;
  };
  /**
   * Aborts the request.
   * @override
   */


  NetworkXhrIo.prototype.abort = function () {
    this.xhr_.abort();
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.getResponseHeader = function (header) {
    return this.xhr_.getResponseHeader(header);
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.addEventListener('progress', listener);
    }
  };
  /**
   * @override
   */


  NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
    if (this.xhr_.upload != null) {
      this.xhr_.upload.removeEventListener('progress', listener);
    }
  };

  return NetworkXhrIo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Factory-like class for creating XhrIo instances.
 */


var XhrIoPool =
/** @class */
function () {
  function XhrIoPool() {}

  XhrIoPool.prototype.createXhrIo = function () {
    return new NetworkXhrIo();
  };

  return XhrIoPool;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Firebase Storage location data.
 *
 * @internal
 */


var Location =
/** @class */
function () {
  function Location(bucket, path) {
    this.bucket = bucket;
    this.path_ = path;
  }

  Object.defineProperty(Location.prototype, "path", {
    get: function get() {
      return this.path_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Location.prototype, "isRoot", {
    get: function get() {
      return this.path.length === 0;
    },
    enumerable: false,
    configurable: true
  });

  Location.prototype.fullServerUrl = function () {
    var encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
  };

  Location.prototype.bucketOnlyServerUrl = function () {
    var encode = encodeURIComponent;
    return '/b/' + encode(this.bucket) + '/o';
  };

  Location.makeFromBucketSpec = function (bucketString) {
    var bucketLocation;

    try {
      bucketLocation = Location.makeFromUrl(bucketString);
    } catch (e) {
      // Not valid URL, use as-is. This lets you put bare bucket names in
      // config.
      return new Location(bucketString, '');
    }

    if (bucketLocation.path === '') {
      return bucketLocation;
    } else {
      throw invalidDefaultBucket(bucketString);
    }
  };

  Location.makeFromUrl = function (url) {
    var location = null;
    var bucketDomain = '([A-Za-z0-9.\\-_]+)';

    function gsModify(loc) {
      if (loc.path.charAt(loc.path.length - 1) === '/') {
        loc.path_ = loc.path_.slice(0, -1);
      }
    }

    var gsPath = '(/(.*))?$';
    var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
    var gsIndices = {
      bucket: 1,
      path: 3
    };

    function httpModify(loc) {
      loc.path_ = decodeURIComponent(loc.path);
    }

    var version = 'v[A-Za-z0-9_]+';
    var firebaseStorageHost = DEFAULT_HOST.replace(/[.]/g, '\\.');
    var firebaseStoragePath = '(/([^?#]*).*)?$';
    var firebaseStorageRegExp = new RegExp("^https?://" + firebaseStorageHost + "/" + version + "/b/" + bucketDomain + "/o" + firebaseStoragePath, 'i');
    var firebaseStorageIndices = {
      bucket: 1,
      path: 3
    };
    var cloudStorageHost = '(?:storage.googleapis.com|storage.cloud.google.com)';
    var cloudStoragePath = '([^?#]*)';
    var cloudStorageRegExp = new RegExp("^https?://" + cloudStorageHost + "/" + bucketDomain + "/" + cloudStoragePath, 'i');
    var cloudStorageIndices = {
      bucket: 1,
      path: 2
    };
    var groups = [{
      regex: gsRegex,
      indices: gsIndices,
      postModify: gsModify
    }, {
      regex: firebaseStorageRegExp,
      indices: firebaseStorageIndices,
      postModify: httpModify
    }, {
      regex: cloudStorageRegExp,
      indices: cloudStorageIndices,
      postModify: httpModify
    }];

    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var captures = group.regex.exec(url);

      if (captures) {
        var bucketValue = captures[group.indices.bucket];
        var pathValue = captures[group.indices.path];

        if (!pathValue) {
          pathValue = '';
        }

        location = new Location(bucketValue, pathValue);
        group.postModify(location);
        break;
      }
    }

    if (location == null) {
      throw invalidUrl(url);
    }

    return location;
  };

  return Location;
}();
/**
 * A request whose promise always fails.
 */


var FailRequest =
/** @class */
function () {
  function FailRequest(error) {
    this.promise_ = Promise.reject(error);
  }
  /** @inheritDoc */


  FailRequest.prototype.getPromise = function () {
    return this.promise_;
  };
  /** @inheritDoc */


  FailRequest.prototype.cancel = function (_appDelete) {};

  return FailRequest;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */


function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
  // TODO(andysoto): make this code cleaner (probably refactor into an actual
  // type instead of a bunch of functions with state shared in the closure)
  var waitSeconds = 1; // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
  // TODO: find a way to exclude Node type definition for storage because storage only works in browser
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var timeoutId = null;
  var hitTimeout = false;
  var cancelState = 0;

  function canceled() {
    return cancelState === 2;
  }

  var triggeredCallback = false;

  function triggerCallback() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!triggeredCallback) {
      triggeredCallback = true;
      callback.apply(null, args);
    }
  }

  function callWithDelay(millis) {
    timeoutId = setTimeout(function () {
      timeoutId = null;
      f(handler, canceled());
    }, millis);
  }

  function handler(success) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (triggeredCallback) {
      return;
    }

    if (success) {
      triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArray"])([null, success], args));
      return;
    }

    var mustStop = canceled() || hitTimeout;

    if (mustStop) {
      triggerCallback.call.apply(triggerCallback, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spreadArray"])([null, success], args));
      return;
    }

    if (waitSeconds < 64) {
      /* TODO(andysoto): don't back off so quickly if we know we're offline. */
      waitSeconds *= 2;
    }

    var waitMillis;

    if (cancelState === 1) {
      cancelState = 2;
      waitMillis = 0;
    } else {
      waitMillis = (waitSeconds + Math.random()) * 1000;
    }

    callWithDelay(waitMillis);
  }

  var stopped = false;

  function stop(wasTimeout) {
    if (stopped) {
      return;
    }

    stopped = true;

    if (triggeredCallback) {
      return;
    }

    if (timeoutId !== null) {
      if (!wasTimeout) {
        cancelState = 2;
      }

      clearTimeout(timeoutId);
      callWithDelay(0);
    } else {
      if (!wasTimeout) {
        cancelState = 1;
      }
    }
  }

  callWithDelay(0);
  setTimeout(function () {
    hitTimeout = true;
    stop(true);
  }, timeout);
  return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */


function stop(id) {
  id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isJustDef(p) {
  return p !== void 0;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(p) {
  return typeof p === 'function';
}

function isNonArrayObject(p) {
  return typeof p === 'object' && !Array.isArray(p);
}

function isString(p) {
  return typeof p === 'string' || p instanceof String;
}

function isNativeBlob(p) {
  return isNativeBlobDefined() && p instanceof Blob;
}

function isNativeBlobDefined() {
  return typeof Blob !== 'undefined';
}

function validateNumber(argument, minValue, maxValue, value) {
  if (value < minValue) {
    throw invalidArgument("Invalid value for '" + argument + "'. Expected " + minValue + " or greater.");
  }

  if (value > maxValue) {
    throw invalidArgument("Invalid value for '" + argument + "'. Expected " + maxValue + " or less.");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function makeUrl(urlPart) {
  return "https://" + DEFAULT_HOST + "/v0" + urlPart;
}

function makeQueryString(params) {
  var encode = encodeURIComponent;
  var queryPart = '?';

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var nextPart = encode(key) + '=' + encode(params[key]);
      queryPart = queryPart + nextPart + '&';
    }
  } // Chop off the extra '&' or '?' on the end


  queryPart = queryPart.slice(0, -1);
  return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NetworkRequest =
/** @class */
function () {
  function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
    var _this = this;

    this.pendingXhr_ = null;
    this.backoffId_ = null;
    this.canceled_ = false;
    this.appDelete_ = false;
    this.url_ = url;
    this.method_ = method;
    this.headers_ = headers;
    this.body_ = body;
    this.successCodes_ = successCodes.slice();
    this.additionalRetryCodes_ = additionalRetryCodes.slice();
    this.callback_ = callback;
    this.errorCallback_ = errorCallback;
    this.progressCallback_ = progressCallback;
    this.timeout_ = timeout;
    this.pool_ = pool;
    this.promise_ = new Promise(function (resolve, reject) {
      _this.resolve_ = resolve;
      _this.reject_ = reject;

      _this.start_();
    });
  }
  /**
   * Actually starts the retry loop.
   */


  NetworkRequest.prototype.start_ = function () {
    var self = this;

    function doTheRequest(backoffCallback, canceled) {
      if (canceled) {
        backoffCallback(false, new RequestEndStatus(false, null, true));
        return;
      }

      var xhr = self.pool_.createXhrIo();
      self.pendingXhr_ = xhr;

      function progressListener(progressEvent) {
        var loaded = progressEvent.loaded;
        var total = progressEvent.lengthComputable ? progressEvent.total : -1;

        if (self.progressCallback_ !== null) {
          self.progressCallback_(loaded, total);
        }
      }

      if (self.progressCallback_ !== null) {
        xhr.addUploadProgressListener(progressListener);
      } // eslint-disable-next-line @typescript-eslint/no-floating-promises


      xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
        if (self.progressCallback_ !== null) {
          xhr.removeUploadProgressListener(progressListener);
        }

        self.pendingXhr_ = null;
        xhr = xhr;
        var hitServer = xhr.getErrorCode() === ErrorCode.NO_ERROR;
        var status = xhr.getStatus();

        if (!hitServer || self.isRetryStatusCode_(status)) {
          var wasCanceled = xhr.getErrorCode() === ErrorCode.ABORT;
          backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
          return;
        }

        var successCode = self.successCodes_.indexOf(status) !== -1;
        backoffCallback(true, new RequestEndStatus(successCode, xhr));
      });
    }
    /**
     * @param requestWentThrough - True if the request eventually went
     *     through, false if it hit the retry limit or was canceled.
     */


    function backoffDone(requestWentThrough, status) {
      var resolve = self.resolve_;
      var reject = self.reject_;
      var xhr = status.xhr;

      if (status.wasSuccessCode) {
        try {
          var result = self.callback_(xhr, xhr.getResponseText());

          if (isJustDef(result)) {
            resolve(result);
          } else {
            resolve();
          }
        } catch (e) {
          reject(e);
        }
      } else {
        if (xhr !== null) {
          var err = unknown();
          err.serverResponse = xhr.getResponseText();

          if (self.errorCallback_) {
            reject(self.errorCallback_(xhr, err));
          } else {
            reject(err);
          }
        } else {
          if (status.canceled) {
            var err = self.appDelete_ ? appDeleted() : canceled();
            reject(err);
          } else {
            var err = retryLimitExceeded();
            reject(err);
          }
        }
      }
    }

    if (this.canceled_) {
      backoffDone(false, new RequestEndStatus(false, null, true));
    } else {
      this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
  };
  /** @inheritDoc */


  NetworkRequest.prototype.getPromise = function () {
    return this.promise_;
  };
  /** @inheritDoc */


  NetworkRequest.prototype.cancel = function (appDelete) {
    this.canceled_ = true;
    this.appDelete_ = appDelete || false;

    if (this.backoffId_ !== null) {
      stop(this.backoffId_);
    }

    if (this.pendingXhr_ !== null) {
      this.pendingXhr_.abort();
    }
  };

  NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
    // The codes for which to retry came from this page:
    // https://cloud.google.com/storage/docs/exponential-backoff
    var isFiveHundredCode = status >= 500 && status < 600;
    var extraRetryCodes = [// Request Timeout: web server didn't receive full request in time.
    408, // Too Many Requests: you're getting rate-limited, basically.
    429];
    var isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    var isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
  };

  return NetworkRequest;
}();
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */


var RequestEndStatus =
/** @class */
function () {
  function RequestEndStatus(wasSuccessCode, xhr, canceled) {
    this.wasSuccessCode = wasSuccessCode;
    this.xhr = xhr;
    this.canceled = !!canceled;
  }

  return RequestEndStatus;
}();

function addAuthHeader_(headers, authToken) {
  if (authToken !== null && authToken.length > 0) {
    headers['Authorization'] = 'Firebase ' + authToken;
  }
}

function addVersionHeader_(headers, firebaseVersion) {
  headers['X-Firebase-Storage-Version'] = 'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}

function addGmpidHeader_(headers, appId) {
  if (appId) {
    headers['X-Firebase-GMPID'] = appId;
  }
}

function makeRequest(requestInfo, appId, authToken, pool, firebaseVersion) {
  var queryPart = makeQueryString(requestInfo.urlParams);
  var url = requestInfo.url + queryPart;
  var headers = Object.assign({}, requestInfo.headers);
  addGmpidHeader_(headers, appId);
  addAuthHeader_(headers, authToken);
  addVersionHeader_(headers, firebaseVersion);
  return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getBlobBuilder() {
  if (typeof BlobBuilder !== 'undefined') {
    return BlobBuilder;
  } else if (typeof WebKitBlobBuilder !== 'undefined') {
    return WebKitBlobBuilder;
  } else {
    return undefined;
  }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */


function getBlob() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var BlobBuilder = getBlobBuilder();

  if (BlobBuilder !== undefined) {
    var bb = new BlobBuilder();

    for (var i = 0; i < args.length; i++) {
      bb.append(args[i]);
    }

    return bb.getBlob();
  } else {
    if (isNativeBlobDefined()) {
      return new Blob(args);
    } else {
      throw new FirebaseStorageError("unsupported-environment"
      /* UNSUPPORTED_ENVIRONMENT */
      , "This browser doesn't seem to support creating Blobs");
    }
  }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */


function sliceBlob(blob, start, end) {
  if (blob.webkitSlice) {
    return blob.webkitSlice(start, end);
  } else if (blob.mozSlice) {
    return blob.mozSlice(start, end);
  } else if (blob.slice) {
    return blob.slice(start, end);
  }

  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */


var FbsBlob =
/** @class */
function () {
  function FbsBlob(data, elideCopy) {
    var size = 0;
    var blobType = '';

    if (isNativeBlob(data)) {
      this.data_ = data;
      size = data.size;
      blobType = data.type;
    } else if (data instanceof ArrayBuffer) {
      if (elideCopy) {
        this.data_ = new Uint8Array(data);
      } else {
        this.data_ = new Uint8Array(data.byteLength);
        this.data_.set(new Uint8Array(data));
      }

      size = this.data_.length;
    } else if (data instanceof Uint8Array) {
      if (elideCopy) {
        this.data_ = data;
      } else {
        this.data_ = new Uint8Array(data.length);
        this.data_.set(data);
      }

      size = data.length;
    }

    this.size_ = size;
    this.type_ = blobType;
  }

  FbsBlob.prototype.size = function () {
    return this.size_;
  };

  FbsBlob.prototype.type = function () {
    return this.type_;
  };

  FbsBlob.prototype.slice = function (startByte, endByte) {
    if (isNativeBlob(this.data_)) {
      var realBlob = this.data_;
      var sliced = sliceBlob(realBlob, startByte, endByte);

      if (sliced === null) {
        return null;
      }

      return new FbsBlob(sliced);
    } else {
      var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
      return new FbsBlob(slice, true);
    }
  };

  FbsBlob.getBlob = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (isNativeBlobDefined()) {
      var blobby = args.map(function (val) {
        if (val instanceof FbsBlob) {
          return val.data_;
        } else {
          return val;
        }
      });
      return new FbsBlob(getBlob.apply(null, blobby));
    } else {
      var uint8Arrays = args.map(function (val) {
        if (isString(val)) {
          return dataFromString(StringFormat.RAW, val).data;
        } else {
          // Blobs don't exist, so this has to be a Uint8Array.
          return val.data_;
        }
      });
      var finalLength_1 = 0;
      uint8Arrays.forEach(function (array) {
        finalLength_1 += array.byteLength;
      });
      var merged_1 = new Uint8Array(finalLength_1);
      var index_1 = 0;
      uint8Arrays.forEach(function (array) {
        for (var i = 0; i < array.length; i++) {
          merged_1[index_1++] = array[i];
        }
      });
      return new FbsBlob(merged_1, true);
    }
  };

  FbsBlob.prototype.uploadData = function () {
    return this.data_;
  };

  return FbsBlob;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */


function jsonObjectOrNull(s) {
  var obj;

  try {
    obj = JSON.parse(s);
  } catch (e) {
    return null;
  }

  if (isNonArrayObject(obj)) {
    return obj;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Contains helper methods for manipulating paths.
 */

/**
 * @return Null if the path is already at the root.
 */


function parent(path) {
  if (path.length === 0) {
    return null;
  }

  var index = path.lastIndexOf('/');

  if (index === -1) {
    return '';
  }

  var newPath = path.slice(0, index);
  return newPath;
}

function child(path, childPath) {
  var canonicalChildPath = childPath.split('/').filter(function (component) {
    return component.length > 0;
  }).join('/');

  if (path.length === 0) {
    return canonicalChildPath;
  } else {
    return path + '/' + canonicalChildPath;
  }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */


function lastComponent(path) {
  var index = path.lastIndexOf('/', path.length - 2);

  if (index === -1) {
    return path;
  } else {
    return path.slice(index + 1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function noXform_(metadata, value) {
  return value;
}

var Mapping =
/** @class */
function () {
  function Mapping(server, local, writable, xform) {
    this.server = server;
    this.local = local || server;
    this.writable = !!writable;
    this.xform = xform || noXform_;
  }

  return Mapping;
}();

var mappings_ = null;

function xformPath(fullPath) {
  if (!isString(fullPath) || fullPath.length < 2) {
    return fullPath;
  } else {
    return lastComponent(fullPath);
  }
}

function getMappings() {
  if (mappings_) {
    return mappings_;
  }

  var mappings = [];
  mappings.push(new Mapping('bucket'));
  mappings.push(new Mapping('generation'));
  mappings.push(new Mapping('metageneration'));
  mappings.push(new Mapping('name', 'fullPath', true));

  function mappingsXformPath(_metadata, fullPath) {
    return xformPath(fullPath);
  }

  var nameMapping = new Mapping('name');
  nameMapping.xform = mappingsXformPath;
  mappings.push(nameMapping);
  /**
   * Coerces the second param to a number, if it is defined.
   */

  function xformSize(_metadata, size) {
    if (size !== undefined) {
      return Number(size);
    } else {
      return size;
    }
  }

  var sizeMapping = new Mapping('size');
  sizeMapping.xform = xformSize;
  mappings.push(sizeMapping);
  mappings.push(new Mapping('timeCreated'));
  mappings.push(new Mapping('updated'));
  mappings.push(new Mapping('md5Hash', null, true));
  mappings.push(new Mapping('cacheControl', null, true));
  mappings.push(new Mapping('contentDisposition', null, true));
  mappings.push(new Mapping('contentEncoding', null, true));
  mappings.push(new Mapping('contentLanguage', null, true));
  mappings.push(new Mapping('contentType', null, true));
  mappings.push(new Mapping('metadata', 'customMetadata', true));
  mappings_ = mappings;
  return mappings_;
}

function addRef(metadata, service) {
  function generateRef() {
    var bucket = metadata['bucket'];
    var path = metadata['fullPath'];
    var loc = new Location(bucket, path);
    return service._makeStorageReference(loc);
  }

  Object.defineProperty(metadata, 'ref', {
    get: generateRef
  });
}

function fromResource(service, resource, mappings) {
  var metadata = {};
  metadata['type'] = 'file';
  var len = mappings.length;

  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];
    metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
  }

  addRef(metadata, service);
  return metadata;
}

function fromResourceString(service, resourceString, mappings) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  var resource = obj;
  return fromResource(service, resource, mappings);
}

function downloadUrlFromResourceString(metadata, resourceString) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  if (!isString(obj['downloadTokens'])) {
    // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
  }

  var tokens = obj['downloadTokens'];

  if (tokens.length === 0) {
    return null;
  }

  var encode = encodeURIComponent;
  var tokensList = tokens.split(',');
  var urls = tokensList.map(function (token) {
    var bucket = metadata['bucket'];
    var path = metadata['fullPath'];
    var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
    var base = makeUrl(urlPart);
    var queryString = makeQueryString({
      alt: 'media',
      token: token
    });
    return base + queryString;
  });
  return urls[0];
}

function toResourceString(metadata, mappings) {
  var resource = {};
  var len = mappings.length;

  for (var i = 0; i < len; i++) {
    var mapping = mappings[i];

    if (mapping.writable) {
      resource[mapping.server] = metadata[mapping.local];
    }
  }

  return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var PREFIXES_KEY = 'prefixes';
var ITEMS_KEY = 'items';

function fromBackendResponse(service, bucket, resource) {
  var listResult = {
    prefixes: [],
    items: [],
    nextPageToken: resource['nextPageToken']
  };

  if (resource[PREFIXES_KEY]) {
    for (var _i = 0, _a = resource[PREFIXES_KEY]; _i < _a.length; _i++) {
      var path = _a[_i];
      var pathWithoutTrailingSlash = path.replace(/\/$/, '');

      var reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));

      listResult.prefixes.push(reference);
    }
  }

  if (resource[ITEMS_KEY]) {
    for (var _b = 0, _c = resource[ITEMS_KEY]; _b < _c.length; _b++) {
      var item = _c[_b];

      var reference = service._makeStorageReference(new Location(bucket, item['name']));

      listResult.items.push(reference);
    }
  }

  return listResult;
}

function fromResponseString(service, bucket, resourceString) {
  var obj = jsonObjectOrNull(resourceString);

  if (obj === null) {
    return null;
  }

  var resource = obj;
  return fromBackendResponse(service, bucket, resource);
}

var RequestInfo =
/** @class */
function () {
  function RequestInfo(url, method,
  /**
   * Returns the value with which to resolve the request's promise. Only called
   * if the request is successful. Throw from this function to reject the
   * returned Request's promise with the thrown error.
   * Note: The XhrIo passed to this function may be reused after this callback
   * returns. Do not keep a reference to it in any way.
   */
  handler, timeout) {
    this.url = url;
    this.method = method;
    this.handler = handler;
    this.timeout = timeout;
    this.urlParams = {};
    this.headers = {};
    this.body = null;
    this.errorHandler = null;
    /**
     * Called with the current number of bytes uploaded and total size (-1 if not
     * computable) of the request body (i.e. used to report upload progress).
     */

    this.progressCallback = null;
    this.successCodes = [200];
    this.additionalRetryCodes = [];
  }

  return RequestInfo;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */


function handlerCheck(cndn) {
  if (!cndn) {
    throw unknown();
  }
}

function metadataHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return metadata;
  }

  return handler;
}

function listHandler(service, bucket) {
  function handler(xhr, text) {
    var listResult = fromResponseString(service, bucket, text);
    handlerCheck(listResult !== null);
    return listResult;
  }

  return handler;
}

function downloadUrlHandler(service, mappings) {
  function handler(xhr, text) {
    var metadata = fromResourceString(service, text, mappings);
    handlerCheck(metadata !== null);
    return downloadUrlFromResourceString(metadata, text);
  }

  return handler;
}

function sharedErrorHandler(location) {
  function errorHandler(xhr, err) {
    var newErr;

    if (xhr.getStatus() === 401) {
      newErr = unauthenticated();
    } else {
      if (xhr.getStatus() === 402) {
        newErr = quotaExceeded(location.bucket);
      } else {
        if (xhr.getStatus() === 403) {
          newErr = unauthorized(location.path);
        } else {
          newErr = err;
        }
      }
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function objectErrorHandler(location) {
  var shared = sharedErrorHandler(location);

  function errorHandler(xhr, err) {
    var newErr = shared(xhr, err);

    if (xhr.getStatus() === 404) {
      newErr = objectNotFound(location.path);
    }

    newErr.serverResponse = err.serverResponse;
    return newErr;
  }

  return errorHandler;
}

function getMetadata(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function list(service, location, delimiter, pageToken, maxResults) {
  var urlParams = {};

  if (location.isRoot) {
    urlParams['prefix'] = '';
  } else {
    urlParams['prefix'] = location.path + '/';
  }

  if (delimiter && delimiter.length > 0) {
    urlParams['delimiter'] = delimiter;
  }

  if (pageToken) {
    urlParams['pageToken'] = pageToken;
  }

  if (maxResults) {
    urlParams['maxResults'] = maxResults;
  }

  var urlPart = location.bucketOnlyServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}

function getDownloadUrl(service, location, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'GET';
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function updateMetadata(service, location, metadata, mappings) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'PATCH';
  var body = toResourceString(metadata, mappings);
  var headers = {
    'Content-Type': 'application/json; charset=utf-8'
  };
  var timeout = service.maxOperationRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function deleteObject(service, location) {
  var urlPart = location.fullServerUrl();
  var url = makeUrl(urlPart);
  var method = 'DELETE';
  var timeout = service.maxOperationRetryTime;

  function handler(_xhr, _text) {}

  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.successCodes = [200, 204];
  requestInfo.errorHandler = objectErrorHandler(location);
  return requestInfo;
}

function determineContentType_(metadata, blob) {
  return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}

function metadataForUpload_(location, blob, metadata) {
  var metadataClone = Object.assign({}, metadata);
  metadataClone['fullPath'] = location.path;
  metadataClone['size'] = blob.size();

  if (!metadataClone['contentType']) {
    metadataClone['contentType'] = determineContentType_(null, blob);
  }

  return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */


function multipartUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var headers = {
    'X-Goog-Upload-Protocol': 'multipart'
  };

  function genBoundary() {
    var str = '';

    for (var i = 0; i < 2; i++) {
      str = str + Math.random().toString().slice(2);
    }

    return str;
  }

  var boundary = genBoundary();
  headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
  var metadata_ = metadataForUpload_(location, blob, metadata);
  var metadataString = toResourceString(metadata_, mappings);
  var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
  var postBlobPart = '\r\n--' + boundary + '--';
  var body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);

  if (body === null) {
    throw cannotSliceBlob();
  }

  var urlParams = {
    name: metadata_['fullPath']
  };
  var url = makeUrl(urlPart);
  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */


var ResumableUploadStatus =
/** @class */
function () {
  function ResumableUploadStatus(current, total, finalized, metadata) {
    this.current = current;
    this.total = total;
    this.finalized = !!finalized;
    this.metadata = metadata || null;
  }

  return ResumableUploadStatus;
}();

function checkResumeHeader_(xhr, allowed) {
  var status = null;

  try {
    status = xhr.getResponseHeader('X-Goog-Upload-Status');
  } catch (e) {
    handlerCheck(false);
  }

  var allowedStatus = allowed || ['active'];
  handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
  return status;
}

function createResumableUpload(service, location, mappings, blob, metadata) {
  var urlPart = location.bucketOnlyServerUrl();
  var metadataForUpload = metadataForUpload_(location, blob, metadata);
  var urlParams = {
    name: metadataForUpload['fullPath']
  };
  var url = makeUrl(urlPart);
  var method = 'POST';
  var headers = {
    'X-Goog-Upload-Protocol': 'resumable',
    'X-Goog-Upload-Command': 'start',
    'X-Goog-Upload-Header-Content-Length': blob.size(),
    'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
    'Content-Type': 'application/json; charset=utf-8'
  };
  var body = toResourceString(metadataForUpload, mappings);
  var timeout = service.maxUploadRetryTime;

  function handler(xhr) {
    checkResumeHeader_(xhr);
    var url;

    try {
      url = xhr.getResponseHeader('X-Goog-Upload-URL');
    } catch (e) {
      handlerCheck(false);
    }

    handlerCheck(isString(url));
    return url;
  }

  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.urlParams = urlParams;
  requestInfo.headers = headers;
  requestInfo.body = body;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */


function getResumableUploadStatus(service, location, url, blob) {
  var headers = {
    'X-Goog-Upload-Command': 'query'
  };

  function handler(xhr) {
    var status = checkResumeHeader_(xhr, ['active', 'final']);
    var sizeString = null;

    try {
      sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
    } catch (e) {
      handlerCheck(false);
    }

    if (!sizeString) {
      // null or empty string
      handlerCheck(false);
    }

    var size = Number(sizeString);
    handlerCheck(!isNaN(size));
    return new ResumableUploadStatus(size, blob.size(), status === 'final');
  }

  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */


var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */

function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
  // TODO(andysoto): standardize on internal asserts
  // assert(!(opt_status && opt_status.finalized));
  var status_ = new ResumableUploadStatus(0, 0);

  if (status) {
    status_.current = status.current;
    status_.total = status.total;
  } else {
    status_.current = 0;
    status_.total = blob.size();
  }

  if (blob.size() !== status_.total) {
    throw serverFileWrongSize();
  }

  var bytesLeft = status_.total - status_.current;
  var bytesToUpload = bytesLeft;

  if (chunkSize > 0) {
    bytesToUpload = Math.min(bytesToUpload, chunkSize);
  }

  var startByte = status_.current;
  var endByte = startByte + bytesToUpload;
  var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
  var headers = {
    'X-Goog-Upload-Command': uploadCommand,
    'X-Goog-Upload-Offset': status_.current
  };
  var body = blob.slice(startByte, endByte);

  if (body === null) {
    throw cannotSliceBlob();
  }

  function handler(xhr, text) {
    // TODO(andysoto): Verify the MD5 of each uploaded range:
    // the 'x-range-md5' header comes back with status code 308 responses.
    // We'll only be able to bail out though, because you can't re-upload a
    // range that you previously uploaded.
    var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
    var newCurrent = status_.current + bytesToUpload;
    var size = blob.size();
    var metadata;

    if (uploadStatus === 'final') {
      metadata = metadataHandler(service, mappings)(xhr, text);
    } else {
      metadata = null;
    }

    return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
  }

  var method = 'POST';
  var timeout = service.maxUploadRetryTime;
  var requestInfo = new RequestInfo(url, method, handler, timeout);
  requestInfo.headers = headers;
  requestInfo.body = body.uploadData();
  requestInfo.progressCallback = progressCallback || null;
  requestInfo.errorHandler = sharedErrorHandler(location);
  return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Observer =
/** @class */
function () {
  function Observer(nextOrObserver, error, complete) {
    var asFunctions = isFunction(nextOrObserver) || error != null || complete != null;

    if (asFunctions) {
      this.next = nextOrObserver;
      this.error = error;
      this.complete = complete;
    } else {
      var observer = nextOrObserver;
      this.next = observer.next;
      this.error = observer.error;
      this.complete = observer.complete;
    }
  }

  return Observer;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(f) {
  return function () {
    var argsToForward = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      argsToForward[_i] = arguments[_i];
    } // eslint-disable-next-line @typescript-eslint/no-floating-promises


    Promise.resolve().then(function () {
      return f.apply(void 0, argsToForward);
    });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */


var UploadTask =
/** @class */
function () {
  /**
   * @param ref - The firebaseStorage.Reference object this task came
   *     from, untyped to avoid cyclic dependencies.
   * @param blob - The blob to upload.
   */
  function UploadTask(ref, blob, metadata) {
    var _this = this;

    if (metadata === void 0) {
      metadata = null;
    }
    /**
     * Number of bytes transferred so far.
     */


    this._transferred = 0;
    this._needToFetchStatus = false;
    this._needToFetchMetadata = false;
    this._observers = [];
    this._error = undefined;
    this._uploadUrl = undefined;
    this._request = undefined;
    this._chunkMultiplier = 1;
    this._resolve = undefined;
    this._reject = undefined;
    this._ref = ref;
    this._blob = blob;
    this._metadata = metadata;
    this._mappings = getMappings();
    this._resumable = this._shouldDoResumable(this._blob);
    this._state = "running"
    /* RUNNING */
    ;

    this._errorHandler = function (error) {
      _this._request = undefined;
      _this._chunkMultiplier = 1;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        _this._needToFetchStatus = true;

        _this.completeTransitions_();
      } else {
        _this._error = error;

        _this._transition("error"
        /* ERROR */
        );
      }
    };

    this._metadataErrorHandler = function (error) {
      _this._request = undefined;

      if (error._codeEquals("canceled"
      /* CANCELED */
      )) {
        _this.completeTransitions_();
      } else {
        _this._error = error;

        _this._transition("error"
        /* ERROR */
        );
      }
    };

    this._promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;

      _this._start();
    }); // Prevent uncaught rejections on the internal promise from bubbling out
    // to the top level with a dummy handler.

    this._promise.then(null, function () {});
  }

  UploadTask.prototype._makeProgressCallback = function () {
    var _this = this;

    var sizeBefore = this._transferred;
    return function (loaded) {
      return _this._updateProgress(sizeBefore + loaded);
    };
  };

  UploadTask.prototype._shouldDoResumable = function (blob) {
    return blob.size() > 256 * 1024;
  };

  UploadTask.prototype._start = function () {
    if (this._state !== "running"
    /* RUNNING */
    ) {
        // This can happen if someone pauses us in a resume callback, for example.
        return;
      }

    if (this._request !== undefined) {
      return;
    }

    if (this._resumable) {
      if (this._uploadUrl === undefined) {
        this._createResumable();
      } else {
        if (this._needToFetchStatus) {
          this._fetchStatus();
        } else {
          if (this._needToFetchMetadata) {
            // Happens if we miss the metadata on upload completion.
            this._fetchMetadata();
          } else {
            this._continueUpload();
          }
        }
      }
    } else {
      this._oneShotUpload();
    }
  };

  UploadTask.prototype._resolveToken = function (callback) {
    var _this = this; // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this._ref.storage._getAuthToken().then(function (authToken) {
      switch (_this._state) {
        case "running"
        /* RUNNING */
        :
          callback(authToken);
          break;

        case "canceling"
        /* CANCELING */
        :
          _this._transition("canceled"
          /* CANCELED */
          );

          break;

        case "pausing"
        /* PAUSING */
        :
          _this._transition("paused"
          /* PAUSED */
          );

          break;
      }
    });
  }; // TODO(andysoto): assert false


  UploadTask.prototype._createResumable = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = createResumableUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

      var createRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = createRequest;
      createRequest.getPromise().then(function (url) {
        _this._request = undefined;
        _this._uploadUrl = url;
        _this._needToFetchStatus = false;

        _this.completeTransitions_();
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._fetchStatus = function () {
    var _this = this; // TODO(andysoto): assert(this.uploadUrl_ !== null);


    var url = this._uploadUrl;

    this._resolveToken(function (authToken) {
      var requestInfo = getResumableUploadStatus(_this._ref.storage, _this._ref._location, url, _this._blob);

      var statusRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = statusRequest;
      statusRequest.getPromise().then(function (status) {
        status = status;
        _this._request = undefined;

        _this._updateProgress(status.current);

        _this._needToFetchStatus = false;

        if (status.finalized) {
          _this._needToFetchMetadata = true;
        }

        _this.completeTransitions_();
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._continueUpload = function () {
    var _this = this;

    var chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
    var status = new ResumableUploadStatus(this._transferred, this._blob.size()); // TODO(andysoto): assert(this.uploadUrl_ !== null);

    var url = this._uploadUrl;

    this._resolveToken(function (authToken) {
      var requestInfo;

      try {
        requestInfo = continueResumableUpload(_this._ref._location, _this._ref.storage, url, _this._blob, chunkSize, _this._mappings, status, _this._makeProgressCallback());
      } catch (e) {
        _this._error = e;

        _this._transition("error"
        /* ERROR */
        );

        return;
      }

      var uploadRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = uploadRequest;
      uploadRequest.getPromise().then(function (newStatus) {
        _this._increaseMultiplier();

        _this._request = undefined;

        _this._updateProgress(newStatus.current);

        if (newStatus.finalized) {
          _this._metadata = newStatus.metadata;

          _this._transition("success"
          /* SUCCESS */
          );
        } else {
          _this.completeTransitions_();
        }
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._increaseMultiplier = function () {
    var currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier; // Max chunk size is 32M.

    if (currentSize < 32 * 1024 * 1024) {
      this._chunkMultiplier *= 2;
    }
  };

  UploadTask.prototype._fetchMetadata = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = getMetadata(_this._ref.storage, _this._ref._location, _this._mappings);

      var metadataRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = metadataRequest;
      metadataRequest.getPromise().then(function (metadata) {
        _this._request = undefined;
        _this._metadata = metadata;

        _this._transition("success"
        /* SUCCESS */
        );
      }, _this._metadataErrorHandler);
    });
  };

  UploadTask.prototype._oneShotUpload = function () {
    var _this = this;

    this._resolveToken(function (authToken) {
      var requestInfo = multipartUpload(_this._ref.storage, _this._ref._location, _this._mappings, _this._blob, _this._metadata);

      var multipartRequest = _this._ref.storage._makeRequest(requestInfo, authToken);

      _this._request = multipartRequest;
      multipartRequest.getPromise().then(function (metadata) {
        _this._request = undefined;
        _this._metadata = metadata;

        _this._updateProgress(_this._blob.size());

        _this._transition("success"
        /* SUCCESS */
        );
      }, _this._errorHandler);
    });
  };

  UploadTask.prototype._updateProgress = function (transferred) {
    var old = this._transferred;
    this._transferred = transferred; // A progress update can make the "transferred" value smaller (e.g. a
    // partial upload not completed by server, after which the "transferred"
    // value may reset to the value at the beginning of the request).

    if (this._transferred !== old) {
      this._notifyObservers();
    }
  };

  UploadTask.prototype._transition = function (state) {
    if (this._state === state) {
      return;
    }

    switch (state) {
      case "canceling"
      /* CANCELING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "pausing"
      /* PAUSING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING);
        this._state = state;

        if (this._request !== undefined) {
          this._request.cancel();
        }

        break;

      case "running"
      /* RUNNING */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.PAUSING);
        var wasPaused = this._state === "paused"
        /* PAUSED */
        ;
        this._state = state;

        if (wasPaused) {
          this._notifyObservers();

          this._start();
        }

        break;

      case "paused"
      /* PAUSED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSING);
        this._state = state;

        this._notifyObservers();

        break;

      case "canceled"
      /* CANCELED */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.PAUSED ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._error = canceled();
        this._state = state;

        this._notifyObservers();

        break;

      case "error"
      /* ERROR */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;

      case "success"
      /* SUCCESS */
      :
        // TODO(andysoto):
        // assert(this.state_ === InternalTaskState.RUNNING ||
        //        this.state_ === InternalTaskState.PAUSING ||
        //        this.state_ === InternalTaskState.CANCELING);
        this._state = state;

        this._notifyObservers();

        break;
    }
  };

  UploadTask.prototype.completeTransitions_ = function () {
    switch (this._state) {
      case "pausing"
      /* PAUSING */
      :
        this._transition("paused"
        /* PAUSED */
        );

        break;

      case "canceling"
      /* CANCELING */
      :
        this._transition("canceled"
        /* CANCELED */
        );

        break;

      case "running"
      /* RUNNING */
      :
        this._start();

        break;
    }
  };

  Object.defineProperty(UploadTask.prototype, "snapshot", {
    /**
     * A snapshot of the current task state.
     */
    get: function get() {
      var externalState = taskStateFromInternalTaskState(this._state);
      return {
        bytesTransferred: this._transferred,
        totalBytes: this._blob.size(),
        state: externalState,
        metadata: this._metadata,
        task: this,
        ref: this._ref
      };
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Adds a callback for an event.
   * @param type - The type of event to listen for.
   * @param nextOrObserver -
   *     The `next` function, which gets called for each item in
   *     the event stream, or an observer object with some or all of these three
   *     properties (`next`, `error`, `complete`).
   * @param error - A function that gets called with a `FirebaseStorageError`
   *     if the event stream ends due to an error.
   * @param completed - A function that gets called if the
   *     event stream ends normally.
   * @returns
   *     If only the event argument is passed, returns a function you can use to
   *     add callbacks (see the examples above). If more than just the event
   *     argument is passed, returns a function you can call to unregister the
   *     callbacks.
   */

  UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
    var _this = this;

    var observer = new Observer(nextOrObserver, error, completed);

    this._addObserver(observer);

    return function () {
      _this._removeObserver(observer);
    };
  };
  /**
   * This object behaves like a Promise, and resolves with its snapshot data
   * when the upload completes.
   * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
   * @param onRejected - The rejection callback.
   */


  UploadTask.prototype.then = function (onFulfilled, onRejected) {
    // These casts are needed so that TypeScript can infer the types of the
    // resulting Promise.
    return this._promise.then(onFulfilled, onRejected);
  };
  /**
   * Equivalent to calling `then(null, onRejected)`.
   */


  UploadTask.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };
  /**
   * Adds the given observer.
   */


  UploadTask.prototype._addObserver = function (observer) {
    this._observers.push(observer);

    this._notifyObserver(observer);
  };
  /**
   * Removes the given observer.
   */


  UploadTask.prototype._removeObserver = function (observer) {
    var i = this._observers.indexOf(observer);

    if (i !== -1) {
      this._observers.splice(i, 1);
    }
  };

  UploadTask.prototype._notifyObservers = function () {
    var _this = this;

    this._finishPromise();

    var observers = this._observers.slice();

    observers.forEach(function (observer) {
      _this._notifyObserver(observer);
    });
  };

  UploadTask.prototype._finishPromise = function () {
    if (this._resolve !== undefined) {
      var triggered = true;

      switch (taskStateFromInternalTaskState(this._state)) {
        case TaskState.SUCCESS:
          async(this._resolve.bind(null, this.snapshot))();
          break;

        case TaskState.CANCELED:
        case TaskState.ERROR:
          var toCall = this._reject;
          async(toCall.bind(null, this._error))();
          break;

        default:
          triggered = false;
          break;
      }

      if (triggered) {
        this._resolve = undefined;
        this._reject = undefined;
      }
    }
  };

  UploadTask.prototype._notifyObserver = function (observer) {
    var externalState = taskStateFromInternalTaskState(this._state);

    switch (externalState) {
      case TaskState.RUNNING:
      case TaskState.PAUSED:
        if (observer.next) {
          async(observer.next.bind(observer, this.snapshot))();
        }

        break;

      case TaskState.SUCCESS:
        if (observer.complete) {
          async(observer.complete.bind(observer))();
        }

        break;

      case TaskState.CANCELED:
      case TaskState.ERROR:
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

        break;

      default:
        // TODO(andysoto): assert(false);
        if (observer.error) {
          async(observer.error.bind(observer, this._error))();
        }

    }
  };
  /**
   * Resumes a paused task. Has no effect on a currently running or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.resume = function () {
    var valid = this._state === "paused"
    /* PAUSED */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("running"
      /* RUNNING */
      );
    }

    return valid;
  };
  /**
   * Pauses a currently running task. Has no effect on a paused or failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.pause = function () {
    var valid = this._state === "running"
    /* RUNNING */
    ;

    if (valid) {
      this._transition("pausing"
      /* PAUSING */
      );
    }

    return valid;
  };
  /**
   * Cancels a currently running or paused task. Has no effect on a complete or
   * failed task.
   * @returns True if the operation took effect, false if ignored.
   */


  UploadTask.prototype.cancel = function () {
    var valid = this._state === "running"
    /* RUNNING */
    || this._state === "pausing"
    /* PAUSING */
    ;

    if (valid) {
      this._transition("canceling"
      /* CANCELING */
      );
    }

    return valid;
  };

  return UploadTask;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */


var Reference =
/** @class */
function () {
  function Reference(_service, location) {
    this._service = _service;

    if (location instanceof Location) {
      this._location = location;
    } else {
      this._location = Location.makeFromUrl(location);
    }
  }
  /**
   * Returns the URL for the bucket and path this object references,
   *     in the form gs://<bucket>/<object-path>
   * @override
   */


  Reference.prototype.toString = function () {
    return 'gs://' + this._location.bucket + '/' + this._location.path;
  };

  Reference.prototype._newRef = function (service, location) {
    return new Reference(service, location);
  };

  Object.defineProperty(Reference.prototype, "root", {
    /**
     * A reference to the root of this object's bucket.
     */
    get: function get() {
      var location = new Location(this._location.bucket, '');
      return this._newRef(this._service, location);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "bucket", {
    /**
     * The name of the bucket containing this reference's object.
     */
    get: function get() {
      return this._location.bucket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "fullPath", {
    /**
     * The full path of this object.
     */
    get: function get() {
      return this._location.path;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "name", {
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */
    get: function get() {
      return lastComponent(this._location.path);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "storage", {
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */
    get: function get() {
      return this._service;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Reference.prototype, "parent", {
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */
    get: function get() {
      var newPath = parent(this._location.path);

      if (newPath === null) {
        return null;
      }

      var location = new Location(this._location.bucket, newPath);
      return new Reference(this._service, location);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Utility function to throw an error in methods that do not accept a root reference.
   */

  Reference.prototype._throwIfRoot = function (name) {
    if (this._location.path === '') {
      throw invalidRootOperation(name);
    }
  };

  return Reference;
}();
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */


function uploadBytesResumable(ref, data, metadata) {
  ref._throwIfRoot('uploadBytesResumable');

  return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */


function listAll(ref) {
  var accumulator = {
    prefixes: [],
    items: []
  };
  return listAllHelper(ref, accumulator).then(function () {
    return accumulator;
  });
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */


function listAllHelper(ref, accumulator, pageToken) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var opt, nextPage;

    var _a, _b;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_c) {
      switch (_c.label) {
        case 0:
          opt = {
            // maxResults is 1000 by default.
            pageToken: pageToken
          };
          return [4
          /*yield*/
          , list$1(ref, opt)];

        case 1:
          nextPage = _c.sent();

          (_a = accumulator.prefixes).push.apply(_a, nextPage.prefixes);

          (_b = accumulator.items).push.apply(_b, nextPage.items);

          if (!(nextPage.nextPageToken != null)) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , listAllHelper(ref, accumulator, nextPage.nextPageToken)];

        case 2:
          _c.sent();

          _c.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */


function list$1(ref, options) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, op, requestInfo;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (options != null) {
            if (typeof options.maxResults === 'number') {
              validateNumber('options.maxResults',
              /* minValue= */
              1,
              /* maxValue= */
              1000, options.maxResults);
            }
          }

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          op = options || {};
          requestInfo = list(ref.storage, ref._location,
          /*delimiter= */
          '/', op.pageToken, op.maxResults);
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * A promise that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */


function getMetadata$1(ref) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('getMetadata');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = getMetadata(ref.storage, ref._location, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A promise that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */


function updateMetadata$1(ref, metadata) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('updateMetadata');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = updateMetadata(ref.storage, ref._location, metadata, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A promise that resolves with the download
 *     URL for this object.
 */


function getDownloadURL(ref) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('getDownloadURL');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise().then(function (url) {
            if (url === null) {
              throw noDownloadURL();
            }

            return url;
          })];
      }
    });
  });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A promise that resolves if the deletion succeeds.
 */


function deleteObject$1(ref) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
    var authToken, requestInfo;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
      switch (_a.label) {
        case 0:
          ref._throwIfRoot('deleteObject');

          return [4
          /*yield*/
          , ref.storage._getAuthToken()];

        case 1:
          authToken = _a.sent();
          requestInfo = deleteObject(ref.storage, ref._location);
          return [2
          /*return*/
          , ref.storage._makeRequest(requestInfo, authToken).getPromise()];
      }
    });
  });
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */


function _getChild(ref, childPath) {
  var newPath = child(ref._location.path, childPath);
  var location = new Location(ref._location.bucket, newPath);
  return new Reference(ref.storage, location);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function isUrl(path) {
  return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */


function refFromURL(service, url) {
  return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */


function refFromPath(ref, path) {
  if (ref instanceof StorageService) {
    var service = ref;

    if (service._bucket == null) {
      throw noDefaultBucket();
    }

    var reference = new Reference(service, service._bucket);

    if (path != null) {
      return refFromPath(reference, path);
    } else {
      return reference;
    }
  } else {
    // ref is a Reference
    if (path !== undefined) {
      if (path.includes('..')) {
        throw invalidArgument('`path` param cannot contain ".."');
      }

      return _getChild(ref, path);
    } else {
      return ref;
    }
  }
}

function ref(serviceOrRef, pathOrUrl) {
  if (pathOrUrl && isUrl(pathOrUrl)) {
    if (serviceOrRef instanceof StorageService) {
      return refFromURL(serviceOrRef, pathOrUrl);
    } else {
      throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
    }
  } else {
    return refFromPath(serviceOrRef, pathOrUrl);
  }
}

function extractBucket(config) {
  var bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];

  if (bucketString == null) {
    return null;
  }

  return Location.makeFromBucketSpec(bucketString);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @public
 * @param opt_url - gs:// url to a custom Storage Bucket
 */


var StorageService =
/** @class */
function () {
  function StorageService(
  /**
   * FirebaseApp associated with this StorageService instance.
   */
  app, _authProvider, _pool, _url, _firebaseVersion) {
    this.app = app;
    this._authProvider = _authProvider;
    this._pool = _pool;
    this._url = _url;
    this._firebaseVersion = _firebaseVersion;
    this._bucket = null;
    this._appId = null;
    this._deleted = false;
    this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
    this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
    this._requests = new Set();

    if (_url != null) {
      this._bucket = Location.makeFromBucketSpec(_url);
    } else {
      this._bucket = extractBucket(this.app.options);
    }
  }

  Object.defineProperty(StorageService.prototype, "maxUploadRetryTime", {
    /**
     * The maximum time to retry uploads in milliseconds.
     */
    get: function get() {
      return this._maxUploadRetryTime;
    },
    set: function set(time) {
      validateNumber('time',
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY, time);
      this._maxUploadRetryTime = time;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StorageService.prototype, "maxOperationRetryTime", {
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */
    get: function get() {
      return this._maxOperationRetryTime;
    },
    set: function set(time) {
      validateNumber('time',
      /* minValue=*/
      0,
      /* maxValue= */
      Number.POSITIVE_INFINITY, time);
      this._maxOperationRetryTime = time;
    },
    enumerable: false,
    configurable: true
  });

  StorageService.prototype._getAuthToken = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function () {
      var auth, tokenData;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            auth = this._authProvider.getImmediate({
              optional: true
            });
            if (!auth) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , auth.getToken()];

          case 1:
            tokenData = _a.sent();

            if (tokenData !== null) {
              return [2
              /*return*/
              , tokenData.accessToken];
            }

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            , null];
        }
      });
    });
  };
  /**
   * Stop running requests and prevent more from being created.
   */


  StorageService.prototype._delete = function () {
    this._deleted = true;

    this._requests.forEach(function (request) {
      return request.cancel();
    });

    this._requests.clear();

    return Promise.resolve();
  };
  /**
   * Returns a new firebaseStorage.Reference object referencing this StorageService
   * at the given Location.
   */


  StorageService.prototype._makeStorageReference = function (loc) {
    return new Reference(this, loc);
  };
  /**
   * @param requestInfo - HTTP RequestInfo object
   * @param authToken - Firebase auth token
   */


  StorageService.prototype._makeRequest = function (requestInfo, authToken) {
    var _this = this;

    if (!this._deleted) {
      var request_1 = makeRequest(requestInfo, this._appId, authToken, this._pool, this._firebaseVersion);

      this._requests.add(request_1); // Request removes itself from set when complete.


      request_1.getPromise().then(function () {
        return _this._requests.delete(request_1);
      }, function () {
        return _this._requests.delete(request_1);
      });
      return request_1;
    } else {
      return new FailRequest(appDeleted());
    }
  };

  return StorageService;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */


function uploadBytesResumable$1(ref, data, metadata) {
  return uploadBytesResumable(ref, data, metadata);
}
/**
 * A promise that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */


function getMetadata$2(ref) {
  return getMetadata$1(ref);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A promise that resolves with the new metadata for this object.
 */


function updateMetadata$2(ref, metadata) {
  return updateMetadata$1(ref, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */


function list$2(ref, options) {
  return list$1(ref, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */


function listAll$1(ref) {
  return listAll(ref);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A promise that resolves with the download
 *     URL for this object.
 */


function getDownloadURL$1(ref) {
  return getDownloadURL(ref);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A promise that resolves if the deletion succeeds.
 */


function deleteObject$2(ref) {
  return deleteObject$1(ref);
}

function ref$1(serviceOrRef, pathOrUrl) {
  return ref(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */


function _getChild$1(ref, childPath) {
  return _getChild(ref, childPath);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var UploadTaskSnapshotCompat =
/** @class */
function () {
  function UploadTaskSnapshotCompat(_delegate, task, ref) {
    this._delegate = _delegate;
    this.task = task;
    this.ref = ref;
  }

  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "bytesTransferred", {
    get: function get() {
      return this._delegate.bytesTransferred;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "metadata", {
    get: function get() {
      return this._delegate.metadata;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "state", {
    get: function get() {
      return this._delegate.state;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(UploadTaskSnapshotCompat.prototype, "totalBytes", {
    get: function get() {
      return this._delegate.totalBytes;
    },
    enumerable: false,
    configurable: true
  });
  return UploadTaskSnapshotCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var UploadTaskCompat =
/** @class */
function () {
  function UploadTaskCompat(_delegate, _ref) {
    this._delegate = _delegate;
    this._ref = _ref;
    this.cancel = this._delegate.cancel.bind(this._delegate);
    this.catch = this._delegate.catch.bind(this._delegate);
    this.pause = this._delegate.pause.bind(this._delegate);
    this.resume = this._delegate.resume.bind(this._delegate);
  }

  Object.defineProperty(UploadTaskCompat.prototype, "snapshot", {
    get: function get() {
      return new UploadTaskSnapshotCompat(this._delegate.snapshot, this, this._ref);
    },
    enumerable: false,
    configurable: true
  });

  UploadTaskCompat.prototype.then = function (onFulfilled, onRejected) {
    var _this = this;

    return this._delegate.then(function (snapshot) {
      if (onFulfilled) {
        return onFulfilled(new UploadTaskSnapshotCompat(snapshot, _this, _this._ref));
      }
    }, onRejected);
  };

  UploadTaskCompat.prototype.on = function (type, nextOrObserver, error, completed) {
    var _this = this;

    var wrappedNextOrObserver = undefined;

    if (!!nextOrObserver) {
      if (typeof nextOrObserver === 'function') {
        wrappedNextOrObserver = function wrappedNextOrObserver(taskSnapshot) {
          return nextOrObserver(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
        };
      } else {
        wrappedNextOrObserver = {
          next: !!nextOrObserver.next ? function (taskSnapshot) {
            return nextOrObserver.next(new UploadTaskSnapshotCompat(taskSnapshot, _this, _this._ref));
          } : undefined,
          complete: nextOrObserver.complete || undefined,
          error: nextOrObserver.error || undefined
        };
      }
    }

    return this._delegate.on(type, wrappedNextOrObserver, error || undefined, completed || undefined);
  };

  return UploadTaskCompat;
}();

var ListResultCompat =
/** @class */
function () {
  function ListResultCompat(_delegate, _service) {
    this._delegate = _delegate;
    this._service = _service;
  }

  Object.defineProperty(ListResultCompat.prototype, "prefixes", {
    get: function get() {
      var _this = this;

      return this._delegate.prefixes.map(function (ref) {
        return new ReferenceCompat(ref, _this._service);
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ListResultCompat.prototype, "items", {
    get: function get() {
      var _this = this;

      return this._delegate.items.map(function (ref) {
        return new ReferenceCompat(ref, _this._service);
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ListResultCompat.prototype, "nextPageToken", {
    get: function get() {
      return this._delegate.nextPageToken || null;
    },
    enumerable: false,
    configurable: true
  });
  return ListResultCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ReferenceCompat =
/** @class */
function () {
  function ReferenceCompat(_delegate, storage) {
    this._delegate = _delegate;
    this.storage = storage;
  }

  Object.defineProperty(ReferenceCompat.prototype, "name", {
    get: function get() {
      return this._delegate.name;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "bucket", {
    get: function get() {
      return this._delegate.bucket;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "fullPath", {
    get: function get() {
      return this._delegate.fullPath;
    },
    enumerable: false,
    configurable: true
  });

  ReferenceCompat.prototype.toString = function () {
    return this._delegate.toString();
  };
  /**
   * @returns A reference to the object obtained by
   * appending childPath, removing any duplicate, beginning, or trailing
   * slashes.
   */


  ReferenceCompat.prototype.child = function (childPath) {
    var reference = _getChild$1(this._delegate, childPath);

    return new ReferenceCompat(reference, this.storage);
  };

  Object.defineProperty(ReferenceCompat.prototype, "root", {
    get: function get() {
      return new ReferenceCompat(this._delegate.root, this.storage);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ReferenceCompat.prototype, "parent", {
    /**
     * @returns A reference to the parent of the
     * current object, or null if the current object is the root.
     */
    get: function get() {
      var reference = this._delegate.parent;

      if (reference == null) {
        return null;
      }

      return new ReferenceCompat(reference, this.storage);
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Uploads a blob to this object's location.
   * @param data - The blob to upload.
   * @returns An UploadTask that lets you control and
   * observe the upload.
   */

  ReferenceCompat.prototype.put = function (data, metadata) {
    this._throwIfRoot('put');

    return new UploadTaskCompat(uploadBytesResumable$1(this._delegate, data, metadata), this);
  };
  /**
   * Uploads a string to this object's location.
   * @param value - The string to upload.
   * @param format - The format of the string to upload.
   * @returns An UploadTask that lets you control and
   * observe the upload.
   */


  ReferenceCompat.prototype.putString = function (value, format, metadata) {
    if (format === void 0) {
      format = StringFormat.RAW;
    }

    this._throwIfRoot('putString');

    var data = dataFromString(format, value);

    var metadataClone = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, metadata);

    if (metadataClone['contentType'] == null && data.contentType != null) {
      metadataClone['contentType'] = data.contentType;
    }

    return new UploadTaskCompat(new UploadTask(this._delegate, new FbsBlob(data.data, true), metadataClone), this);
  };
  /**
   * List all items (files) and prefixes (folders) under this storage reference.
   *
   * This is a helper method for calling list() repeatedly until there are
   * no more results. The default pagination size is 1000.
   *
   * Note: The results may not be consistent if objects are changed while this
   * operation is running.
   *
   * Warning: listAll may potentially consume too many resources if there are
   * too many results.
   *
   * @returns A Promise that resolves with all the items and prefixes under
   *  the current storage reference. `prefixes` contains references to
   *  sub-directories and `items` contains references to objects in this
   *  folder. `nextPageToken` is never returned.
   */


  ReferenceCompat.prototype.listAll = function () {
    var _this = this;

    return listAll$1(this._delegate).then(function (r) {
      return new ListResultCompat(r, _this.storage);
    });
  };
  /**
   * List items (files) and prefixes (folders) under this storage reference.
   *
   * List API is only available for Firebase Rules Version 2.
   *
   * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
   * delimited folder structure. Refer to GCS's List API if you want to learn more.
   *
   * To adhere to Firebase Rules's Semantics, Firebase Storage does not
   * support objects whose paths end with "/" or contain two consecutive
   * "/"s. Firebase Storage List API will filter these unsupported objects.
   * list() may fail if there are too many unsupported objects in the bucket.
   *
   * @param options - See ListOptions for details.
   * @returns A Promise that resolves with the items and prefixes.
   * `prefixes` contains references to sub-folders and `items`
   * contains references to objects in this folder. `nextPageToken`
   * can be used to get the rest of the results.
   */


  ReferenceCompat.prototype.list = function (options) {
    var _this = this;

    return list$2(this._delegate, options || undefined).then(function (r) {
      return new ListResultCompat(r, _this.storage);
    });
  };
  /**
   * A promise that resolves with the metadata for this object. If this
   * object doesn't exist or metadata cannot be retreived, the promise is
   * rejected.
   */


  ReferenceCompat.prototype.getMetadata = function () {
    return getMetadata$2(this._delegate);
  };
  /**
   * Updates the metadata for this object.
   * @param metadata - The new metadata for the object.
   * Only values that have been explicitly set will be changed. Explicitly
   * setting a value to null will remove the metadata.
   * @returns A promise that resolves
   * with the new metadata for this object.
   * @see firebaseStorage.Reference.prototype.getMetadata
   */


  ReferenceCompat.prototype.updateMetadata = function (metadata) {
    return updateMetadata$2(this._delegate, metadata);
  };
  /**
   * @returns A promise that resolves with the download
   * URL for this object.
   */


  ReferenceCompat.prototype.getDownloadURL = function () {
    return getDownloadURL$1(this._delegate);
  };
  /**
   * Deletes the object at this location.
   * @returns A promise that resolves if the deletion succeeds.
   */


  ReferenceCompat.prototype.delete = function () {
    this._throwIfRoot('delete');

    return deleteObject$2(this._delegate);
  };

  ReferenceCompat.prototype._throwIfRoot = function (name) {
    if (this._delegate._location.path === '') {
      throw invalidRootOperation(name);
    }
  };

  return ReferenceCompat;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 */


var StorageServiceCompat =
/** @class */
function () {
  function StorageServiceCompat(app, _delegate) {
    var _this = this;

    this.app = app;
    this._delegate = _delegate;
    this.INTERNAL = {
      /**
       * Called when the associated app is deleted.
       */
      delete: function _delete() {
        return _this._delegate._delete();
      }
    };
  }

  Object.defineProperty(StorageServiceCompat.prototype, "maxOperationRetryTime", {
    get: function get() {
      return this._delegate.maxOperationRetryTime;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StorageServiceCompat.prototype, "maxUploadRetryTime", {
    get: function get() {
      return this._delegate.maxUploadRetryTime;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns a firebaseStorage.Reference for the given path in the default
   * bucket.
   */

  StorageServiceCompat.prototype.ref = function (path) {
    if (isUrl(path)) {
      throw invalidArgument('ref() expected a child path but got a URL, use refFromURL instead.');
    }

    return new ReferenceCompat(ref$1(this._delegate, path), this);
  };
  /**
   * Returns a firebaseStorage.Reference object for the given absolute URL,
   * which must be a gs:// or http[s]:// URL.
   */


  StorageServiceCompat.prototype.refFromURL = function (url) {
    if (!isUrl(url)) {
      throw invalidArgument('refFromURL() expected a full URL but got a child path, use ref() instead.');
    }

    try {
      Location.makeFromUrl(url);
    } catch (e) {
      throw invalidArgument('refFromUrl() expected a valid full URL but got an invalid one.');
    }

    return new ReferenceCompat(ref$1(this._delegate, url), this);
  };

  StorageServiceCompat.prototype.setMaxUploadRetryTime = function (time) {
    this._delegate.maxUploadRetryTime = time;
  };

  StorageServiceCompat.prototype.setMaxOperationRetryTime = function (time) {
    this._delegate.maxOperationRetryTime = time;
  };

  return StorageServiceCompat;
}();

var name = "@firebase/storage";
var version = "0.4.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Type constant for Firebase Storage.
 */

var STORAGE_TYPE = 'storage';

function factory(container, _a) {
  var url = _a.instanceIdentifier; // Dependencies
  // TODO: This should eventually be 'app-compat'

  var app = container.getProvider('app').getImmediate();
  var authProvider = container.getProvider('auth-internal'); // TODO: get StorageService instance from component framework instead
  // of creating a new one.

  var storageServiceCompat = new StorageServiceCompat(app, new StorageService(app, authProvider, new XhrIoPool(), url, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].SDK_VERSION));
  return storageServiceCompat;
}

function registerStorage(instance) {
  var namespaceExports = {
    // no-inline
    TaskState: TaskState,
    TaskEvent: TaskEvent,
    StringFormat: StringFormat,
    Storage: StorageService,
    Reference: ReferenceCompat
  };
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__["Component"](STORAGE_TYPE, factory, "PUBLIC"
  /* PUBLIC */
  ).setServiceProps(namespaceExports).setMultipleInstances(true));
  instance.registerVersion(name, version);
}

registerStorage(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "ONMp":
/*!****************************************************************************!*\
  !*** ./src/app/components/post/post-dashboard/post-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: PostDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDashboardComponent", function() { return PostDashboardComponent; });
/* harmony import */ var _raw_loader_post_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./post-dashboard.component.html */ "oicL");
/* harmony import */ var _post_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-dashboard.component.css */ "hf7c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth.service */ "8PDw");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "a90q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_components_workshops_workshops_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/components/workshops/workshops.service */ "RS0p");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PostDashboardComponent = /** @class */ (function () {
    function PostDashboardComponent(auth, postService, storage, router, workshopService) {
        this.auth = auth;
        this.postService = postService;
        this.storage = storage;
        this.router = router;
        this.workshopService = workshopService;
        this.saving = 'Create Post';
    }
    PostDashboardComponent.prototype.ngOnInit = function () { };
    PostDashboardComponent.prototype.createPost = function () {
        var _this = this;
        console.log(this.author);
        if (this.author == null) {
            var postData = {
                author: this.auth.authState.displayName || this.auth.authState.email,
                authorId: this.auth.currentUserId,
                content: this.content,
                image: this.image || null,
                published: new Date(),
                title: this.title,
                upLike: 0,
                downLike: 0
            };
        }
        else {
            postData = {
                author: this.author,
                authorId: this.auth.currentUserId,
                content: this.content,
                image: this.image || null,
                published: new Date(),
                title: this.title,
                upLike: 0,
                downLike: 0
            };
        }
        this.postService.create(postData);
        this.title = '';
        this.content = '';
        this.image = '';
        this.saving = 'Post Created!';
        setTimeout(function () { return (_this.saving = 'Create Post'); }, 3000);
        this.router.navigateByUrl('blog');
    };
    PostDashboardComponent.prototype.uploadImage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, path, task, ref, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        file = event.target.files[0];
                        path = "posts/" + file.name;
                        if (!(file.type.split('/')[0] !== 'image')) return [3 /*break*/, 1];
                        return [2 /*return*/, alert('only image files')];
                    case 1:
                        task = this.storage.upload(path, file);
                        ref = this.storage.ref(path);
                        this.uploadPercent = task.percentageChanges();
                        // upload image, save url
                        return [4 /*yield*/, task];
                    case 2:
                        // upload image, save url
                        _b.sent();
                        console.log('Image uploaded!');
                        _a = this;
                        return [4 /*yield*/, ref.getDownloadURL().toPromise()];
                    case 3:
                        _a.image = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PostDashboardComponent.prototype.createWPost = function () {
        var _this = this;
        if (this.workauthor == null) {
            var postData = {
                author: this.auth.authState.displayName || this.auth.authState.email,
                authorId: this.auth.currentUserId,
                content: this.content,
                image: this.image || null,
                published: new Date(),
                title: this.title,
            };
        }
        else {
            postData = {
                author: this.workauthor,
                authorId: this.auth.currentUserId,
                content: this.content,
                image: this.image || null,
                published: new Date(),
                title: this.title,
            };
        }
        this.workshopService.create(postData);
        this.title = '';
        this.content = '';
        this.image = '';
        this.saving = 'Post Created!';
        setTimeout(function () { return (_this.saving = 'Create Post'); }, 3000);
        this.router.navigateByUrl('workshops');
    };
    PostDashboardComponent.prototype.uploadWImage = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, path, task, ref, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        file = event.target.files[0];
                        path = "workshops/" + file.name;
                        if (!(file.type.split('/')[0] !== 'image')) return [3 /*break*/, 1];
                        return [2 /*return*/, alert('only image files')];
                    case 1:
                        task = this.storage.upload(path, file);
                        ref = this.storage.ref(path);
                        this.uploadPercent = task.percentageChanges();
                        // upload image, save url
                        return [4 /*yield*/, task];
                    case 2:
                        // upload image, save url
                        _b.sent();
                        console.log('Image uploaded!');
                        _a = this;
                        return [4 /*yield*/, ref.getDownloadURL().toPromise()];
                    case 3:
                        _a.image = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PostDashboardComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: app_components_workshops_workshops_service__WEBPACK_IMPORTED_MODULE_7__["WorkshopsService"] }
    ]; };
    PostDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post-dashboard',
            template: _raw_loader_post_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_post_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            app_components_workshops_workshops_service__WEBPACK_IMPORTED_MODULE_7__["WorkshopsService"]])
    ], PostDashboardComponent);
    return PostDashboardComponent;
}());



/***/ }),

/***/ "RS0p":
/*!***********************************************************!*\
  !*** ./src/app/components/workshops/workshops.service.ts ***!
  \***********************************************************/
/*! exports provided: WorkshopsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopsService", function() { return WorkshopsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkshopsService = /** @class */ (function () {
    function WorkshopsService(afs) {
        this.afs = afs;
        this.WorkshopsCollection = this.afs.collection('workshops', function (ref) {
            return ref.orderBy('published', 'desc');
        });
    }
    WorkshopsService.prototype.getWorkshops = function () {
        return this.WorkshopsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    WorkshopsService.prototype.getWorkshopsData = function (id) {
        this.WorkshopsDoc = this.afs.doc("workshops/" + id);
        return this.WorkshopsDoc.valueChanges();
    };
    WorkshopsService.prototype.getWorkshop = function (id) {
        return this.afs.doc("workshops/" + id);
    };
    WorkshopsService.prototype.create = function (data) {
        this.WorkshopsCollection.add(data);
    };
    WorkshopsService.prototype.delete = function (id) {
        return this.getWorkshop(id).delete();
    };
    WorkshopsService.prototype.update = function (id, formData) {
        return this.getWorkshop(id).update(formData);
    };
    WorkshopsService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    WorkshopsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], WorkshopsService);
    return WorkshopsService;
}());



/***/ }),

/***/ "Vaw3":
/*!**********************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js ***!
  \**********************************************************************************/
/*! exports provided: AngularFireStorage, AngularFireStorageModule, BUCKET, GetDownloadURLPipe, GetDownloadURLPipeModule, MAX_OPERATION_RETRY_TIME, MAX_UPLOAD_RETRY_TIME, createStorageRef, createUploadTask, fromTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorage", function() { return AngularFireStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireStorageModule", function() { return AngularFireStorageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUCKET", function() { return BUCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipe", function() { return GetDownloadURLPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDownloadURLPipeModule", function() { return GetDownloadURLPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_OPERATION_RETRY_TIME", function() { return MAX_OPERATION_RETRY_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_UPLOAD_RETRY_TIME", function() { return MAX_UPLOAD_RETRY_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorageRef", function() { return createStorageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUploadTask", function() { return createUploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTask", function() { return fromTask; });
/* harmony import */ var _Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/storage */ "WI49");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromTask.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Things aren't working great, I'm having to put in a lot of work-arounds for what
// appear to be Firebase JS SDK bugs https://github.com/firebase/firebase-js-sdk/issues/4158

/**
 * @param {?} task
 * @return {?}
 */



function fromTask(task) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
  /**
  * @param {?} subscriber
  * @return {?}
  */
  function (subscriber) {
    /** @type {?} */
    var progress =
    /**
    * @param {?} snap
    * @return {?}
    */
    function progress(snap) {
      return subscriber.next(snap);
    };
    /** @type {?} */


    var error =
    /**
    * @param {?} e
    * @return {?}
    */
    function error(e) {
      return subscriber.error(e);
    };
    /** @type {?} */


    var complete =
    /**
    * @return {?}
    */
    function complete() {
      return subscriber.complete();
    }; // emit the current snapshot, so they don't have to wait for state_changes
    // to fire next... this is stale if the task is no longer running :(


    progress(task.snapshot);
    /** @type {?} */

    var unsub = task.on('state_changed', progress); // it turns out that neither task snapshot nor 'state_changed' fire the last
    // snapshot before completion, the one with status 'success" and 100% progress
    // so let's use the promise form of the task for that

    task.then(
    /**
    * @param {?} snapshot
    * @return {?}
    */
    function (snapshot) {
      progress(snapshot);
      complete();
    },
    /**
    * @param {?} e
    * @return {?}
    */
    function (e) {
      // TODO investigate, again this is stale, we never fire a canceled or error it seems
      progress(task.snapshot);
      error(e);
    }); // on's type if Function, rather than () => void, need to wrap

    return (
      /**
      * @return {?}
      */
      function unsubscribe() {
        unsub();
      }
    );
  }).pipe( // deal with sync emissions from first emitting `task.snapshot`, this makes sure
  // that if the task is already finished we don't emit the old running state
  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0));
}
/**
 * @fileoverview added by tsickle
 * Generated from: task.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function AngularFireUploadTask() {}

if (false) {}
/**
 * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
 * This method creates an observable of the upload and returns on object that provides
 * multiple methods for controlling and monitoring the file upload.
 * @param {?} task
 * @return {?}
 */


function createUploadTask(task) {
  /** @type {?} */
  var inner$ = fromTask(task);
  return {
    task: task,
    then: task.then.bind(task),
    catch: task.catch.bind(task),
    pause: task.pause.bind(task),
    cancel: task.cancel.bind(task),
    resume: task.resume.bind(task),
    snapshotChanges:
    /**
    * @return {?}
    */
    function snapshotChanges() {
      return inner$;
    },
    percentageChanges:
    /**
    * @return {?}
    */
    function percentageChanges() {
      return inner$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return s.bytesTransferred / s.totalBytes * 100;
      }));
    }
  };
}
/**
 * @fileoverview added by tsickle
 * Generated from: ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */


function AngularFireStorageReference() {}

if (false) {}
/**
 * Create an AngularFire wrapped Storage Reference. This object
 * creates observable methods from promise based methods.
 * @param {?} ref
 * @param {?} schedulers
 * @param {?} keepUnstableUntilFirst
 * @return {?}
 */


function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
  return {
    getDownloadURL:
    /**
    * @return {?}
    */
    function getDownloadURL() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
      /**
      * @return {?}
      */
      function () {
        return ref.getDownloadURL();
      }), keepUnstableUntilFirst);
    },
    getMetadata:
    /**
    * @return {?}
    */
    function getMetadata() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
      /**
      * @return {?}
      */
      function () {
        return ref.getMetadata();
      }), keepUnstableUntilFirst);
    },
    delete:
    /**
    * @return {?}
    */
    function _delete() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.delete());
    },
    child:
    /**
    * @param {?} path
    * @return {?}
    */
    function child(path) {
      return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst);
    },
    updateMetadata:
    /**
    * @param {?} meta
    * @return {?}
    */
    function updateMetadata(meta) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.updateMetadata(meta));
    },
    put:
    /**
    * @param {?} data
    * @param {?=} metadata
    * @return {?}
    */
    function put(data, metadata) {
      /** @type {?} */
      var task = ref.put(data, metadata);
      return createUploadTask(task);
    },
    putString:
    /**
    * @param {?} data
    * @param {?=} format
    * @param {?=} metadata
    * @return {?}
    */
    function putString(data, format, metadata) {
      /** @type {?} */
      var task = ref.putString(data, format, metadata);
      return createUploadTask(task);
    },
    listAll:
    /**
    * @return {?}
    */
    function listAll() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(ref.listAll());
    }
  };
}
/**
 * @fileoverview added by tsickle
 * Generated from: storage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var BUCKET = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storageBucket');
/** @type {?} */

var MAX_UPLOAD_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storage.maxUploadRetryTime');
/** @type {?} */

var MAX_OPERATION_RETRY_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('angularfire2.storage.maxOperationRetryTime');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */

var AngularFireStorage = /*#__PURE__*/function () {
  /**
   * @param {?} options
   * @param {?} nameOrConfig
   * @param {?} storageBucket
   * @param {?} platformId
   * @param {?} zone
   * @param {?} maxUploadRetryTime
   * @param {?} maxOperationRetryTime
   */
  function AngularFireStorage(options, nameOrConfig, storageBucket, // tslint:disable-next-line:ban-types
  platformId, zone, maxUploadRetryTime, maxOperationRetryTime) {
    Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AngularFireStorage);

    this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵAngularFireSchedulers"](zone);
    this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
    /** @type {?} */

    var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
    this.storage = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["ɵfetchInstance"])("".concat(app.name, ".storage.").concat(storageBucket), 'AngularFireStorage', app,
    /**
    * @return {?}
    */
    function () {
      /** @type {?} */
      var storage = zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        return app.storage(storageBucket || undefined);
      });

      if (maxUploadRetryTime) {
        storage.setMaxUploadRetryTime(maxUploadRetryTime);
      }

      if (maxOperationRetryTime) {
        storage.setMaxOperationRetryTime(maxOperationRetryTime);
      }

      return storage;
    }, [maxUploadRetryTime, maxOperationRetryTime]);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AngularFireStorage, [{
    key: "ref",
    value: function ref(path) {
      return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @return {?}
     */

  }, {
    key: "refFromURL",
    value: function refFromURL(path) {
      return createStorageRef(this.storage.refFromURL(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */

  }, {
    key: "upload",
    value: function upload(path, data, metadata) {
      /** @type {?} */
      var storageRef = this.storage.ref(path);
      /** @type {?} */

      var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
      return ref.put(data, metadata);
    }
  }]);

  return AngularFireStorage;
}();

AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) {
  return new (t || AngularFireStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](BUCKET, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](MAX_UPLOAD_RETRY_TIME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](MAX_OPERATION_RETRY_TIME, 8));
};
/** @nocollapse */


AngularFireStorage.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"]]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [BUCKET]
    }]
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAX_UPLOAD_RETRY_TIME]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
      args: [MAX_OPERATION_RETRY_TIME]
    }]
  }];
};
/** @nocollapse */


AngularFireStorage.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
  factory: function AngularFireStorage_Factory() {
    return new AngularFireStorage(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(BUCKET, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(MAX_UPLOAD_RETRY_TIME, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"])(MAX_OPERATION_RETRY_TIME, 8));
  },
  token: AngularFireStorage,
  providedIn: "any"
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AngularFireStorage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_OPTIONS"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_fire__WEBPACK_IMPORTED_MODULE_5__["FIREBASE_APP_NAME"]]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [BUCKET]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_ID"]]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAX_UPLOAD_RETRY_TIME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
        args: [MAX_OPERATION_RETRY_TIME]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: pipes/storageUrl.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * to be used with in combination with | async
 */


var GetDownloadURLPipe = /*#__PURE__*/function () {
  /**
   * @param {?} storage
   * @param {?} cdr
   */
  function GetDownloadURLPipe(storage, cdr) {
    Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetDownloadURLPipe);

    this.storage = storage;
    this.asyncPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"](cdr);
  }
  /**
   * @param {?} path
   * @return {?}
   */


  Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GetDownloadURLPipe, [{
    key: "transform",
    value: function transform(path) {
      if (path !== this.path) {
        this.path = path;
        this.downloadUrl$ = this.storage.ref(path).getDownloadURL();
      }

      return this.asyncPipe.transform(this.downloadUrl$);
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.asyncPipe.ngOnDestroy();
    }
  }]);

  return GetDownloadURLPipe;
}();

GetDownloadURLPipe.ɵfac = function GetDownloadURLPipe_Factory(t) {
  return new (t || GetDownloadURLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](AngularFireStorage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectPipeChangeDetectorRef"]());
};

GetDownloadURLPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefinePipe"]({
  name: "getDownloadURL",
  type: GetDownloadURLPipe,
  pure: false
});
/** @nocollapse */

GetDownloadURLPipe.ctorParameters = function () {
  return [{
    type: AngularFireStorage
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GetDownloadURLPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Pipe"],
    args: [{
      name: 'getDownloadURL',
      pure: false
    }]
  }], function () {
    return [{
      type: AngularFireStorage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
    }];
  }, null);
})();

if (false) {}

var GetDownloadURLPipeModule = function GetDownloadURLPipeModule() {
  Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GetDownloadURLPipeModule);
};

GetDownloadURLPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: GetDownloadURLPipeModule
});
GetDownloadURLPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function GetDownloadURLPipeModule_Factory(t) {
    return new (t || GetDownloadURLPipeModule)();
  }
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GetDownloadURLPipeModule, {
    declarations: [GetDownloadURLPipe],
    exports: [GetDownloadURLPipe]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GetDownloadURLPipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      declarations: [GetDownloadURLPipe],
      exports: [GetDownloadURLPipe]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: storage.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AngularFireStorageModule = function AngularFireStorageModule() {
  Object(_Users_anirudhpai_Desktop_fleo_website_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AngularFireStorageModule);
};

AngularFireStorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AngularFireStorageModule
});
AngularFireStorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  factory: function AngularFireStorageModule_Factory(t) {
    return new (t || AngularFireStorageModule)();
  },
  providers: [AngularFireStorage],
  imports: [GetDownloadURLPipeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AngularFireStorageModule, {
    exports: [GetDownloadURLPipeModule]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AngularFireStorageModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
    args: [{
      exports: [GetDownloadURLPipeModule],
      providers: [AngularFireStorage]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-storage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "WI49":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "LmZi");


/***/ }),

/***/ "a90q":
/*!*************************************************!*\
  !*** ./src/app/components/post/post.service.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(afs) {
        this.afs = afs;
        this.postsCollection = this.afs.collection('posts', function (ref) {
            return ref.orderBy('published', 'desc');
        });
    }
    PostService.prototype.getPosts = function () {
        return this.postsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    PostService.prototype.getPostData = function (id) {
        this.postDoc = this.afs.doc("posts/" + id);
        return this.postDoc.valueChanges();
    };
    PostService.prototype.getPost = function (id) {
        return this.afs.doc("posts/" + id);
    };
    PostService.prototype.create = function (data) {
        this.postsCollection.add(data);
    };
    PostService.prototype.delete = function (id) {
        return this.getPost(id).delete();
    };
    PostService.prototype.update = function (id, formData) {
        return this.getPost(id).update(formData);
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "hf7c":
/*!*****************************************************************************!*\
  !*** ./src/app/components/post/post-dashboard/post-dashboard.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    max-width: 700px;\n    margin: 2em auto;\n  }\n  mat-form-field {\n    width: 100%;\n  }\n  img {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJwb3N0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDJlbSBhdXRvO1xuICB9XG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "oicL":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post/post-dashboard/post-dashboard.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <mat-accordion>\n      <mat-expansion-panel>\n  \n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Create a Newsletter Post\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n  \n        <input type=\"file\" name=\"file\" id=\"file\" (change)=\"uploadImage($event)\">\n        <div [hidden]=\"!uploadPercent\">\n          <mat-progress-bar mode=\"determinate\" value=\"{{ uploadPercent | async }}\"></mat-progress-bar>\n        </div>\n        <div [hidden]=\"!image\">\n          <img [src]=\"image || '//:0' \">\n        </div>\n  \n        <mat-form-field>\n          <input matInput placeholder=\"Post title\" [(ngModel)]=\"title\" name=\"title\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Author (Default Email Username)\" [(ngModel)]=\"author\" name=\"author\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Post content\" [(ngModel)]=\"content\" name=\"content\" rows=\"10\"></textarea>\n        </mat-form-field>\n        <br>\n        <button mat-raised-button (click)=\"createPost()\" color=\"accent\" >{{saving}}</button>\n  \n      </mat-expansion-panel>\n    </mat-accordion>\n  </section>\n  \n  <section>\n    <mat-accordion>\n      <mat-expansion-panel>\n  \n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Create a Workshop Post\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n  \n        <input type=\"file\" name=\"file\" id=\"file\" (change)=\"uploadImage($event)\">\n        <div [hidden]=\"!uploadPercent\">\n          <mat-progress-bar mode=\"determinate\" value=\"{{ uploadPercent | async }}\"></mat-progress-bar>\n        </div>\n        <div [hidden]=\"!image\">\n          <img [src]=\"image || '//:0' \">\n        </div>\n  \n        <mat-form-field>\n          <input matInput placeholder=\"Post title\" [(ngModel)]=\"title\" name=\"title\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput placeholder=\"Author (Default Email Username)\" [(ngModel)]=\"workauthor\" name=\"workauthor\">\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Post content\" [(ngModel)]=\"content\" name=\"content\" rows=\"10\"></textarea>\n        </mat-form-field>\n        <br>\n        <button mat-raised-button (click)=\"createWPost()\" color=\"accent\" >{{saving}}</button>\n  \n      </mat-expansion-panel>\n    </mat-accordion>\n  </section>\n  \n   ");

/***/ })

}]);
//# sourceMappingURL=default~components-post-posts-module~components-workshops-workshops-module.js.map