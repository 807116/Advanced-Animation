let arr2 = randomNum(5, 15, 7);

getMean(arr2);
getMedian(arr2);
getMode(arr2);


function randomNum(a, b, n){
    let arr = [];
    for(let i = 0; i<n; i++){
        arr[i] = Math.floor(Math.random() * (b-a) + a);
    }
    console.log(arr);
    return (arr);


}

function getMean(arr){
    let count = 0;
    for(let j = 0; j<arr.length; j++){
        count += arr[j];
    }
    console.log(count/arr.length);
}

function getMedian(arr){
    let median;
    arr.sort();
    if(arr.length%2==0){
        median = ((arr[arr.length/2]) + (arr[arr.length/2+1]));
        console.log(median/2);
    }
    else{
        median = arr[Math.floor(arr.length/2)];
        console.log(median);
    }

}

function getMode(arr){
    let mode = 0;
    let count = 1;
    let x = 0;
    let max = 0;
    let mode2 = 0;
    arr.sort();
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            count ++;
            x++;
            //max++;
           if(count >= max){
                x = count;
                max = x;
                mode = arr[i];
            }
            // if(count == x){
            //     mode2 = arr[i];
            // }

        }
        else{
            count = 1;
            
        }
    }
    console.log(mode);
    // if(mode2 != 0){
    //     console.log(mode2);
    // }
}

