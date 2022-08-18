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
const firstArray = [1, 2, 3];
const secondArray = ['a', 'b', 'c'];

const combined = firstArray.concat(secondArray);
console.log(combined);

const sliced = combined.slice(2, 4); // 2. ve 4. indeks arasını alır.
// İkinci parametre geçilmezse sona kadar alır. İki parametre de geçilmezse tüm array'i alır
console.log(sliced);

// Bir obje içeren array kopyalanacaksa onun içeriği (değeri) DEĞİL
// referansı (adresi) kopyalanır. Buna DİKKAT EDİLMELİDİR.
const thirdArray = [{ id: 1 }]; // reference type

const combined2 = firstArray.concat(thirdArray);
console.log(combined2);

combined2[3].id = 10;
// referans tipi olduğu için thirdArray içeriği değişti. !!! BURASI ÖNEMLİ !!!
console.log(thirdArray);

// Aynı durum slice için de geçerlidir.

// The spread operator
// Concatanate and adding
const combined3 = [...secondArray, 'TA2LSM', ...firstArray];
console.log(combined3);

// copy
const copyArray = [...combined3];
console.log(copyArray);

//-----------------------------------------------------------
