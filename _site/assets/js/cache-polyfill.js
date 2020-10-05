/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Cache.prototype.add||(Cache.prototype.add=function add(t){return this.addAll([t])}),Cache.prototype.addAll||(Cache.prototype.addAll=function addAll(r){function n(t){this.name="NetworkError",this.code=19,this.message=t}var o=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return r=r.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(r.map(function(t){"string"==typeof t&&(t=new Request(t));var e=new URL(t.url).protocol;if("http:"!==e&&"https:"!==e)throw new n("Invalid scheme");return fetch(t.clone())}))}).then(function(t){return Promise.all(t.map(function(t,e){return o.put(r[e],t)}))}).then(function(){return undefined})});