angular.module('mockInterview', []).controller('mockInterviewCtrl',
    ['$scope','$timeout',function($scope, $timeout){

        $scope.UI  = {}; //mockInterview page is UI
        $scope.UI.generalInformation = {}; //generalInformation section
        $scope.UI.verbalSection = {}; //verbalSection section



        $scope.tab = 1; // ng-init="tab = 1"

        $scope.GQquestions = [
            {name:'Tell me about yourself'},
            {name:'What motivates you to do your best work?'},
            {name:'What have been your biggest accomplishments while working or while at school?'},
            {name:'What are your weaknesses?'},
            {name:'What are your career goals?'},
            {name:'Why did you leave your last job?'},
            {name:'What are some specific examples of work and volunteer experiences you have had that support your qualification?'},
            {name:'Why do you want this job?'},
            {name:'What skills do you bring to this position?'},
            {name:'Why should I hire you?'},
            {name:'What is your salary expectation?'},
            {name:'Do you think your compensation is a good indication of your qualification?'},
            {name:'Do you plan to continue your education?'},
            {name:'What does success mean to you?'},
            {name:'Are you willing to travel or relocate?'}
        ];
        //$scope.GQQuestion  = '';  //General Question Search
        //$scope.changeQuestion = function(newQuestion) {
        //    $scope.GQQuestion = newQuestion;
        //};

        $scope.BQquestions = [
            {name:'Tell me about a time when it was necessary to admit to others that you had made a mistake. How did you handle that?'},
            {name:'Can you describe a past situation at work that led you to grow as a person?'},
            {name:'How do you react when asked to do something beynd your capabilities?'},
            {name:'Tell me about a time you were under a lot of pressure. What was going on, and how did you go through it?'},
            {name:'If you were hiring a person for this position, what qualities would you look for?'},
            {name:'Please describe your previous work experience/work environment/work achievement?'},
            {name:'Can you tell me about a time when you were faced with a major obstacle (work or otherwise) and how you overcame it?'},
            {name:'Describe a solution when you disagree with your supervisor. What would you do?'},
            {name:'Describe a time when you set your sights too high (or too low).'},
            {name:'Please talk about a time when you had to work closely with someone whose personality was very different from yours.'},
            {name:'Describe a long-term project you were assigned or managed. How did you keep everything moving along in a timely manner?'},
            {name:'Please give me an example how you can successfully persuade someone.'},
            {name:'How do you ensure to meet your objectives if you need to manage numerous responsibilities? What skills would you use?'},
            {name:'What would you do if you were asked to do something is not worth doing?'},
            {name:'Tell me about a time you need to get information from someone who isn\'t very responsive. What would you do?'}
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
            {name:'Well-constructed response with specific examples'},
            {name:'Honest response; clearly described the situation'},
            {name:'Professional; clear manner of speaking'},
            {name:'Lack of example or evidence, too general'},
            {name:'Unclear or ambiguous'},
            {name:'Unconvincing, irrelevant or unprepared'}
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
                grade: [{comment:'--Too casual or inappropriate attire for the interview'},
                    {comment:'--Excessive make-up, jewelry or grooming for the position'},
                    {comment:'--Neat and clean --Immaculate attire and grooming for the position'}]
            },
            {
                competency: 'Expression',
                grade: [{comment:'--Incomplete conversation--Short, choppy answers'},
                    {comment:'--Speaks clearly, but does not expresses ideas adequately'},
                    {comment:'--Exceptional --Speaks clearly, concisely --Ideas are well thought-out'}]
            },
            {
                competency: 'Job Knowledge',
                grade: [{comment:'--Inadequate knowledge of both position and company --Seems to make up information'},
                    {comment:'--Satisfactory --Some knowledge of either the position or company'},
                    {comment:'--Excellent --Clear understanding of the position and details of company'}]
            },
            {
                competency: 'General Attitude',
                grade: [{comment:'--Passive, shy and nervous --No eye contact or smile'},
                    {comment:'--Lack of confidence and direction --Poor eye contact and weak smile'},
                    {comment:'--Shows highly confident and respects to the interviewers --Good eye contact and gesture'}]
            },
            {
                competency: 'Responses',
                grade: [{comment:'--Gives simple responses of "yes" or "no" --Provides unsure answers'},
                    {comment:'--Gives rehearsed answers --Fails to elaborate or explain'},
                    {comment:'--Listens closely to the questions --Gives well-constructed and genuine responses'}]
            },
            {
                competency: 'Communication',
                grade: [{comment:'--Speaks too quietly or loudly --Lots of “umms” or fidgeting --Poor grammar and diction'},
                    {comment:'--Mumbles occasionally --Conversation stops and starts at times --Distracting grammar and slangs'},
                    {comment:'--Speaks clearly at all times --Easy to converse with --Uses proper diction and grammar'}]
            },
            {
                competency: 'Skills and strengths',
                grade: [{comment:'--Relatively weak skills or strengths'},
                    {comment:'--Personal strengths and skills that do not match company’s needs'},
                    {comment:'--Excellent skills and strengths that can benefit the company'}]
            },
            {
                competency: 'Asking Questions',
                grade: [{comment:'--No questions asked or asks questions that are not related to the job'},
                    {comment:'--Asks questions relating to the desired position, company or business'},
                    {comment:'----Asks related questions --Shows evidence that applicant has researched the company or business'}]
            },
            {
                competency: 'Closing',
                grade: [{comment:'--Lack of interest in job --No closing'},
                    {comment:'--Shows interest of the job with expectation of high salary and good benefits'},
                    {comment:'--Interested in the position and enthusiastic about the interview --Closing refers to strengths and skills'}]
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