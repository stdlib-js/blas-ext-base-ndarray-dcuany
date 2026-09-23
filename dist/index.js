"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=v(function(g,n){
var q=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),a=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/blas-ext-base-dcuany/dist').ndarray;function o(t){var r=t[1],e=t[0];return d(q(e,0),a(e),i(e,0),u(e),a(r),i(r,0),u(r)),r}n.exports=o
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
