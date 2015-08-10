var duration = 4,
    line1 = document.getElementById('line1'),
    line2 = document.getElementById('line2'),
    p1_1 = {x: 0, y: 0},
    p1_2 = {x: 0, y: 0},
    p1_3 = {x: 0, y: 0},
    p1_4 = {x: 0, y: 0},
    
    p2_1 = {x: 0, y: 0},
    p2_2 = {x: 0, y: 0},
    p2_3 = {x: 0, y: 0},
    p2_4 = {x: 0, y: 0}

    p3_1 = {x: 0, y: 0},
    p3_2 = {x: 0, y: 0},
    p3_3 = {x: 0, y: 0},
    p3_4 = {x: 0, y: 0},
    
    p4_1 = {x: 0, y: 0},
    p4_2 = {x: 0, y: 0},
    p4_3 = {x: 0, y: 0},
    p4_4 = {x: 0, y: 0};

var randomRange = function (min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

var updatePath = function(){
  pathL1 = "";
  pathL1 += "M0, " + p1_1.y + " ";  
  pathL1 += "C 100 150 300 10 500 " + p1_3.y + " ";
  pathL1 += "L 500 " + + p1_4.y + " ";
  pathL1 += "C 300 10 100 150 0 " + (p1_2.y) + " ";
  pathL1 +="Z"; 
  
  pathL2 = "";
  pathL2 += "M0, " + p2_1.y + " ";  
  pathL2 += "C 50 150 300 10 500 " + p2_3.y + " ";
  pathL2 += "L 500 " + + p2_4.y + " ";
  pathL2 += "C 300 10 100 150 0 " + (p2_2.y) + " ";
  pathL2 +="Z";
  
  pathL3 = "";
  pathL3 += "M0, " + p3_1.y + " ";  
  pathL3 += "C 50 150 300 10 500 " + p3_3.y + " ";
  pathL3 += "L 500 " + + p3_4.y + " ";
  pathL3 += "C 300 10 100 150 0 " + (p3_2.y) + " ";
  pathL3 +="Z";
  
  pathL4 = "";
  pathL4 += "M0, " + p4_1.y + " ";  
  pathL4 += "C 50 150 300 10 500 " + p4_3.y + " ";
  pathL4 += "L 500 " + + p4_4.y + " ";
  pathL4 += "C 300 10 100 150 0 " + (p4_2.y) + " ";
  pathL4 +="Z";
  
  line1.setAttribute('d', pathL1);
  line2.setAttribute('d', pathL2);
  line3.setAttribute('d', pathL3);
  line4.setAttribute('d', pathL4);
}

var launchAnimations = function(){
  var animationP1_1 = TweenMax.to(p1_1, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut,
    onComplete: function(){
      launchAnimations();
    }
  });
  var animationP1_2 = TweenMax.to(p1_2, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut 
  });
  
  var animationP1_3 = TweenMax.to(p1_3, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP1_4 = TweenMax.to(p1_4, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP2_1 = TweenMax.to(p2_1, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut,
    onComplete: function(){
      launchAnimations();
    }
  });
  var animationP2_2 = TweenMax.to(p2_2, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut 
  });
  
  var animationP2_3 = TweenMax.to(p2_3, duration, {
    y: randomRange(0, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP2_4 = TweenMax.to(p2_4, duration, {
    y: randomRange(0, 200),
    ease:Sine.easeInOut 
  });
  
  
  
  
  
  var animationP3_1 = TweenMax.to(p3_1, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut
  });
  var animationP3_2 = TweenMax.to(p3_2, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut 
  });
  
  var animationP3_3 = TweenMax.to(p3_3, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP3_4 = TweenMax.to(p3_4, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP4_1 = TweenMax.to(p4_1, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut
  });
  var animationP4_2 = TweenMax.to(p4_2, duration, {
    y: randomRange(100, 140),
    ease:Sine.easeInOut 
  });
  
  var animationP4_3 = TweenMax.to(p4_3, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
  
  var animationP4_4 = TweenMax.to(p4_4, duration, {
    y: randomRange(50, 200),
    ease:Sine.easeInOut 
  });
};


var onUpdate = function(time) {
  updatePath();
  //console.log(nullObj.x);
  requestAnimationFrame(onUpdate);
}

onUpdate(0); 
launchAnimations();