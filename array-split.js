const nums = [1,2,3,4,5]
const part = nums.slice(2,5)

const removed = nums.splice(2 , 5, 66);
 console.log(removed);
 console.log(nums);

const together = nums.join(" ")
console.log(together);