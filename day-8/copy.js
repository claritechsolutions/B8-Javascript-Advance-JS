const arraylist = ["ubuntu linux", "kali linux", "majaro linux", "mint linux", "arch linux"]

/**
 * Copy an Array --> [...Array]
 */

// const copy_arraylist = [...arraylist];
// console.log(copy_arraylist)


/**
 * Copy an Array with DeepCopy -->
 */

const deepcopyarraylist = JSON.parse(JSON.stringify(arraylist));
console.log(deepcopyarraylist);