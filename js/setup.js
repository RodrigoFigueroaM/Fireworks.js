var canvasWidth ;
var canvasHeight ;
var particles=[];
var firework;
var i=0;
var gravity;
var velocity;
var fireworkColor=[];
var fireworkCount;

function setup()
{
    fireworkCount=0;
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
    createCanvas(windowWidth, windowHeight);
    frameRate(25);
    strokeWeight(0.5);
    gravity = createVector(-0.02,0.1);
    //addMoreParticles();
    for (i = 0; i < 1; i++)
    {
        addParticle();
    }
    background(25,25,25);
}
function draw()
{
    //background(0);
    background(0,100);


    //console.log(particle.velocity );
    fireworkCount++;
    for (var particle in particles)
    {

        particles[particle].applyForce(gravity);
        particles[particle].update();
        particles[particle].show();
        if(firework)
        {
            firework.explode();
        }
        if(particles[particle].reachedMaxHeight())
        {
            firework = new Firework(particles[particle].position.x,particles[particle].position.y,fireworkColor);
            particles.splice(particle,1);

            if (fireworkCount % 3 === 0)
            {
                firework.explodeHeart();
            }
            else {
                firework.explode();
            }
            addParticle();
        }

    }
}

function windowResized() {
    canvasWidth = windowWidth;
    canvasHeight = windowHeight;
  resizeCanvas(windowWidth, windowHeight);
}

function addParticle()
{

    fireworkColor = [random(100,255),random(70,255),random(100,255)];
    velocity = createVector(0,random(-15,-40));
    var p = new Particle(random(100,canvasWidth-200), canvasHeight-20,20,fireworkColor);
    p.setVelocity(velocity);
    particles.push(p);

}
