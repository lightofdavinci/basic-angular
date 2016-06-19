app.controller('SuggestionController', ['$scope','$routeParams','suggestions',function($scope,$routeParams,suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
	$scope.addComment = function() {
		if(!$scope.body || $scope.body === "") {
			return false;
		}

		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		})
		$scope.body = '';
	}
	$scope.upVoteC = function(comment){
	comment.upvotes += 1;
	}
	$scope.downVoteC = function(comment){
	comment.upvotes -= 1;
	}

}])