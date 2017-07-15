(function() {
  'use strict';

  // var data =
  // [
  //     {
  //       "guid": "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
  //       "index": 0,
  //       "favoriteFruit": "banana",
  //       "latitude": 58.161524999999997,
  //       "company": "INDEXIA",
  //       "email": "moorehensley@indexia.com",
  //       "picture": "http://placehold.it/32x32",
  //       "registered": "2015-07-03T08:30:59 -03:00",
  //       "eyeColor": "blue",
  //       "phone": "+1 (848) 556-2344",
  //       "address": "268 Debevoise Street, Fidelis, North Carolina, 3606",
  //       "friends": [
  //         {
  //           "id": 0,
  //           "name": "Sharron Pace"
  //         }
  //       ],
  //       "isActive": false,
  //       "about": "Velit laborum aliquip voluptate incididunt dolore qui proident velit adipisicing. Pariatur sint fugiat aute eiusmod aute aliquip dolor culpa enim quis. Ea elit ad duis cillum et aliquip. Elit aliquip enim ut quis tempor. Veniam irure minim esse proident culpa Lorem duis veniam dolor anim quis laboris id laboris. Enim minim eiusmod labore do consectetur voluptate pariatur cillum fugiat dolore magna incididunt. Qui eiusmod Lorem qui irure consequat.\r\n",
  //       "balance": "$2,811.93",
  //       "name": "Moore Hensley",
  //       "skills": [
  //         "ea",
  //         "ipsum",
  //         "Lorem"
  //       ],
  //       "gender": "male",
  //       "age": 37,
  //       "greeting": "Hello, Moore Hensley! You have 5 unread messages.",
  //       "longitude": -10.931599,
  //       "_id": "56bdc339702f16daa316d2eb"
  //     },
  //     {
  //       "guid": "7a3cbd18-57a1-4534-8e12-1caad921bda1",
  //       "index": 1,
  //       "favoriteFruit": "banana",
  //       "latitude": 14.810798999999999,
  //       "company": "TUBESYS",
  //       "email": "sharlenebush@tubesys.com",
  //       "picture": "http://placehold.it/32x32",
  //       "registered": "2014-03-22T11:03:44 -02:00",
  //       "eyeColor": "blue",
  //       "phone": "+1 (855) 582-2464",
  //       "address": "848 Hicks Street, Chestnut, Palau, 5667",
  //       "friends": [
  //         {
  //           "id": 0,
  //           "name": "Briana Decker"
  //         },
  //         {
  //           "id": 1,
  //           "name": "Sharron Pace"
  //         }
  //       ],
  //       "isActive": true,
  //       "about": "Consectetur velit officia eiusmod esse labore sint anim nostrud elit nulla dolore dolor. In aute ad incididunt pariatur cupidatat do deserunt irure. Exercitation cillum enim incididunt amet Lorem ut Lorem nulla.\r\n",
  //       "balance": "$3,821.77",
  //       "name": "Sharlene Bush",
  //       "skills": [
  //         "tempor",
  //         "mollit",
  //         "velit",
  //         "commodo",
  //         "veniam",
  //         "cupidatat",
  //         "laborum"
  //       ],
  //       "gender": "female",
  //       "age": 34,
  //       "greeting": "Hello, Sharlene Bush! You have 2 unread messages.",
  //       "longitude": 65.625151000000002,
  //       "_id": "56bdc33986e3357811d1a81e"
  //     }
  // ]
  // function include(url) {
  //       var script = document.createElement('script');
  //       script.src = url;
  //       document.getElementsByTagName('head')[0].appendChild(script);
  //   }
  //
  //   include('js/data.js');

    //console.log(data);

  fetch('/js/data.json')
      .then(function (responce) {
            return response.json();
      }). then (function(data) {
        getData(data);
      });


  var dataJson = JSON.stringify(data);
  var dataBack = JSON.parse(dataJson);

  //console.log(dataBack);

  // 1. Мaссив skills всех людей, не должно быть повторящихся, отсортированы по алфавиту.


arrSkills(dataBack);
arrName(dataBack);
arrFriends(dataBack);


  function arrSkills(item) {
    var skillsMap = _.map(item, 'skills');
    var skillFlat = _.flatMap(skillsMap);
    var skillSort = skillFlat.sort(function(a,b) {
    	return a.localeCompare(b);
    });
    var finishArr = _.uniq(skillSort);
    console.log('1) Мaссив skills всех людей:',finishArr);
  }

  //2. Массив name отсортированных в зависимости от количества friends.
  function arrName(item) {
    var nameSort = _.sortBy(item, 'friends');
    var nameMap = _.map(nameSort, 'name');
    console.log('2) Сортированный массив name', nameMap);
  }

  //3. Массив всех друзей, всех пользователей без повторяющихся людей.

  function arrFriends(item) {
    var friends = _.map(item, function(list) {
      return _.map(list.friends, 'name');
    });
    var friendSort = friends.sort();
    var friendFinal = _.sortedUniq(friendSort);
    console.log('3) Массив всех друзей:', friendFinal);
  }

})();
