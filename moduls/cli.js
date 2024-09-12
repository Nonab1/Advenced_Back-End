const logger = ()=>{
    const res = {}

    for (let i = 0; i < array.length; i++) {
        const arg = process.argv[i].split("=");
        res[arg[0]] = arg[1] ? arg [1] : true;
    }

    return res;
}

console.log(logger());