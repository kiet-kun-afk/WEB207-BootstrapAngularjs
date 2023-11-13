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

var app = angular.module('myapp', ['ngRoute'])
  .controller('myctrl1', function
    ($scope, $rootScope) {

    $scope.ages = [
      {
        age: 'Dưới 25',
        rate: 0.07
      },
      {
        age: 'Từ 25-40',
        rate: 0.1
      },
      {
        age: 'Trên 40',
        rate: 0.15
      }
    ]
    $scope.age = $scope.ages[1]
    $scope.gender = 'NAM'

    $scope.getResult = function () {
      var result = $scope.age.rate * $scope.salary
      if ($scope.gender == "NU") {
        result += 200000
      }
      return result
    }
    $scope.items = [
      {
        name: 'Nước ngọt',
        price: 10000
      },
      {
        name: 'Cà phê đen',
        price: 12000
      },
      {
        name: 'Thuốc lá',
        price: 18000
      }
    ]
    $scope.getAmount = function () {
      var amount = 0;
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].buy) {
          amount += $scope.items[i].price * $scope.items[i].quantity
        }
      }
      return amount
    };
    $scope.showMessage = false;

    $scope.checkNumber = function () {
      if ($scope.number % 2 !== 0 && $scope.number % 9 !== 0) {
        $scope.showMessage = true;
      } else {
        $scope.showMessage = false;
      }
    };
  });