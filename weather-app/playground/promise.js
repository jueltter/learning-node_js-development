var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked!');
        resolve();
        reject('Unable to fulfill promise');
    }, 2500);    
});

somePromise.then((message) => {
    console.log("Success:", message);
}, (errorMessage) => {
    console.log("Error:", errorMessage);
});

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        },2500);
    });
}

/*
asyncAdd(4, '2').then((result) => {
    console.log('Result:', result);
    return asyncAdd(result, 4);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((result)=>{
    console.log('Result:', result);
},(errorMessage)=>{
    console.log(errorMessage);
});
*/

asyncAdd(4, '2').then((result) => {
    console.log('Result:', result);
    return asyncAdd(result, 4);
}).then((result)=>{
    console.log('Result:', result);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});