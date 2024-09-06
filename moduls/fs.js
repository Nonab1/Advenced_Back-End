const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, "templates"), err=>{
//     if (err) throw new Error()

//     console.log("Folder was created successfully");
// })

// fs.mkdir(path.join(__dirname, 'notes'), err=>{
//     if (err) throw new Error()

//     console.log("Folder was created successfully");
// })

fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'Craete new course NodeJS', err=>{
    if (err) throw new Error()

    console.log("File was created successfully");
    fs.appendFile(path.join(__dirname, 'notes', 'december.txt'), ' and create new project', err=>{
        if (err) throw new Error()

        console.log("File was changed successfully");
        fs.readFile(path.join(__dirname, 'notes', 'december.txt'), (err, data)=>{
            if (err) throw new Error()
        
            console.log(Buffer.from(data).toString());
            
            // fs.readFile(path.join(__dirname, 'notes', 'december.txt'), 'utf-8', (err, data)=>{
            //     if (err) throw new Error()
            
            //     console.log(data);
            // })
        })
    })
})

