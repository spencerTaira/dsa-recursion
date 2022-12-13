/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if (nums[idx] === undefined) return 1;

  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, result=0) {
  if (words[idx] === undefined) return result;

  if (words[idx].length > result) result = words[idx].length;
  return longest(words, idx + 1, result);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
  if (str[idx] === undefined) return '';

  if (idx % 2 === 0) {
    return str[idx] + everyOther(str, idx + 1);
  }

  return everyOther(str, idx + 1);
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val, idx=0) {
  if (arr[idx] === undefined) return false;
  if (arr[idx] === val) return true;

  return find(arr, val, idx + 1);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str[0] === str[str.length-1]) {
    return isPalindrome(str.slice(1,-1))
  }

  return false;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0) {
  if (str[idx] === undefined) return '';

  return str[str.length - 1 - idx] + revString(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (arr[idx] === undefined) return -1;

  if (arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, result=[]) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      gatherStrings(obj[key], result);
    } else if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    }
  }

  return result;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return false;
  if (arr.length === 1) {
    return arr[0] === val ? true : false;
  }

  let middle = Math.floor(arr.length / 2); // right side
  if (val < arr[middle]) {
    return binarySearch(arr.slice(0, middle), val);
  } else {
    return binarySearch(arr.slice(middle), val);
  }
}

/*
[1, 2, 3, 4, 5], 4
idx = 2 -> 3
*/

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, leftI=0, rightI=arr.length) {
  if (leftI > rightI) return -1;
  if (leftI === rightI) {
    return arr[leftI] === val ? leftI : -1;
  }

  let middle = Math.floor((leftI + rightI) / 2); // right side
  if (val === arr[middle]) {
    return middle;
  } else if (val < arr[middle]) {
    return binarySearchIndex(arr, val, leftI, middle-1);
  } else {
    return binarySearchIndex(arr, val, middle+1, rightI);
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
