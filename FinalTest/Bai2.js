function tryRemoveFromArray(arr,x) {
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]==x) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}