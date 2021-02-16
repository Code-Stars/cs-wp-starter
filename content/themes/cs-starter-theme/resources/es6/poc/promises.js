'use strict';

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Good to go!');
    }, 1000);
});

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('promise 2 error');
        resolve('promise 2');
    }, 1500);
});

// multiple promises that need to succeed
// Promise.all([myPromise, myPromise2])
//     .then((data) => {
//         // all done
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

function addToPage(contents) {
    let result = document.createElement('span');
    result.innerHTML = contents;
    document.body.appendChild(result);
}

let fetchJoke = new Promise((resolve, reject) => {
    fetch('http://api.icndb.com/jokes/random/1').then((res) => {
            res.json().then((data) => {
                resolve(data['value'][0].joke);
            });
        }
    ).catch((err) => {
        reject(err);
    });
});
//
// fetchJoke.then((data) => {
//     addToPage(data);
// });
