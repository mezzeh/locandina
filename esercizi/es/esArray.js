let arr = [5,6,7,5,43,3,5]
/* console.log(arr)
console.log(replace (arr,5,6))
function replace (arr,target,replace)
{
    let array = []
    for (let i = 0; i <= arr.length; i++)
        arr[i] == target ? array[i] = replace : array[i] = arr[i];
    return array;
}
 */
function replace(arr, target, replaceValue) {
    const array = [];
    for (let i in arr) {
        array[i] = arr[i] === target ? replaceValue : arr[i];
    }
    return array;
}