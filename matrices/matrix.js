import readlineSync from "readline-sync"

function create2dArray(){
    let rows = readlineSync.questionInt(`Enter number of rows :`)
    let cols = readlineSync.questionInt(`Enter number of cols :`)
        // console.log(rows,cols);
        let mat = new Array(rows)
        for(let i = 0; i<mat.length;i++){
            mat[i] = new Array(cols)
        }
        for(let j=0;j<mat.length;j++){
            for(let k = 0; k<mat[0].length;k++){
                mat[j][k] = readlineSync.questionInt(`Enter element at ${j},${k} : `)
            }
            
        }console.log(mat);
        return mat;
}
create2dArray()

