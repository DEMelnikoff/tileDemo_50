
jsPsych.data.addProperties({
    date: new Date(),
});

function MakeTimeline(game) {
    this.timeline = [
    game.intro.preMessage,
    game.task.round1,
    ]
};

var exp = new MakeTimeline(streakGame);

//jsPsych.init({
//    timeline: exp.timeline,
//    
//});
//

// initiate timeline
jsPsych.init({
   timeline: exp.timeline,
   on_finish: function() {
        document.body.innerHTML = `<div align='center' style="margin: 30%; color: black; font-size: 30px">
        <p><b>The task is now complete!</b></p>
        </div>`;
   }
});