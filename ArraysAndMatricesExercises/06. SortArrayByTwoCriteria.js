function letters(arr){
  let result = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).sort((a, b) => a.length - b.length);
  console.log(result.join('\n'));
}
letters(['alpha', 'Beta', 'gamma']);