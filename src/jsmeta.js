
Function.prototype.meta = function(metaName){
    var s = this.toString();
    var startIndex = s.indexOf('/*@'+ metaName) + '/*@'+ metaName.length;
    var endIndex = s.indexOf('*/');
    return s.substring(startIndex, endIndex);
};
