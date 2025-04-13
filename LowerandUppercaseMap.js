function mapping(arr) {
    var ans = {};
    arr.forEach(element => {
        ans[element] = element.toUpperCase();
    });
    console.log(ans);
}

mapping(["a", "b", "c"]);