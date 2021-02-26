console.log('Stating app');

setTimeout(() => {
    console.log('Second setTimeout');
},0);

setTimeout(() => {
    console.log('Inside of callback');
},2000);



console.log('Finishing up');