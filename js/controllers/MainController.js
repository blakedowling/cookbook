app.controller('MainController',
  ['$scope', function($scope) {
    // $scope.title = 'Top Recipes from Natalie Dowling';
    // $scope.promo = 'Click here for coupons';
    $scope.desserts = 
      [
      	{
          name: 'buckeyes',
          price: 15,
          description: 'Chocolate-covered peanut butter balls #GoBuckeyes',
          cover: '/../images/buckeyes.JPG',
          likes: 0,
          dislikes: 0
        },
        {
          name: 'Pumpkin chocolate chip cookies',
          price: 10,
          description: 'Good in the fall and good all year round',
          cover: '/../images/muffins.JPG',
          likes: 0,
          dislikes: 0
          },
          {
            name: 'Caramel Apples',
            price: 5,
            description: 'Especially good wehn watching a scary movie in October',
            cover: '/../images/caramelApple.JPG',
            likes: 0,
            dislikes: 0
          }// },
          // {
          //   name: 'Cupcakes',
          //   price: 4,
          //   pubdate: new Date('2015', '10', '30'),
          //   cover: '/../images/cupcakes.JPG',
          //   likes: 0,
          //   dislikes: 0
          // }
        ];
        $scope.plusOne = function(index) {
          $scope.desserts[index].likes += 1;
        };
        $scope.minusOne = function(index) {
          $scope.desserts[index].dislikes += 1;
        };
        $scope.meals = 
        [
          {
            name: 'Thanksgiving',
            price: 20,
            pubdate: new Date('1620', '11', '25'),
            cover: '/../images/thanksgiving.JPG',
            likes: 0,
            dislikes: 0
          }, {
            name: 'Chicken Curry',
            price: 9,
            pubdate: new Date('2016', '11', '19'),
            cover: '/../images/chickenCurry.JPG',
            likes: 0,
            dislikes: 0
          }
        ];
      }
    ]
  );