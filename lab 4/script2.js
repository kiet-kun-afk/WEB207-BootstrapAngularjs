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

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.sinhVien = {

    fullname: '',
    birthday: '',
    gender: '',
    photo: 'sadge-pray.png',
    mark: ''
  };

  $scope.xepLoaiHocLuc = '';
  $scope.daXepLoai = false;

  $scope.xepLoai = function() {
    if ($scope.sinhVien.mark >= 5) {
      $scope.xepLoaiHocLuc = 'Đậu';
    } else {
      $scope.xepLoaiHocLuc = 'Rớt';
    }
    $scope.daXepLoai = true;
  };
});