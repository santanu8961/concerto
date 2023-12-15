/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
* Class representing an validation error related to anykind of string validatoin in introspect
* @class
* @memberof module:concerto-core
*/
class StringValidationException extends Error {
    /**
     * Create error related to string validation.
     * @param {string} errormessage - The exception message.
     * @param {string} errorType - conditional parameter which denoted the kind of string
     * error , defaults to StringValidationError if not provided
     */
    constructor(errormessage,errorType) {
        super(errormessage);
        this.errormessage = errormessage;
        this.errorType = errorType;
    }

}

module.exports = StringValidationException;

