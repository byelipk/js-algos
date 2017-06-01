class BubbleSort {
  run(list) {
    // If the list only contains 1 element
    // then we can return it as is.
    if (list.length === 1) {
      return list;
    }

    for (let i = 0; i < (list.length - 1); i++) {
      let swapped = false;
      
      for (let j = 0; j < (list.length - 1 - i); j++) {
        if (list[j + 1] < list[j]) {
          let temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
          swapped = true;
        }
      }

      // If the sort makes no exchanges then
      // the algorithm can be stopped
      if (!swapped) break;
    }

    return list;
  }
}

module.exports = BubbleSort;
