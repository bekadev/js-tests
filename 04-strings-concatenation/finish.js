/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const firstName = 'Bekzat';
const secondName = 'Kyzyrbayev';
const profession = 'FrontendDevelopment';

const person = 'Меня зовут ' + firstName + secondName + ' и я ' + profession;

console.log(person);

const newPerson = `Меня зовут ${firstName} ${secondName} и я ${profession}`

console.log(newPerson)