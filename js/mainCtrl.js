
app.controller('mainCtrl', function($scope, $http) {
   


   $scope.getContent = function(){
     $http.get("http://newsfeed.ravipula.com/api/data")
    .then(function(response) {
        $scope.posts = response.data;
       // console.log($scope.search);
   //     console.log(response.data);
        
    });

};

    $scope.postContent = function(){
   //   console.log($scope.title);
      //console.log($scope.content);

     $scope.newStr = $scope.content.split("/");
     $scope.finalStr = $scope.newStr.join("$");

   //  console.log($scope.finalStr);

      $http.post("http://newsfeed.ravipula.com/api/data/addnews/"+$scope.title+"/"+$scope.finalStr).then(function(response){
        $scope.data = response.data;
  //      console.log($scope.data);

        $scope.getContent();
    });

 };

 $scope.deletePost = function(id){
  //  console.log(id);
    $http.delete("http://newsfeed.ravipula.com/api/data/deletenews/"+id).then(function(response){
        $scope.data = response.data;
        //console.log($scope.data);

        $scope.getContent();
    });

 };



 $scope.editPost = function(id, title, feed){


    $http.put("http://newsfeed.ravipula.com/api/data/updatenews/"+id+"/"+title+"/"+feed).then(function(response){
        $scope.data = response.data;
     //   console.log($scope.data);

        $scope.getContent();
    });

  };

});