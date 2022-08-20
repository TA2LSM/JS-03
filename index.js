//****************************************************/
// 6. BÖLÜM
//****************************************************/
// ARRAYS
// const numbers = [5, 6];
// // numbers = [5, 6]; // const ile tanımlı olduğu için Bu işlem yapılamaz ama içerik değiştirilebilir.

// // Add new element to array's end
// numbers.push(7, 8);
// // Add new element to array's begining
// numbers.unshift(1, 2);
// // Add new element to array's middle
// numbers.splice(2, 0, 3, 4, 'a'); // hangi pozisyondan (2), kaç element sil (0), ne ekle (3, 4, 'a')

// console.log(numbers);

//-----------------------------------------------------------
// Finding elements
// const numbers = [1, 2, 3, 4, 1];

// // Primitive type
// console.log(numbers.indexOf('a')); // -1 döner
// console.log(numbers.indexOf('1')); // -1 döner
// console.log(numbers.indexOf(2)); // 1 döner (2'nin indeksi)
// console.log(numbers.lastIndexOf(1)); // 4 döner

// console.log(numbers.indexOf(3) !== -1); // true döner bunun yerine aşağıdaki kullanılıyor
// console.log(numbers.includes(3));

// console.log(numbers.indexOf(2, 2)); // -1 döner (2. index'ten sonra bakıldığı için 2 numarası bulunamaz)
// console.log(numbers.indexOf(1, 2)); // 4 döner (2. index'ten sonra bakılacak. 1, ilk kez 4. indekste bulunacak)

// Reference type
// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' },
// ];

// // const course = courses.find(function (course) {
// //   return course.name === 'a';
// // });
// const course = courses.find(course => {
//   return course.name === 'c';
// });

// // bulunamazsa -1 döner
// // const courseIndex = courses.findIndex(course => {
// //   return course.name === 'a';
// // });
// // Yukardakinin en kısa hali şu:
// const courseIndex = courses.findIndex(course => course.name === 'a');

// // İlk uygun değer bulunduğu an o değer döner. arama durur.
// // kurs bulunamazsa geri dönen birşey olmaz ve course "undefined" olarak atanır
// console.log(course);
// console.log(courseIndex);

// // Arrow functions
// // function(x) {...} yerine;
// // () => {...}          // parametresiz
// // element => {...}     // tek parametreli
// // (x, y) => {...}     // birden çok parametreli

//-----------------------------------------------------------
// Removing element from array
// const numbers = [1, 2, 3, 4];

// Remove element from array's end
// const last = numbers.pop();
// console.log(last);
// console.log(numbers);

// Remove element from array's begining
// const first = numbers.shift();
// console.log(first);
// console.log(numbers);

// Remove element from array's middle
// numbers.splice(2, 2); // hangi pozisyondan (2), kaç element sil (1)
// console.log(numbers);

//-----------------------------------------------------------
// Emptying an array
// let numbers = [1, 2, 3, 4]; // let ile tanımlanmak zorunda
// let numbers2 = numbers; //reference type definition

// // Solution 1 - Tek referans varsa kullanılır.
// // numbers = [];
// // eski array hafızada bir yerde kalır ve bir süre sonra garbage collector ile free edilir
// // numbers2 tanımlanmışsa garbage collector numbers'ı temizlemeyecektir.
// // BU YÖNTEMİ AYNI YERİ REFERANS ALAN DEĞİŞKENLER YOKSA KULLANINIZ...

// // Solution 2 - birden çok referans varsa hızlı ve temiz bir çözümdür.
// // numbers.length = 0;

// // Solution 3
// // numbers.splice(0, numbers.length); // baştan başlayıp sonuna kadar ne varsa siler

// // Solution 4 - Tercih edilmez
// // while (numbers.length > 0) numbers.pop();
// // çok tekrardan dolayı performans düşüşü olacaktır.

// console.log(numbers);
// console.log(numbers2); // iki referans da boşaltılır

//-----------------------------------------------------------
// Combining arrays (primitive)
// const firstArray = [1, 2, 3];
// const secondArray = ['a', 'b', 'c'];

// const combined = firstArray.concat(secondArray);
// console.log(combined);

// const sliced = combined.slice(2, 4); // 2. ve 4. indeks arasını alır.
// // İkinci parametre geçilmezse sona kadar alır. İki parametre de geçilmezse tüm array'i alır
// console.log(sliced);

// // Bir obje içeren array kopyalanacaksa onun içeriği (değeri) DEĞİL
// // referansı (adresi) kopyalanır. Buna DİKKAT EDİLMELİDİR.
// const thirdArray = [{ id: 1 }]; // reference type

// const combined2 = firstArray.concat(thirdArray);
// console.log(combined2);

// combined2[3].id = 10;
// // referans tipi olduğu için thirdArray içeriği değişti. !!! BURASI ÖNEMLİ !!!
// console.log(thirdArray);

// // Aynı durum slice için de geçerlidir.

// // The spread operator
// // Concatanate and adding
// const combined3 = [...secondArray, 'TA2LSM', ...firstArray];
// console.log(combined3);

// // copy
// const copyArray = [...combined3];
// console.log(copyArray);

//-----------------------------------------------------------
// Iterating array
// const numbers = [1, 2, 3];

// // for (let number of numbers) console.log(number);

// // yerine aşağıdaki gibi yazılabilir:
// // numbers.forEach(function (number) {
// //   console.log(number);
// // });

// // daha kısa şekli şöyle:
// numbers.forEach(number => console.log(number));

// // iki parametre de alabiliyor ama index parametresi MUTLAKA 2. parametre olmalıdır !!!
// numbers.forEach((number, index) => console.log(`Index ${index}: Value: ${number}`));

//-----------------------------------------------------------
// Joining arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join(','); // String döner
// console.log(joined);

// // Hatırlatma
// const message = 'This is a message!';
// const splitted = message.split(' '); // String array döner
// console.log(splitted);

// const joined2 = splitted.join('-'); // String döner
// console.log(joined2);

// //------------------------
// const baseUrl = 'https://stackoverflow.com/questions/9543518/';
// const title = 'Creating arrays in Javascript';

// const url = baseUrl + title.toLocaleLowerCase().split(' ').join('-');
// console.log(url); //url slug

//-----------------------------------------------------------
// Sorting arrays
// const numbers = [3, 1, 2];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//   { id: 1, name: 'NodeJs' },
//   { id: 2, name: 'javaScript' },
//   { id: 3, name: 'Angular' },
// ];

// // // "sort" metodu her "courses" elemanı için tek tek çalışır.
// // // callback fonksiyonundaki kritere uyan değer return edilir.
// // // sort işlevi buna göre yer değişikliği yapar.
// courses.sort((a, b) => {
//   // a < b => -1
//   // a > b => 1
//   // a = b => 0
//   if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
//   if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
//   return 0;
// });

// console.log(courses);

//-----------------------------------------------------------
// Testing the elements of an array
// const numbers = [1, -1, 2, 3];

// // every metodu içerdeki callback fonksiyonunun dönüşüne göre işlem yapıyor
// const allPositive = numbers.every(value => {
//   return value >= 0;
// });
// console.log(allPositive);

// const atLeastOnePositive = numbers.some(value => {
//   return value >= 0;
// });
// console.log(atLeastOnePositive);

// const atLeastOneNegative = numbers.some(value => {
//   return value < 0;
// });
// console.log(atLeastOneNegative);

//-----------------------------------------------------------
// Filtering an array
// const numbers = [1, -1, 2, 3];

// // v for value, n for number
// const f// ltered = numbers.filter(n => n >= 0); // array döner
// // console.log(filtered);

// // Mapping an array - Bir array'den başka bir formatta array ya da obje oluşturma
// // const items = filtered.map(n => '<li>' + n + '</li>'); // array
// // const html = '<ul>' + items.join('') + '</ul>'; // string
// // console.log(html);

// // const items = filtered.map(n => {
// //   return { value: n };
// // }); // object
// const items = filtered.map(n => ({ value: n })); // object array döner
// console.log(items);

// // return değerleri array olduğundan bu iki metot, chain olarak yazılabilir.
// const items2 = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n }))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);
// console.log(items2);

//-----------------------------------------------------------
// Reducing an array
// const numbers = [1, -1, 2, 3];

// // sondaki ", 0" ile accumulator = 0 olarak başlatılıyor
// // callback her defasında acc + curValue değerini accumulator üzerine yazıyor.
// // accumulator sırasıyla >> 1, 0, 2, 5 oluyor. reduce metodu numbers.length kadar
// // çalışıyor.
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// // accumulator = 0 olarak ayarlanmazsa ilk değeri, dizinin ilk elemanı olarak
// // alınır. (1) yukarıya "return" ve "{}" yazılmayabilir.

// console.log(sum);

//-----------------------------------------------------------
// Exercise 1: Array from range
// const numbers = arrayFromRange(-4, -10);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   //   if (min >= max) return;

//   const array = [];
//   for (let i = min; i <= max; ++i) array.push(i);

//   return array;
// }

//-----------------------------------------------------------
// Exercise 2: Includes
// const numbers = [1, 2, 3, 4];

// // My solution
// function includes(array, searchElement) {
//   const result = array.filter(v => v === searchElement);

//   if (result.length === 0) return false;
//   return true;
// }

// // Course solution
// function includes2(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// console.log(includes(numbers, 1));
// console.log(includes2(numbers, 5));

//-----------------------------------------------------------
// Exercise 3: Except
// const numbers = [1, 2, 3, 4, 1, 3];

// //-------------------------
// // const output = except(numbers, 1);
// // console.log(output);

// // function except(array, excluded) {
// //   return array.filter(e => e !== excluded);
// // }

// //-------------------------
// // const output2 = except2(numbers, [1, 4]);
// // console.log(output2);

// // // My solution
// // function except2(array, excluded) {
// //   let result = [...array];
// //   let temp = [];
// //   const items = excluded.length;

// //   for (let i = 0; i < items; ++i) {
// //     temp = result.filter(e => e !== excluded[i]);
// //     result = [...temp];
// //   }

// //   return result;
// // }

// //-------------------------
// const output3 = except3(numbers, [1, 4]);
// console.log(output3);

// // Course solution
// function except3(array, excluded) {
//   const output = [];
//   for (let el of array) if (!excluded.includes(el)) output.push(el);

//   return output;
// }

//-----------------------------------------------------------
// Exercise 4: Moving an element
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, -1);
// console.log(output);

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error('Invalid Offset');
//     return;
//   }

//   const output = [...array]; // kopya alıyoruz yoksa orijinal dizi değişir
//   const element = output.splice(index, 1)[0];
//   //silinen elementi dizi olarak döner. sona [0] eklenirse değeri alınır
//   //   console.log(element);
//   output.splice(position, 0, element);

//   return output;
// }

//-----------------------------------------------------------
// Exercise 5: Count Occurrences
// const numbers = [1, 2, 3, 4, 1, 1, 2, 2, 2];

// const count = countOccurrences(numbers, 2);
// console.log(count);

// function countOccurrences(array, searchElement) {
//   // Solution 1
//   //   let result = 0;
//   //   for (let val of array) if (val === searchElement) ++result;
//   //   return result;

//   // Solution 2
//   //   return array.reduce((acc, curValue) => {
//   //     const occurence = curValue === searchElement ? acc + 1 : acc + 0;
//   //     // console.log(acc, curValue, searchElement);
//   //     return occurence;
//   //   }, 0);

//   return array.reduce((acc, curValue) => {
//     const occurence = curValue === searchElement ? 1 : 0;
//     // console.log(acc, curValue, searchElement);
//     return acc + occurence;
//   }, 0);
// }

//-----------------------------------------------------------
// Exercise 6: Get max
// const numbers = ['asd', { value: 34 }, 1, 21, 2, '27', 3, 8, 4, 'a', 12];

// // const max = getMax(numbers);
// // const max = getMax([1, 5, 2, 8]);
// // console.log(max);

// // My solution
// // function getMax(array) {
// //   if (array.length === 0) return undefined;

// //   let max = 0;
// //   for (let val of array) {
// //     if (typeof val === 'number') {
// //       max = val;
// //       break;
// //     }
// //   }
// //   //console.log(max);

// //   for (let val of array) {
// //     if (isNaN(val) || typeof val === 'string') continue;
// //     if (max < val) max = val;
// //   }

// //   return max;
// // }

// // Reduce method
// const numbers2 = numbers.filter(v => typeof v === 'number');
// const max = getMax(numbers2);
// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   return array.reduce((acc, curVal) => (acc > curVal ? acc : curVal));
//   // Başlangıç değeri atanmadığı için acc'nin ilk değeri dizinin ilk elemanı oluyor.
// }

//-----------------------------------------------------------
// Exercise 7: Movies
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// Get all movies in 2018 with rating > 4
// Sort them by their rating in descending order
// Pick their title and display it on the console >> 'b' ve 'a' çıkmalı

// My solution
// const filteredMovies = getMovies(movies);
// console.log(filteredMovies);

// function getMovies(array) {
//   let result = [...array];
//   let tmp = [];

//   for (let index in result) {
//     if (result[index].year === 2018) tmp.push(result[index]);
//   }

//   result = [...tmp];
//   tmp.length = 0;
//   for (let index in result) {
//     if (result[index].rating > 4) tmp.push(result[index]);
//   }

//   tmp.sort((a, b) => {
//     return a.rating > b.rating ? -1 : 1;
//   });

//   result.length = 0;
//   result.push(tmp.map(el => el.title));
//   return result;
// }

// Course Solution
const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);
