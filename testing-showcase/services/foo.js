/*
 * An example service
 *
 */

/**
 * An example function that simulates an expensive computation or integration point
 * to an external system.
 *
 * @param cb a callback function to execute when a response is ready.
 * cb will be given two parameters: an error (if any) and a response (if any).
 */
module.exports.foo_function = function(cb){
  setTimeout(function(){
    cb(undefined, 'done!');
  }, 2500);
};