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

var app = angular.module('myapp', []).controller('myctrl', function
  ($scope) {
  $scope.fullname = 'Mai Nguyễn Văn Kiệt';
  $scope.birthday = '14-02-2002';
  $scope.gender = 'Nam';
  $scope.photo = 'Cat Siamese.png';
  $scope.mark = 10.5;
});

var app2 = angular.module('myapp2', []).controller('myctrl2', function
  ($scope) {
  $scope.student = {
    fullname: 'Mai Nguyễn Văn Kiệt',
    birthday: '14-02-2002',
    gender: 'Nam',
    photo: 'Cat Siamese.png',
    mark: 10.5
  }
});

var app3 = angular.module('myapp3', []).controller('myctrl3', function
  ($scope) {
  $scope.students = [{
    fullname: 'Mai Nguyễn Văn Kiệt',
    birthday: '14-02-2002',
    gender: 'Nam',
    photo: 'pepe-rage.png',
    mark: 9.5
  },
  {
    fullname: 'Nguyễn Văn Tèo',
    birthday: '04-12-2000',
    gender: 'Nam',
    photo: 'Cat Siamese.png',
    mark: 0.5
  },
  {
    fullname: 'Phạm Thị Nở',
    birthday: '10-01-2001',
    gender: 'Nữ',
    photo: 'sadge-pray.png',
    mark: 5.0
  }]
});