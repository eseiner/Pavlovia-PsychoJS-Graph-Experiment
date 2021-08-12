/************************************** 
 * Graph Reproduction Experiment Test *
 **************************************/

import { PsychoJS } from './lib/core-2021.1.3.js';
import * as core from './lib/core-2021.1.3.js';
import { TrialHandler } from './lib/data-2021.1.3.js';
import { Scheduler } from './lib/util-2021.1.3.js';
import * as visual from './lib/visual-2021.1.3.js';
import * as sound from './lib/sound-2021.1.3.js';
import * as util from './lib/util-2021.1.3.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

var trialCount = [];
    function getSession(data) {
    var allRows = data.split(' '); // split rows at new line
    trialCount.push(allRows[1])

    }

    $.ajax({
        url: 'trialCount.txt',
        dataType: 'text',
        async: false,
    }).done(getSession);

var sessionID = parseInt(trialCount[0]);


var accessToken = 'iDgAJBsXhamQDuxLiVyF';
   var del = {async: false,
  "crossDomain": true,
  url: 'https://gitlab.pavlovia.org/api/v4/projects/157037/repository/files/trialCount.txt?branch=master&commit_message=new',
  method: "DELETE",
  headers: {
    "PRIVATE-TOKEN": accessToken
  }
}

$.ajax(del).done(function (response) {
});

   var update = {async: false,
  "crossDomain": true,
  url: 'https://gitlab.pavlovia.org/api/v4/projects/157037/repository/files/trialCount.txt?branch=master&content=trial_count ' + String(sessionID+1) + '&commit_message=new',
  method: "POST",
  headers: {
    "PRIVATE-TOKEN": accessToken
  }
}

$.ajax(update).done(function (response) {
});


// store info about the experiment session:
let expName = 'demo2 draft';  // from the Builder filename that created this script
let expInfo = {'participant': 'data_PARTICIPANT', 'session': ''};


// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK

flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'data/data_PARTICIPANT_demo2_draft_' + String(sessionID) + '.csv', 'path': 'data/data_PARTICIPANT_demo2_draft_' + String(sessionID) + '.csv'},
    {'name': 'test_blank.png', 'path': 'test_blank.png'}
  ]

});


var frameDur;
function updateInfo() {
  expInfo['date'] = String(sessionID + 1);  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var trialClock;
var intro_text;
var starting_graph;
var shape;
var intermediate_text;
var blank_graph;
var key_resp;
var mouse;
var globalClock;
var routineTimer;
var rects = [];
var bars = [];
var bar_objs = [];
var myList = [];
function experimentInit() {
    function successFunction(data) {
    var allRows = data.split('\n'); // split rows at new line
    var headerRows = allRows[0].split(',');
    
        for (var i=1; i<allRows.length; i++) {
            var obj = {};
            var currentLine = allRows[i].split(',');
            for(var j=0;j<headerRows.length;j++){
                obj[headerRows[j]] = currentLine[j];
            }
            myList.push(obj);
        }
    }

    $.ajax({
        url: 'data/data_PARTICIPANT_demo2_draft_' + String(sessionID) + '.csv',
        dataType: 'text',
        async: false,
    }).done(successFunction);
  
  trialClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'Graphical Serial Reproduction Experiment.\n\nYou will be shown an image of a graph. Reproduce it with your mouse.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  starting_graph = new visual.ImageStim({
    win : psychoJS.window,
    name : 'starting_graph', units : undefined, 
    image : 'test_blank.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.75, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  for (let i = 0; i < 43; i++) {
      rects[i] = new visual.Rect ({
        win: psychoJS.window, name: 'polygon' + String(i), 
        width: 0.005, height: parseFloat(myList[i]['Y_values']) + 0.389/2,
        ori: 0.0, pos: [(i)*0.01358-0.275, (parseFloat(myList[i]['Y_values'])+0.389/2.0)/2.0-0.389/2.0],
        lineWidth: 1.0, lineColor: new util.Color('blue'),
        fillColor: new util.Color('blue'),
        opacity: undefined, depth: -6, interpolate: true
      });
  }
  
  intermediate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intermediate_text',
    text: 'Using your mouse, reproduce the graph previously shown.\n\nPress the space bar when finished.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blank_graph = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blank_graph', units : undefined, 
    image : 'test_blank.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.75, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  
  shape = new visual.Rect ({
        win: psychoJS.window, name: 'shape', 
        width: 0.6, height: 0.5,
        ori: 0.0, pos: [0, 0],
        opacity: 0, depth: -6, interpolate: true
      });
  
  for (let i = 0; i < 43; i++) {
      bar_objs[i] = new visual.Rect ({
        win: psychoJS.window, name: 'polygon' + String(i), 
        width: 0.005, height: 0,
        ori: 0.0, pos: [i*0.01358-0.275, 0],
        lineWidth: 1.0, lineColor: new util.Color('blue'),
        fillColor: new util.Color('blue'),
        opacity: undefined, depth: -6, interpolate: true
      });
  }
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(intro_text);
    trialComponents.push(starting_graph);
    trialComponents.push(intermediate_text);
    trialComponents.push(blank_graph);
    trialComponents.push(key_resp);
    trialComponents.push(mouse);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (intro_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      intro_text.setAutoDraw(false);
    }
    
    // *starting_graph* updates
    if (t >= 2.0 && starting_graph.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      starting_graph.tStart = t;  // (not accounting for frame time here)
      starting_graph.frameNStart = frameN;  // exact frame index
      
      starting_graph.setAutoDraw(true);
      shape.setAutoDraw(true);
      rects.forEach(draw);

      function draw(item, index, arr) {
        arr[index].setAutoDraw(true);
      }
    }

    frameRemains = 2.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (starting_graph.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      starting_graph.setAutoDraw(false);
      rects.forEach(clear);

      function clear(item, index, arr) {
        arr[index].setAutoDraw(false);
      }
    }
    
    // *intermediate_text* updates
    if (t >= 4.0 && intermediate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intermediate_text.tStart = t;  // (not accounting for frame time here)
      intermediate_text.frameNStart = frameN;  // exact frame index
      
      intermediate_text.setAutoDraw(true);
    }

    frameRemains = 4.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (intermediate_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      intermediate_text.setAutoDraw(false);
    }
    
    // *blank_graph* updates
    if (t >= 6.0) { //blank_graph.status === PsychoJS.Status.NOT_STARTED
      // keep track of start time/frame for later
      blank_graph.tStart = t;  // (not accounting for frame time here)
      blank_graph.frameNStart = frameN;  // exact frame index
      
      blank_graph.setAutoDraw(true);
      let buttons = mouse.getPressed();
      let left_button = buttons[0];
      if (left_button) {
          var pos = mouse.getPos();
          if (pos[0] < 0.308 && pos[0] > -.275) {
              var x_index = parseInt((pos[0]+0.275)/0.01358)
              bar_objs[x_index].setHeight(pos[1] + 0.389/2);
              bar_objs[x_index].setPos([x_index*0.01358-0.275, (pos[1]+0.389/2.0)/2.0-0.389/2.0]);
              bar_objs[x_index].setAutoDraw(true);
              bars[x_index] = pos[1];
          }
      }
    }

    
    // *key_resp* updates
    if (t >= 6.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['enter', 'space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
var _mouseButtons;
function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        routineTimer.reset();
        }
    
    key_resp.stop();
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
        for (var i = 0; i < 43; i++) {
            psychoJS.experiment.addData("X_values", String(i));
            psychoJS.experiment.addData("Y_values", String(bars[i]));
            psychoJS.experiment.nextEntry();
        }
        psychoJS.experiment.save();
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
