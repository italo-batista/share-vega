exports.removeItemFromArray = function(mArray, item) {
  var itemIndex = mArray.indexOf(item);
  if (itemIndex > -1) {
    mArray.splice(itemIndex, 1);
  }
  return mArray;
};
