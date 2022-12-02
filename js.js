function currentSums(numbers){
    let result = [];
 
    numbers.reduce(function(sum, current, i) {
       return result[i] = sum + current;
    }, 0);
 
    return result;
}

function sortByDesk(first, second){
    if (first == second)
        return 0;
    if (first > second)
        return -1;
    else
        return 1;
}
numerics = numerics.sort(sortByDesk);


function getArr(a, b, c) {
    let d = a.concat(b, c);
    let f = d.pop();
      while (f != undefined) {
         document.writeln(f + " ");
         f = d.pop();
      }
}