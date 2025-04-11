function convertToNumber(obj) {
    const result = {}; 
    const keys = Object.keys(obj); 

    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = Number(obj[keys[i]]); 
    }

    console.log(result); 
}

convertToNumber({piano:"200",tv:"1000",guitar:"300"});

// ! doubt