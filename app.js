angular.module("SDA", ['ngResource']).controller("users", function ($scope, $resource) {


    //pobieranie z url

   // $resource('url:id');

    var resource = $resource('https://jsonplaceholder.typicode.com/users/:user');

    //get (adres url, co zrobić z tym co przyjdzie) - zwraca promise,
    // promise jest pusta poki zapytanie się nie wykona, następnie trzeba wywołać then
    // $http.get("https://jsonplaceholder.typicode.com/users").then(function (res) {
    //     $scope.users = res.data;
    //
    // })

    $scope.users = resource.query(function (users) { //pierwsza funkcja mówi o sukcesie a druga o błędzie
    }, function() {
        $scope.error = true;
    });

    //z dokumentacji rest - rest to pewnym standardem
    //sposoby
    //get -> /users/{id}
    //post -> users
    //delete -> /users/{id}
    //put -> /users albo put -> /users/{id}


    $scope.more = function () {
        $scope.limit = $scope.limit + 10;
    }

    $scope.schouldShowMoreButton = function () {
        return $scope.users && $scope.limit < $scope.users.length
    }

    $scope.remove = function (index) {
        $scope.users.splice(index, 1);
    }

    $scope.addUser = function () {
        $scope.users.push({
            username: $scope.newName,
            phone: $scope.newRole
        })
        $scope.newName = "";
        $scope.newRole = "";
    }

    // $scope.users = [
    //     {
    //         username: "Kuba",
    //         role: "admin"
    //     }, {
    //         username: "Justa",
    //         role: "manager"
    //     }, {
    //         username: "Kyc",
    //         role: "user"
    //     }, {
    //         username: "Mati",
    //         role: "user"
    //     }, {
    //         username: "Jakub",
    //         role: "kupa"
    //     }, {
    //         username: "Dupa",
    //         role: "kupa"
    //     },
    // ]

    $scope.limit = 2
    //scope nazwa angularowa
    //.hello nazwa naszej zmiennej
}).controller("TabsCtrl", function ($scope) {
    $scope.current = 1;

    $scope.changeTab = function (tab) {
        $scope.current = tab;
    };

    $scope.isCurrent = function (tab) {
        return tab === $scope.current
    };


});

//    angular.module("photo", []).controller("photos", function () {
//        this.oprasek = "http://www.cezaryskorka.pl/lodz/pop/26.jpg"
//    })

//ng-cloack - chowa elementy strony

//każdy controller robi sie każdy w osobnym pliku. Zbiera się wszystkie webpackiem