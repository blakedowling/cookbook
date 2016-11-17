app.controller('MainController',
  ['$scope', function($scope) {
    // $scope.title = 'Top Recipes from Natalie Dowling';
    // $scope.promo = 'Click here for coupons';
    $scope.desserts = 
      [
      	{
          name: 'buckeyes',
          price: 15,
          pubdate: new Date('2014', '03', '08'),
          cover: '/../images/buckeyes.JPG',
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Pumpkin chocolate chip cookies',
          price: 10,
          pubdate: new Date('2013', '08', '01'),
          cover: '/../images/muffins.JPG',
          likes: 0,
          dislikes: 0
          },
          {
            name: 'Caramel Apples',
            price: 5,
            pubdate: new Date('1960', '6', '11'),
            cover: '/../images/caramelApple.JPG',
            likes: 0,
            dislikes: 0
          }
        ];
        $scope.plusOne = function(index) {
          $scope.products[index].likes += 1;
        };
        $scope.minusOne = function(index) {
          $scope.products[index].dislikes += 1;
        };
      }
    ]
  );