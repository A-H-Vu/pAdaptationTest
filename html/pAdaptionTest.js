/********************** 
 * Padaptiontest Test *
 **********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

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

// store info about the experiment session:
let expName = 'pAdaptionTest';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(fixationRoutineBegin());
flowScheduler.add(fixationRoutineEachFrame());
flowScheduler.add(fixationRoutineEnd());
const trials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials1LoopBegin, trials1LoopScheduler);
flowScheduler.add(trials1LoopScheduler);
flowScheduler.add(trials1LoopEnd);
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(fixationRoutineBegin());
flowScheduler.add(fixationRoutineEachFrame());
flowScheduler.add(fixationRoutineEnd());
const trials2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials2LoopBegin, trials2LoopScheduler);
flowScheduler.add(trials2LoopScheduler);
flowScheduler.add(trials2LoopEnd);
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(fixationRoutineBegin());
flowScheduler.add(fixationRoutineEachFrame());
flowScheduler.add(fixationRoutineEnd());
const trials3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials3LoopBegin, trials3LoopScheduler);
flowScheduler.add(trials3LoopScheduler);
flowScheduler.add(trials3LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
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


var instruction1Clock;
var instr1;
var instr1Resp;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var fixationClock;
var fix;
var trial1Clock;
var trial1Mouse;
var targetAngles;
var trial1Target;
var trial1Home;
var trial1Cursor;
var trial1Num;
var trial1Skip;
var trial2Clock;
var trial2Mouse;
var r;
var trial2Target;
var trial2Home;
var trial2Cursor;
var trial2Num;
var trial2Skip;
var trial3Clock;
var trial3Mouse;
var k;
var trial3Target;
var trial3Home;
var trial3Cursor;
var trial3Num;
var trial3Skip;
var endClock;
var endText;
var endResp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Use Mouse. Space continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial1"
  trial1Clock = new util.Clock();
  trial1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial1Mouse.mouseClock = new util.Clock();
  win.mouseVisible = false;
  targetAngles = [40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50];
  
  trial1Target = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Target', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trial1Home = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Home', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trial1Cursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Cursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  trial1Num = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial1Num',
    text: '28',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  trial1Skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Use Mouse. Space continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial2"
  trial2Clock = new util.Clock();
  trial2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial2Mouse.mouseClock = new util.Clock();
  win.mouseVisible = false;
  targetAngles = [40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50];
  r = (40 * (pi / 180));
  
  trial2Target = new visual.Polygon ({
    win: psychoJS.window, name: 'trial2Target', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trial2Home = new visual.Polygon ({
    win: psychoJS.window, name: 'trial2Home', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trial2Cursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trial2Cursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  trial2Num = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial2Num',
    text: '80',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  trial2Skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Use Mouse. Space continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial3"
  trial3Clock = new util.Clock();
  trial3Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial3Mouse.mouseClock = new util.Clock();
  win.mouseVisible = false;
  targetAngles = [40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50, 40, 50];
  k = ((- 40) * (pi / 180));
  
  trial3Target = new visual.Polygon ({
    win: psychoJS.window, name: 'trial3Target', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trial3Home = new visual.Polygon ({
    win: psychoJS.window, name: 'trial3Home', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trial3Cursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trial3Cursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  trial3Num = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial3Num',
    text: '8',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  trial3Skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Space end',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  document.documentElement.style.cursor = 'auto';
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instr1Resp_allKeys;
var instruction1Components;
function instruction1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction1'-------
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr1Resp.keys = undefined;
    instr1Resp.rt = undefined;
    _instr1Resp_allKeys = [];
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(instr1);
    instruction1Components.push(instr1Resp);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instruction1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *instr1Resp* updates
    if (t >= 0.0 && instr1Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1Resp.tStart = t;  // (not accounting for frame time here)
      instr1Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr1Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr1Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr1Resp.clearEvents(); });
    }

    if (instr1Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr1Resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr1Resp_allKeys = _instr1Resp_allKeys.concat(theseKeys);
      if (_instr1Resp_allKeys.length > 0) {
        instr1Resp.keys = _instr1Resp_allKeys[_instr1Resp_allKeys.length - 1].name;  // just the last key pressed
        instr1Resp.rt = _instr1Resp_allKeys[_instr1Resp_allKeys.length - 1].rt;
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
    for (const thisComponent of instruction1Components)
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


function instruction1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction1'-------
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixationComponents;
function fixationRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix);
    
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fixationRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix.setAutoDraw(false);
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
    for (const thisComponent of fixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation'-------
    for (const thisComponent of fixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials1;
var currentLoop;
function trials1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pAdaptCond1.xlsx',
    seed: undefined, name: 'trials1'
  });
  psychoJS.experiment.addLoop(trials1); // add the loop to the experiment
  currentLoop = trials1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials1 of trials1) {
    const snapshot = trials1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial1RoutineBegin(snapshot));
    thisScheduler.add(trial1RoutineEachFrame(snapshot));
    thisScheduler.add(trial1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials1LoopEnd() {
  psychoJS.experiment.removeLoop(trials1);

  return Scheduler.Event.NEXT;
}


var trials2;
function trials2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pAdaptCond2.xlsx',
    seed: undefined, name: 'trials2'
  });
  psychoJS.experiment.addLoop(trials2); // add the loop to the experiment
  currentLoop = trials2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials2 of trials2) {
    const snapshot = trials2.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial2RoutineBegin(snapshot));
    thisScheduler.add(trial2RoutineEachFrame(snapshot));
    thisScheduler.add(trial2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials2LoopEnd() {
  psychoJS.experiment.removeLoop(trials2);

  return Scheduler.Event.NEXT;
}


var trials3;
function trials3LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'pAdaptCond3.xlsx',
    seed: undefined, name: 'trials3'
  });
  psychoJS.experiment.addLoop(trials3); // add the loop to the experiment
  currentLoop = trials3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials3 of trials3) {
    const snapshot = trials3.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial3RoutineBegin(snapshot));
    thisScheduler.add(trial3RoutineEachFrame(snapshot));
    thisScheduler.add(trial3RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials3LoopEnd() {
  psychoJS.experiment.removeLoop(trials3);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var targetangle;
var targetangle_rad;
var targetPos;
var targetOpacity;
var homeOpacity;
var homeStart;
var reachOut;
var trial1Step;
var steps;
var _trial1Skip_allKeys;
var trial1Components;
function trial1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial1'-------
    t = 0;
    trial1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trial1Mouse
    // current position of the mouse:
    trial1Mouse.x = [];
    trial1Mouse.y = [];
    trial1Mouse.leftButton = [];
    trial1Mouse.midButton = [];
    trial1Mouse.rightButton = [];
    trial1Mouse.time = [];
    gotValidClick = false; // until a click is received
    trial1Mouse.mouseClock.reset();
    targetangle = targetAngles[trials1.thisN];
    targetangle_rad = (pi * (targetangle / 180));
    targetPos = [(cos(targetangle_rad) * 0.4), (sin(targetangle_rad) * 0.4)];
    targetOpacity = 0;
    homeOpacity = 0;
    homeStart = false;
    reachOut = false;
    trial1Step = 1;
    steps = [];
    trial1Num.text = ((trials1.thisN + 1).toString() + " / 28");
    trial1Cursor.pos = [1.5, 1.5];
    trial1Mouse.pos = [1.5, 1.5];
    
    trial1Skip.keys = undefined;
    trial1Skip.rt = undefined;
    _trial1Skip_allKeys = [];
    // keep track of which components have finished
    trial1Components = [];
    trial1Components.push(trial1Mouse);
    trial1Components.push(trial1Target);
    trial1Components.push(trial1Home);
    trial1Components.push(trial1Cursor);
    trial1Components.push(trial1Num);
    trial1Components.push(trial1Skip);
    
    for (const thisComponent of trial1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var CursorTargetDistance;
var CursorHomeDistance;
function trial1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trial1Mouse* updates
    if (t >= 0.0 && trial1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Mouse.tStart = t;  // (not accounting for frame time here)
      trial1Mouse.frameNStart = frameN;  // exact frame index
      
      trial1Mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trial1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trial1Mouse.getPressed();
      const xys = trial1Mouse.getPos();
      trial1Mouse.x.push(xys[0]);
      trial1Mouse.y.push(xys[1]);
      trial1Mouse.leftButton.push(buttons[0]);
      trial1Mouse.midButton.push(buttons[1]);
      trial1Mouse.rightButton.push(buttons[2]);
      trial1Mouse.time.push(trial1Mouse.mouseClock.getTime());
    }
    CursorTargetDistance = Math.sqrt((Math.pow((trial1Cursor.pos[0] - trial1Target.pos[0]), 2) + Math.pow((trial1Cursor.pos[1] - trial1Target.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow(trial1Cursor.pos[0], 2) + Math.pow(trial1Cursor.pos[1], 2)));
    steps.append(trial1Step);
    if ((! homeStart)) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial1Step = 1;
        if ((CursorHomeDistance < 0.025)) {
            homeStart = true;
            console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (((! reachOut) && homeStart)) {
        homeOpacity = 0;
        targetOpacity = 1;
        trial1Step = 2;
        if ((CursorTargetDistance < 0.025)) {
            reachOut = true;
            console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (reachOut) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial1Step = 3;
        if ((CursorHomeDistance < 0.025)) {
            console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    
    // *trial1Target* updates
    if (t >= 0.0 && trial1Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Target.tStart = t;  // (not accounting for frame time here)
      trial1Target.frameNStart = frameN;  // exact frame index
      
      trial1Target.setAutoDraw(true);
    }

    
    if (trial1Target.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Target.setOpacity(targetOpacity);
      trial1Target.setPos(targetPos);
    }
    
    // *trial1Home* updates
    if (t >= 0.0 && trial1Home.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Home.tStart = t;  // (not accounting for frame time here)
      trial1Home.frameNStart = frameN;  // exact frame index
      
      trial1Home.setAutoDraw(true);
    }

    
    if (trial1Home.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Home.setOpacity(homeOpacity);
    }
    
    // *trial1Cursor* updates
    if (t >= 0.0 && trial1Cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Cursor.tStart = t;  // (not accounting for frame time here)
      trial1Cursor.frameNStart = frameN;  // exact frame index
      
      trial1Cursor.setAutoDraw(true);
    }

    
    if (trial1Cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Cursor.setPos([trial1Mouse.getPos()[0], trial1Mouse.getPos()[1]]);
    }
    
    // *trial1Num* updates
    if (t >= 0.0 && trial1Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Num.tStart = t;  // (not accounting for frame time here)
      trial1Num.frameNStart = frameN;  // exact frame index
      
      trial1Num.setAutoDraw(true);
    }

    
    // *trial1Skip* updates
    if (t >= 0.0 && trial1Skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Skip.tStart = t;  // (not accounting for frame time here)
      trial1Skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial1Skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial1Skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial1Skip.clearEvents(); });
    }

    if (trial1Skip.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial1Skip.getKeys({keyList: ['space'], waitRelease: false});
      _trial1Skip_allKeys = _trial1Skip_allKeys.concat(theseKeys);
      if (_trial1Skip_allKeys.length > 0) {
        trial1Skip.keys = _trial1Skip_allKeys[_trial1Skip_allKeys.length - 1].name;  // just the last key pressed
        trial1Skip.rt = _trial1Skip_allKeys[_trial1Skip_allKeys.length - 1].rt;
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
    for (const thisComponent of trial1Components)
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


function trial1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial1'-------
    for (const thisComponent of trial1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial1Mouse.x', trial1Mouse.x);
    psychoJS.experiment.addData('trial1Mouse.y', trial1Mouse.y);
    psychoJS.experiment.addData('trial1Mouse.leftButton', trial1Mouse.leftButton);
    psychoJS.experiment.addData('trial1Mouse.midButton', trial1Mouse.midButton);
    psychoJS.experiment.addData('trial1Mouse.rightButton', trial1Mouse.rightButton);
    psychoJS.experiment.addData('trial1Mouse.time', trial1Mouse.time);
    
    thisExp.addData("step", steps);
    thisExp.addData("targetangle_deg", targetangle);
    
    // the Routine "trial1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial2Step;
var _trial2Skip_allKeys;
var trial2Components;
function trial2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial2'-------
    t = 0;
    trial2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trial2Mouse
    // current position of the mouse:
    trial2Mouse.x = [];
    trial2Mouse.y = [];
    trial2Mouse.leftButton = [];
    trial2Mouse.midButton = [];
    trial2Mouse.rightButton = [];
    trial2Mouse.time = [];
    gotValidClick = false; // until a click is received
    trial2Mouse.mouseClock.reset();
    targetangle = targetAngles[trials2.thisN];
    targetangle_rad = (pi * (targetangle / 180));
    targetPos = [(cos(targetangle_rad) * 0.4), (sin(targetangle_rad) * 0.4)];
    targetOpacity = 0;
    homeOpacity = 0;
    homeStart = false;
    reachOut = false;
    trial2Step = 1;
    steps = [];
    trial2Num.text = ((trials2.thisN + 1).toString() + " / 80");
    trial2Cursor.pos = [1.5, 1.5];
    trial2Mouse.pos = [1.5, 1.5];
    
    trial2Skip.keys = undefined;
    trial2Skip.rt = undefined;
    _trial2Skip_allKeys = [];
    // keep track of which components have finished
    trial2Components = [];
    trial2Components.push(trial2Mouse);
    trial2Components.push(trial2Target);
    trial2Components.push(trial2Home);
    trial2Components.push(trial2Cursor);
    trial2Components.push(trial2Num);
    trial2Components.push(trial2Skip);
    
    for (const thisComponent of trial2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trial2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trial2Mouse* updates
    if (t >= 0.0 && trial2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Mouse.tStart = t;  // (not accounting for frame time here)
      trial2Mouse.frameNStart = frameN;  // exact frame index
      
      trial2Mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trial2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trial2Mouse.getPressed();
      const xys = trial2Mouse.getPos();
      trial2Mouse.x.push(xys[0]);
      trial2Mouse.y.push(xys[1]);
      trial2Mouse.leftButton.push(buttons[0]);
      trial2Mouse.midButton.push(buttons[1]);
      trial2Mouse.rightButton.push(buttons[2]);
      trial2Mouse.time.push(trial2Mouse.mouseClock.getTime());
    }
    CursorTargetDistance = Math.sqrt((Math.pow((trial2Cursor.pos[0] - trial2Target.pos[0]), 2) + Math.pow((trial2Cursor.pos[1] - trial2Target.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow(trial2Cursor.pos[0], 2) + Math.pow(trial2Cursor.pos[1], 2)));
    steps.append(trial2Step);
    if ((! homeStart)) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial2Step = 1;
        if ((CursorHomeDistance < 0.025)) {
            homeStart = true;
            console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (((! reachOut) && homeStart)) {
        homeOpacity = 0;
        targetOpacity = 1;
        trial2Step = 2;
        if ((CursorTargetDistance < 0.025)) {
            reachOut = true;
            console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (reachOut) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial2Step = 3;
        if ((CursorHomeDistance < 0.025)) {
            console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    
    // *trial2Target* updates
    if (t >= 0.0 && trial2Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Target.tStart = t;  // (not accounting for frame time here)
      trial2Target.frameNStart = frameN;  // exact frame index
      
      trial2Target.setAutoDraw(true);
    }

    
    if (trial2Target.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial2Target.setOpacity(targetOpacity);
      trial2Target.setPos(targetPos);
    }
    
    // *trial2Home* updates
    if (t >= 0.0 && trial2Home.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Home.tStart = t;  // (not accounting for frame time here)
      trial2Home.frameNStart = frameN;  // exact frame index
      
      trial2Home.setAutoDraw(true);
    }

    
    if (trial2Home.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial2Home.setOpacity(homeOpacity);
    }
    
    // *trial2Cursor* updates
    if (t >= 0.0 && trial2Cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Cursor.tStart = t;  // (not accounting for frame time here)
      trial2Cursor.frameNStart = frameN;  // exact frame index
      
      trial2Cursor.setAutoDraw(true);
    }

    
    if (trial2Cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial2Cursor.setPos([((trial2Mouse.getPos()[0] * Math.cos(r)) - (trial2Mouse.getPos()[1] * Math.sin(r))), ((trial2Mouse.getPos()[0] * Math.sin(r)) + (trial2Mouse.getPos()[1] * Math.cos(r)))]);
    }
    
    // *trial2Num* updates
    if (t >= 0.0 && trial2Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Num.tStart = t;  // (not accounting for frame time here)
      trial2Num.frameNStart = frameN;  // exact frame index
      
      trial2Num.setAutoDraw(true);
    }

    
    // *trial2Skip* updates
    if (t >= 0.0 && trial2Skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial2Skip.tStart = t;  // (not accounting for frame time here)
      trial2Skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial2Skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial2Skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial2Skip.clearEvents(); });
    }

    if (trial2Skip.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial2Skip.getKeys({keyList: ['space'], waitRelease: false});
      _trial2Skip_allKeys = _trial2Skip_allKeys.concat(theseKeys);
      if (_trial2Skip_allKeys.length > 0) {
        trial2Skip.keys = _trial2Skip_allKeys[_trial2Skip_allKeys.length - 1].name;  // just the last key pressed
        trial2Skip.rt = _trial2Skip_allKeys[_trial2Skip_allKeys.length - 1].rt;
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
    for (const thisComponent of trial2Components)
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


function trial2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial2'-------
    for (const thisComponent of trial2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial2Mouse.x', trial2Mouse.x);
    psychoJS.experiment.addData('trial2Mouse.y', trial2Mouse.y);
    psychoJS.experiment.addData('trial2Mouse.leftButton', trial2Mouse.leftButton);
    psychoJS.experiment.addData('trial2Mouse.midButton', trial2Mouse.midButton);
    psychoJS.experiment.addData('trial2Mouse.rightButton', trial2Mouse.rightButton);
    psychoJS.experiment.addData('trial2Mouse.time', trial2Mouse.time);
    
    thisExp.addData("step", steps);
    thisExp.addData("targetangle_deg", targetangle);
    
    // the Routine "trial2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial3Step;
var _trial3Skip_allKeys;
var trial3Components;
function trial3RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial3'-------
    t = 0;
    trial3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trial3Mouse
    // current position of the mouse:
    trial3Mouse.x = [];
    trial3Mouse.y = [];
    trial3Mouse.leftButton = [];
    trial3Mouse.midButton = [];
    trial3Mouse.rightButton = [];
    trial3Mouse.time = [];
    gotValidClick = false; // until a click is received
    trial3Mouse.mouseClock.reset();
    targetangle = targetAngles[trials3.thisN];
    targetangle_rad = (pi * (targetangle / 180));
    targetPos = [(cos(targetangle_rad) * 0.4), (sin(targetangle_rad) * 0.4)];
    targetOpacity = 0;
    homeOpacity = 0;
    homeStart = false;
    reachOut = false;
    trial3Step = 1;
    steps = [];
    trial3Num.text = ((trials3.thisN + 1).toString() + " / 8");
    trial3Cursor.pos = [1.5, 1.5];
    trial3Mouse.pos = [1.5, 1.5];
    
    trial3Skip.keys = undefined;
    trial3Skip.rt = undefined;
    _trial3Skip_allKeys = [];
    // keep track of which components have finished
    trial3Components = [];
    trial3Components.push(trial3Mouse);
    trial3Components.push(trial3Target);
    trial3Components.push(trial3Home);
    trial3Components.push(trial3Cursor);
    trial3Components.push(trial3Num);
    trial3Components.push(trial3Skip);
    
    for (const thisComponent of trial3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trial3RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trial3Mouse* updates
    if (t >= 0.0 && trial3Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Mouse.tStart = t;  // (not accounting for frame time here)
      trial3Mouse.frameNStart = frameN;  // exact frame index
      
      trial3Mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trial3Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trial3Mouse.getPressed();
      const xys = trial3Mouse.getPos();
      trial3Mouse.x.push(xys[0]);
      trial3Mouse.y.push(xys[1]);
      trial3Mouse.leftButton.push(buttons[0]);
      trial3Mouse.midButton.push(buttons[1]);
      trial3Mouse.rightButton.push(buttons[2]);
      trial3Mouse.time.push(trial3Mouse.mouseClock.getTime());
    }
    CursorTargetDistance = Math.sqrt((Math.pow((trial3Cursor.pos[0] - trial3Target.pos[0]), 2) + Math.pow((trial3Cursor.pos[1] - trial3Target.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow(trial3Cursor.pos[0], 2) + Math.pow(trial3Cursor.pos[1], 2)));
    steps.append(trial3Step);
    if ((! homeStart)) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial3Step = 1;
        if ((CursorHomeDistance < 0.025)) {
            homeStart = true;
            console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (((! reachOut) && homeStart)) {
        homeOpacity = 0;
        targetOpacity = 1;
        trial3Step = 2;
        if ((CursorTargetDistance < 0.025)) {
            reachOut = true;
            console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (reachOut) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial3Step = 3;
        if ((CursorHomeDistance < 0.025)) {
            console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    
    // *trial3Target* updates
    if (t >= 0.0 && trial3Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Target.tStart = t;  // (not accounting for frame time here)
      trial3Target.frameNStart = frameN;  // exact frame index
      
      trial3Target.setAutoDraw(true);
    }

    
    if (trial3Target.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial3Target.setOpacity(targetOpacity);
      trial3Target.setPos(targetPos);
    }
    
    // *trial3Home* updates
    if (t >= 0.0 && trial3Home.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Home.tStart = t;  // (not accounting for frame time here)
      trial3Home.frameNStart = frameN;  // exact frame index
      
      trial3Home.setAutoDraw(true);
    }

    
    if (trial3Home.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial3Home.setOpacity(homeOpacity);
    }
    
    // *trial3Cursor* updates
    if (t >= 0.0 && trial3Cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Cursor.tStart = t;  // (not accounting for frame time here)
      trial3Cursor.frameNStart = frameN;  // exact frame index
      
      trial3Cursor.setAutoDraw(true);
    }

    
    if (trial3Cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial3Cursor.setPos([((trial2Mouse.getPos()[0] * Math.cos(k)) - (trial2Mouse.getPos()[1] * Math.sin(k))), ((trial2Mouse.getPos()[0] * Math.sin(k)) + (trial2Mouse.getPos()[1] * Math.cos(k)))]);
    }
    
    // *trial3Num* updates
    if (t >= 0.0 && trial3Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Num.tStart = t;  // (not accounting for frame time here)
      trial3Num.frameNStart = frameN;  // exact frame index
      
      trial3Num.setAutoDraw(true);
    }

    
    // *trial3Skip* updates
    if (t >= 0.0 && trial3Skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial3Skip.tStart = t;  // (not accounting for frame time here)
      trial3Skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { trial3Skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { trial3Skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { trial3Skip.clearEvents(); });
    }

    if (trial3Skip.status === PsychoJS.Status.STARTED) {
      let theseKeys = trial3Skip.getKeys({keyList: ['space'], waitRelease: false});
      _trial3Skip_allKeys = _trial3Skip_allKeys.concat(theseKeys);
      if (_trial3Skip_allKeys.length > 0) {
        trial3Skip.keys = _trial3Skip_allKeys[_trial3Skip_allKeys.length - 1].name;  // just the last key pressed
        trial3Skip.rt = _trial3Skip_allKeys[_trial3Skip_allKeys.length - 1].rt;
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
    for (const thisComponent of trial3Components)
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


function trial3RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial3'-------
    for (const thisComponent of trial3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial3Mouse.x', trial3Mouse.x);
    psychoJS.experiment.addData('trial3Mouse.y', trial3Mouse.y);
    psychoJS.experiment.addData('trial3Mouse.leftButton', trial3Mouse.leftButton);
    psychoJS.experiment.addData('trial3Mouse.midButton', trial3Mouse.midButton);
    psychoJS.experiment.addData('trial3Mouse.rightButton', trial3Mouse.rightButton);
    psychoJS.experiment.addData('trial3Mouse.time', trial3Mouse.time);
    
    thisExp.addData("step", steps);
    thisExp.addData("targetangle_deg", targetangle);
    
    // the Routine "trial3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _endResp_allKeys;
var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    endResp.keys = undefined;
    endResp.rt = undefined;
    _endResp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(endText);
    endComponents.push(endResp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    
    // *endResp* updates
    if (t >= 0.0 && endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp.tStart = t;  // (not accounting for frame time here)
      endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp.clearEvents(); });
    }

    if (endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_allKeys = _endResp_allKeys.concat(theseKeys);
      if (_endResp_allKeys.length > 0) {
        endResp.keys = _endResp_allKeys[_endResp_allKeys.length - 1].name;  // just the last key pressed
        endResp.rt = _endResp_allKeys[_endResp_allKeys.length - 1].rt;
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
    for (const thisComponent of endComponents)
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


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  win.mouseVisible = true;
  
  
  
  
  
  win.mouseVisible = true;
  
  
  
  win.mouseVisible = true;
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
