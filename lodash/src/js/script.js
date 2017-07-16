//(function() {
  'use strict';

  var dataJson = JSON.stringify(data);
  var dataBack = JSON.parse(dataJson);

  //console.log(dataBack);

  arrSkills(dataBack);
  arrName(dataBack);
  arrFriends(dataBack);

  // 1. Мaссив skills всех людей, не должно быть повторящихся, отсортированы по алфавиту.

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

//})();
