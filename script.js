const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let ans =[];
  for(let i=0;i<arr.length;i++){
    let sum=arr[i];
    if(sum>n)continue;
    let temp=[sum];
    for(let j=i+1;j<arr.length;j++,i++){
      sum+=arr[j];
      if(sum>n)break;
      temp.push(arr[j]);
    }
    ans.push(temp);
  }
  return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
