// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
      randomSortQuestions: true,
      randomSortAnswers: true,
      preventUnanswered: true,
      scoreAsPercentage: true,
      perQuestionResponseMessaging: false,
      checkAnswerText:  '',
      nextQuestionText: 'Siguiente &raquo;',
      backButtonText: ' &laquo; Volver',
      completeQuizText: 'Finish (HIM)!!',
      tryAgainText: '',
      questionCountText: 'Pregunta No. %current de %total',
      preventUnansweredText: 'Selecciona por lo menos una respuesta.',
      questionTemplateText:  '%count. %text',
      scoreTemplateText: '%score / %total',
      nameTemplateText:  '<span>Quiz: </span>%name',
      events: {
        onCompleteQuiz: function (options) {
          clearInterval(this.currentInterval);
          if ($('#slickQuiz').data().slickQuiz.prepare) {
            $data = $('#slickQuiz').data().slickQuiz.prepare
            $.post("send/mail.php", $data, function(res) {

            });
          }
        }, 
        onStartQuiz: function() {
          runMettingElapsedMoment = moment().hour(0).minutes(0).second(0);
          this.currentInterval = setInterval(function () { myTimer(); }, 1000);
          
          var myTimer = function () {
             runMettingElapsedTime = runMettingElapsedMoment.add('s', 1).format('HH:mm:ss');
             $('.quiztimer').html(runMettingElapsedTime);
          };
        },
        onBeforeStartQuiz: function(options) {
          var iName, iEmail;
          iName = $('#internalName').val(), iEmail = $('#internalEmail').val();
          if (iName.trim() == "" || iEmail.trim() == '') {
            alert({ title: 'Oops...', text: 'Por favor, llene los campos!',type: 'error' });

            return false;
          } else {
            $('#slickQuiz').data().slickQuiz.prepare = {
              name: iName,
              mail: iEmail
            }
          }
        }
      }
    });


});
