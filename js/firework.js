var extendObj = function(childObj, parentObj) {
    childObj.prototype = parentObj.prototype;
};

var Firework = function(x,y,color)
{
            var c=0;
    var self = this;
    self.position = createVector(x, y);
    self.velocity = createVector(0,0);
    self.gravity = createVector(-0.02,0.2);
    self.color = color;
    var radius = 10;
    //self.particle = new Particle(100,10,30,[255,100,199]);
    //extendObj(Firework, Particle);
    self.particles=[];
    for (var i = 0; i < 50; i++)
    {
        self.velocity = p5.Vector.random2D();
        self.particles.push(new Particle(self.position.x,self.position.y,radius,self.color));
        self.velocity.mult(random(2,10));
        self.particles[i].setVelocity(self.velocity);
        self.particles[i].applyForce(self.gravity);

    }
    self.explodeHeart = function()
    {
        var xheart = 0.0;
        var yheart = 0;
        self.particles.forEach(function(particle, count)
        {
            if (count >= 0)
            {
                yheart += -0.5;
            }
            if (count >= 3)
            {
                xheart += 0.5;
            }
            if (count >= 6)
            {
                yheart += 0.5;
            }
            if (count >= 8)
            {
                yheart += 0.5;
            }
            if (count >= 12)
            {
                xheart += -0.5;
            }
            if (count >= 17)
            {
                xheart += -0.5;
                yheart += 0.5;
            }
            //middle
            if (count >= 25)
            {
                yheart += -1.8;
            }
            if (count >= 35)
            {
                xheart += 0.5;
            }
            if (count >= 38)
            {
                xheart += 0.5;
            }
            if (count >= 41)
            {
                yheart += 0.8;
            }
            if (count >= 44)
            {
                yheart += 0.8;
            }
            if (count >= 46)
            {
                xheart = 0;
                yheart = 0;

            }
            particle.resetVelocityTo(0,0);
            particle.setForce(0,0);
            velocity = createVector(xheart,yheart);
            particle.setVelocity(velocity);
            c++;
            particle.updateColor([self.color[0]+random(-27,27),self.color[1]+random(-27,27), self.color[2]+random(-27,27)]);

            if (c%7===0)
            {
                particle.updateColor([255,255,255]);
            }
            particle.update();
            particle.show();


        });
    };

    self.explode = function()
    {
        self.particles.forEach(function(particle)
        {
            c++;
            particle.updateColor([self.color[0]+random(-27,27),self.color[1]+random(-27,27), self.color[2]+random(-27,27)]);

            if (c%7===0)
            {
                particle.updateColor([255,255,255]);
            }

            //
            
            particle.update();
            particle.show();

        });

    };
};
