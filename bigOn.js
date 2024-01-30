const names=['memo'];

const moreNames= new Array(1000).fill('memo')

function memofinder(array){
for(let i=0; i<array.length;i++){

    if(array[i]==='memo'){
        console.log("memo find at index: "+ i )
    }
}

}
memofinder(moreNames);


