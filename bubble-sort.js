class BubbleSort {
  run(list) {
    for (var i = 0; i < list.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (list[j] > list[i]) {
          let temp = list[j];
          list[j]  = list[i];
          list[i]  = temp;
        }
      }
    }

    return list;
  }
}

module.exports = BubbleSort;
