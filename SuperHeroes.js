function superHeroes(array) {
    var ans = [];
    array.forEach(element => {
        if (element.indexOf("man") != -1) ans.push(element);
    });

    console.log(ans);

}

superHeroes(["Batman", "Superman", "Spiderman", "Hulk"])

