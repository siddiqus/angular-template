app.controller('HomeController', [
    '$scope', 'TextFileReader',
    function($scope, TextFileReader) {
        var fileUrl = 'assets/page-text/home.txt';
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';

        $scope.getText = function() {
            TextFileReader.getText(fileUrl).then(function(data) {
                $scope.text = data.trim();
            });
        }

    }
]);