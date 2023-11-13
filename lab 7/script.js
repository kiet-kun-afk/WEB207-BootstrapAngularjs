// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var app = angular.module('myapp', [],)
  .controller('myctrl', function
    ($scope, $interval, $http, $filter) {
    let $ctrl = this;
    $scope.dsSP = [];
    $http.get('data.json').then(
      function (res) {
        $scope.dsSP = res.data;
      },
      function (res) {
        alert('Loi');
      }
    );
    $scope.kieusapxep = 'name';
    $scope.sortBy = function (kieusapxep) {
      $scope.kieusapxep = kieusapxep;
    }
    $scope.limit = 4;
    $scope.start = 0;
    $scope.pageCount = Math.ceil($scope.dsSP.length / $scope.limit);
    $scope.first = function () {
      $scope.start = 0;
    }
    $scope.prev = function () {
      if ($scope.start > 0) {
        $scope.start -= 8;
      }
    }
    $scope.next = function () {
      if ($scope.start > ($scope.pageCount - 1) * 8) {
        $scope.start += 8;
      }
    }
    $scope.last = function () {
      $scope.start = ($scope.pageCount - 1) * 8;
    }
  });
app.filter('percentage', function ($filter) {
  return function (input, decimals) {
    if (isNaN(input)) {
      return '';
    }
    return $filter('number')(input * 100, decimals) + '%';
  };
});