let result='';

    let rel ={
        "-3": ["great grandfather",  "great grandmother"],
        "-2": ["grandfather","grandmother"],
        "-1":["father",  "mother"],
        "0": ["me!", "me!"],
        "1":["son",  "daughter"],
        "2"  :["grandson","granddaughter"],
        "3" :["great grandson","great granddaughter"]
            }
            
function findAncestor(num,gender){
    let keys = Object.keys(rel); 
            
                for(let key of keys){

                    if(key == num.toString() && gender ==="f")
                        result= rel[key][1];
                        
                    else if(key == num.toString() && gender ==="m")
                        result= rel[key][0];
                    }
    return result
}
console.log(findAncestor(1,'f'));