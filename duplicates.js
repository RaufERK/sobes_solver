var removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    console.log(nums[index], nums[index + 1], nums[index] === nums[index + 1]);
    if (nums[index] === nums[index + 1]) {
      nums.splice([index + 1], 1);
      index -= 1;
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 2]));
