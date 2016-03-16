angular.module('mockInterview', []).controller('mockInterviewCtrl',
    ['$scope','$timeout',function($scope, $timeout){

        $scope.UI  = {}; //mockInterview page is UI
        $scope.UI.generalInformation = {}; //generalInformation section
        $scope.UI.verbalSection = {}; //verbalSection section



        $scope.tab = 1; // ng-init="tab = 1"

        $scope.GQquestions = [
            {name:'aaa'},
            {name:'bbb'},
            {name:'ccc'},
            {name:'ddd'},
            {name:'eee'},
            {name:'fff'},
            {name:'ggg'},
            {name:'hhh'},
            {name:'iii'},
            {name:'jjj'},
            {name:'kkk'},
            {name:'lll'},
            {name:'mmm'},
            {name:'nnn'},
            {name:'ooo'}
        ];
        //$scope.GQQuestion  = '';  //General Question Search
        //$scope.changeQuestion = function(newQuestion) {
        //    $scope.GQQuestion = newQuestion;
        //};

        $scope.BQquestions = [
            {name:'aaa'},
            {name:'bbb'},
            {name:'ccc'},
            {name:'ddd'},
            {name:'eee'},
            {name:'fff'},
            {name:'ggg'},
            {name:'hhh'},
            {name:'iii'},
            {name:'jjj'},
            {name:'kkk'},
            {name:'lll'},
            {name:'mmm'},
            {name:'nnn'},
            {name:'ooo'}
        ];
        //$scope.BQQuestion  = '';
        //$scope.switchQuestion = function(newQuestion) {
        //    $scope.BQQuestion = newQuestion;
        //};
        //
        //$scope.TQQuestion  = '';
        $scope.rates = [
            {name:'Needs work', point: 0},
            {name:'Good', point: 1},
            {name:'Excellent', point: 2}
        ];
        //$scope.rateValue= function(rateName) {
        //   if (rateName == $scope.rates[0].name) {
        //       return $scope.rates[0].point;
        //   }
        //    if (rateName == $scope.rates[1].name) {
        //        return $scope.rates[1].point;
        //    }
        //    if (rateName == $scope.rates[2].name) {
        //        return $scope.rates[2].point;
        //    }
        //}


        $scope.log  = function(logdata) //for test
        {
            console.log(logdata);
        };

        $scope.ObjClone  = function(obj)    //copy/clone an object content
        {
            return JSON.parse(JSON.stringify(obj));
        };


        $scope.DelaySet  = function(obj,attr,data,delaytime)
        {
            timer = $timeout(function(){
                obj[attr]=data;
            }, delaytime);
        };


        $scope.comments = [
            {name:'good'},
            {name:'nice'},
            {name:'poor'},
            {name:'need improve'},
            {name:'good fit'},
            {name:'excellent'}
        ];
        $scope.GQComment  = '';
        $scope.changeComment = function(newComment) {
            $scope.GQComment = newComment;
        };

        $scope.BQComment  = '';
        $scope.switchComment = function(newComment) {
            $scope.BQComment = newComment;
        };




        $scope.TQComment  = '';


        $scope.sortType     = 'competency'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchContent   = '';     // set the default search/filter term

        //initial one set, add a new set, remove a set
        $scope.GQs = [{id: 'GQ1'}];
        $scope.GQSum = function () {
            var i = 0;
            var sum = 0;
            for (i=0; i < $scope.GQs.length; i++) {
                sum += $scope.GQs[i].rate.point;
            }
            return sum;
            //return sum + "/" + $scope.GQs.length*2;
        }
        $scope.GQSumOfGQAll = function () {
            return Math.ceil($scope.GQSum()/($scope.GQs.length*2)*100) + '%';
        }
        $scope.addNewGQ = function() {
            var newItemNo = $scope.GQs.length+1;
            $scope.GQs.push({'id':'GQ'+newItemNo});
        };
        $scope.removeGQ = function(GQ) {
            var lastItem = $scope.GQs.length-1;
            $scope.GQs.splice(lastItem);
        };

        $scope.BQs = [{id: 'BQ1'}];
        $scope.BQSum = function () {
            var i = 0;
            var sum = 0;
            for (i=0; i<$scope.BQs.length; i++) {
                sum += $scope.BQs[i].rate.point;
            }
            return sum;
        }
        $scope.BQSumOfBQAll = function () {
            return Math.ceil($scope.BQSum()/($scope.BQs.length*2)*100) + '%';
        }
        $scope.addNewBQ = function() {
            var newItemNo = $scope.BQs.length+1;
            $scope.BQs.push({'id':'BQ'+newItemNo});
        };
        $scope.removeBQ = function(BQ) {
            var lastItem = $scope.BQs.length-1;
            $scope.BQs.splice(lastItem);
        };

        $scope.TQs = [{id: 'TQ1'}];
        $scope.TQSum = function () {
            var i = 0;
            var sum = 0;
            for (i=0; i<$scope.TQs.length; i++) {
                sum += $scope.TQs[i].rate.point;
            }
            return sum;
        }
        $scope.TQSumOfTQAll = function () {
            return Math.ceil($scope.TQSum()/($scope.TQs.length*2)*100) + '%';
        }
        $scope.verbalSectionSumOfVerbalSectionAll = function () {
            var sum = 0, all = 0;
            sum = $scope.GQSum() + $scope.BQSum() + $scope.TQSum();
            all = $scope.GQs.length*2 + $scope.GQs.length*2 + $scope.GQs.length*2;
            return Math.ceil(sum/all*100) + '%';
        }

        $scope.addNewTQ = function() {
            var newItemNo = $scope.TQs.length+1;
            $scope.TQs.push({'id':'TQ'+newItemNo});
        };
        $scope.removeTQ = function(TQ) {
            var lastItem = $scope.TQs.length-1;
            $scope.TQs.splice(lastItem);
        };

        // create the list of sushi rolls
        $scope.calcCommentGradeOverall= function(gradeObj) {

            var overall_grade = {
                competency: 'OverAll',
                statistic: ['XXX','OOO','VVV'],
                totalGrade:10
            };

            return overall_grade;
        }


        $scope.totalScore = function() {
            var sum = 0;
            var text = "Please choose grades from competency list";
            var i;
            for (i = 0; i < $scope.overall.length; i++) {
                if ($scope.overall[i].select == -100 || $scope.overall[i].select==undefined) {
                    $scope.overall[i].select = -100;
                }
                sum += $scope.overall[i].select;
            }
            if (sum < 0) {
                return text;
            }
            else {
                return sum;
            }
        }
        //$scope.totalScore = function() {
        //    var total = 0;
        //}
        //  for (i=0;i<$scope.overall.length-1;i++) {
        //    total = aspect.select in total;
        //
        //};
        $scope.overall = [
            {
                select:-100,
                competency: 'Impression',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Expression',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Job Knowledge',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'General Attitude',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Responses',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Communication',
                    grade: [{comment:'--some comments for Needs Work'},
                {comment:'--some comments for Good'},
                {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Skills and strengths',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Asking Questions',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            },
            {
                competency: 'Closing',
                grade: [{comment:'--some comments for Needs Work'},
                    {comment:'--some comments for Good'},
                    {comment:'--some comments for Excellent'}]
            }
        ];
        $scope.results =
        {
            competency: 'Results',
            grade: [{comment:'Please practice more and be prepared.'},
                {comment:'Be patient! We’ll consider you.'},
                {comment:'Congratulations! You’re hired.'}]
        };



    }]);