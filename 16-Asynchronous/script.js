'use strict';
//  https://restcountries.com/v2/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', err);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
// </article>
// `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('usa');

// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)} people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // render country1
//     renderCountry(data);

//     // Get neighbor country2
//     const [neighbor] = data.borders;
//     if (!neighbor) return;

//     // AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       // render country2
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// // callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

//  verbose

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('portugal');

// simplified

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data, 'neighbour');
//     });
// };

// getCountryData('portugal');

//

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch((err) => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       console.log("I'll be called even if an error is caught");
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('portugal');
// });

// getCountryData('asdasd');

//

/*

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('This Country hsd no neighbours');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => {
      renderCountry(data, 'neighbour');
    })
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      console.log("I'll be called even if an error is caught");
      countriesContainer.style.opacity = 1;
    });
};

*/

// btn.addEventListener('click', () => {
//   getCountryData('portugal');
// });

// getCountryData('usa');

/*

const whereAMi = function (lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  fetch(url)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error geocoding ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.region}, ${data.country}`);
      return getCountryData(data.country);
    })
    .catch((err) => {
      console.error(`Oops Something went wrong! ${err}`);
    });
};

whereAMi('52.508', '13.381');
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw....');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win!');
    }
    reject(new Error('You loose :('));
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((e) => console.error(e));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));
*/

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('This Country hsd no neighbours');
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => {
      renderCountry(data, 'neighbour');
    })
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      console.log("I'll be called even if an error is caught");
      countriesContainer.style.opacity = 1;
    });
};

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

/*
const whereAMi = function (lat, lng) {
  getPosition()
    .then((pos) => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error geocoding ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.region}, ${data.country}`);
      return getCountryData(data.country);
    })
    .catch((err) => {
      console.error(`Oops Something went wrong! ${err}`);
    });
};

btn.addEventListener('click', whereAMi);

*/

//
/*
const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

createImage('img/img-1.jpeg')
  .then((img) => {
    currentImg = img;
    console.log('image loaded');
    return wait(5);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpeg');
  })
  .then((img) => {
    currentImg = img;
    console.log('image loaded');
    return wait(5);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((e) => {
    console.error(e);
  });

  */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// same as:
// const res = await fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));

const whereAMi = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) {
      throw new Error(`Error getting Geolocation data!`);
    }
    const dataGeo = await (await resGeo).json();
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) {
      throw new Error(`Error getting location data!`);
    }
    const data = await res.json();
    renderCountry(data[0]);

    return `2: You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(`Oops! ${error}`);
    renderError(`Oops! ${error.message}`);

    // Reject promised returned from async function
    throw err;
  }
};

// console.log('1: Getting location...');
// whereAMi()
//   .then((city) => console.log(city))
//   .catch((error) => console.log(error.message))
//   .finally(() => {
//     console.log('3: finished getting locaction!');
//   });

///

// (async function () {
//   console.log('1: Getting location...');
//   try {
//     const city = await whereAMi();
//     console.log(city);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log('3: finished getting locaction!');
// })();

//

/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('portugal', 'canada', 'russia');
*/

const imageContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

const loadAll = async function (imgPathArr) {
  try {
    const imgs = imgPathArr.map(async (path) => await createImage(path));
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach((img) => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
    renderError(error);
  }
};

loadAll(['img/img-1.jpeg', 'img/img-2.jpeg', 'img/img-3.jpeg']);
