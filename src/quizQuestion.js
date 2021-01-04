/**
 * Quiz Question Component
 * @namespace Components
 */
(function () {
    angular
        .module('quiz')
        .component('quizQuestion', {
            bindings: {
                answer: '@?',
                feedback: '@?',
                feedbackCorrect: '@?',
                feedbackIncorrect: '@?',
                pattern: '@?',
                title: '@',

            },
            controller: QuestionController,
            templateUrl: './templates/quizQuestion.html'
        })

    /**
     * @namespace QuestionController
     * @memberof Components
     */
    function QuestionController() {
        let vm = this;
        vm.$onInit = $onInit;
        vm.isShowingFeedback = false;
        vm.submit = submit;

        /**
         * @name $onInit
         * @memberof Components.QuestionController
         */
        function $onInit() {
            vm.pattern = vm.pattern ? new RegExp(vm.pattern, 'gi') : null;
        }

        /**
         * @name submit
         * @description Runs when user submits answer.
         * @memberof Components.QuestionController
         */
        function submit() {
            if (vm.answer || vm.pattern) {
                if (isCorrectAnswer(vm.input, vm.answer, vm.pattern)) {
                    vm.feedback = vm.feedbackCorrect || 'Correct.';
                } else {
                    vm.feedback = vm.feedbackIncorrect || 'Incorrect.';
                }
            }
            vm.isShowingFeedback = true;
        }

        /**
         * @name isCorrectAnswer
         * @param {string} input Input of answer field.
         * @param {string} answer Correct answer of question.
         * @param {object} pattern Regex pattern.
         * @returns {Boolean} Result if answer is correct or not.
         * @memberof Components.QuestionController
         */
        function isCorrectAnswer(input, answer, pattern) {
            if (answer &&
                    ((input === answer) ||
                    (Number(input.replace(/[\$|,|%]/g, '')) === Number(answer)) ||
                    (input.toLowerCase() === answer.toLowerCase())
                )) {
                return true;
            } else if (pattern && input.search(pattern) > -1) {
                return true;
            } else {
                return false;
            }
        }
    }
})();