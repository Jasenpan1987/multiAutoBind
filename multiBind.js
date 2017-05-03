module.exports = (function(){
  var oriFn;
  return function(fn, context, ...bindRest){
    oriFn = oriFn || fn;

    var func = function(...callRest) {
      return oriFn.call(context, ...(fn.args || []), ...bindRest, ...callRest)
    }
    func.args = [...(fn.args || []), ...bindRest];
    func.getOriginalFunc = () => oriFn;
    return func;
  }
}());
