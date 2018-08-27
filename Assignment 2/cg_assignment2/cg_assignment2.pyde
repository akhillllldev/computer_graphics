def setup():
    global viewport;
    size(500, 400, P3D);
    
def draw():
    background(205,220,57);
    fill(255);
    rect(30, 20, 55, 55, 7)
    fill(178,235,242);
    ellipse(46, 36, 11, 11);
    ellipse(66, 36, 11, 11);
    line(46, 56, 66, 56);
    fill(0,151,167);
    ellipse(58, 112, 77, 77);
    line(23, 160, 23, 120);
    line(93, 160, 93, 120);
    fill(255);
    triangle(30, 180, 48, 145, 46, 180);
    triangle(65, 180, 68, 145, 81, 180);
    stroke(126);
