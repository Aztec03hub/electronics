/**
 * @author v.lugovksy
 * created on 16.12.2015
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function DashboardTodoCtrl($scope, baConfig) {
    'ngInject';


  $scope.transparent = baConfig.theme.EClient;
  var dashboardColors = baConfig.colors.dashboard;
  var colors = [];
  for (var key in dashboardColors) {
    colors.push(dashboardColors[key]);
  }

  function getRandomColor() {
    var i = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }

  $scope.todoList = [{
    text: 'Check me out'
  }, {
    text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro'
  }, {
    text: 'Ex has semper alterum, expetenda dignissim'
  }, {
    text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.'
  }, {
    text: 'Simul erroribus ad usu'
  }, {
    text: 'Ei cum solet appareat, ex est graeci mediocritatem'
  }, {
    text: 'Get in touch with akveo team'
  }, {
    text: 'Write email to business cat'
  }, {
    text: 'Have fun'
  }, {
    text: 'What do you think?'
  }, ];

  $scope.todoList.forEach(function(item) {
    item.color = getRandomColor();
  });

  $scope.newTodoText = '';

  $scope.addToDoItem = function(event, clickPlus) {
    if (clickPlus || event.which === 13) {
      $scope.todoList.unshift({
        text: $scope.newTodoText,
        color: getRandomColor(),
      });
      $scope.newTodoText = '';
    }
  };
}
