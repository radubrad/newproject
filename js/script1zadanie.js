// Задание на урок 

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели'

// 2) Создать объект personflMieDB и в него поместить такие свойства:
//     -count - сюда передаестя ответ на первый вопрос
//     -movies - в это свойство поеместить пустой объект
//     -actors - тоже поместить пустой объект
//     -genres - сюда поместить пустой массив
//     -privat - в это свойство поместить boolean (логическое) заначение false

// 3) Задание пользователю по два раза вопросы: 
//      - 'Один из последних просмотренных фильмов?'
//      - 'На сколько оцените его '
// Ответы стоит поместить в отдельные переменные 
// Записать ответы в объект movies в формате:
//     movies: { 
//         'logan': '8.1'
//     }   
// Проверить, чтобы все работало без ошибок в консоли    


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);