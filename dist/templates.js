angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/quizQuestion.html',
    "<form class=\"my-5\" name=\"quizQuestion\" ng-submit=\"$ctrl.submit()\">\n" +
    "    <fieldset>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>{{$ctrl.title}}</label>\n" +
    "            <input class=\"form-control\" name=\"input\" autocomplete=\"off\" ng-model=\"$ctrl.input\">\n" +
    "            <small class=\"form-text text-muted\" ng-if=\"$ctrl.isShowingFeedback\">\n" +
    "                {{$ctrl.feedback}}\n" +
    "            </small>\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"quizQuestion.input.$pristine\">\n" +
    "            Submit\n" +
    "        </button>\n" +
    "    </fieldset>\n" +
    "</form>"
  );

}]);
