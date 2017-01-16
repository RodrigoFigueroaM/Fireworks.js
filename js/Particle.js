var Particle = function (x,y,diameter,color)
{
    var self = this;
    self.position = createVector(x, y);
    self.acceleration = createVector(0,0);
    self.radius = diameter/2;
    self.velocity = createVector(0,0);
    self.color = color;
    self.update = function()
    {
        self.velocity.add(self.acceleration);
        self.position.add(self.velocity);
    };
    self.setVelocity = function(velocity)
    {
        self.velocity.add(velocity);
    };
    self.resetVelocityTo= function(velocity)
    {
        self.velocity = createVector(velocity);
    };
    self.changeRadius = function(diameter)
    {
        self.radius = diameter/2;
    };
    self.wallCollision = function()
    {
        if (self.position.y - self.radius/2 <= 0 ||self.position.y + self.radius/2 >= canvasHeight)
        {
            self.velocity.y *= -1;
        }
        if (self.position.x + self.radius/2 >= canvasWidth || self.position.x- self.radius/2<= 0)
        {
            self.velocity.x *= -1;
        }
    };
    self.objectCollision = function (other)
    {
        var distace = dist(self.x, self.y, other.x, other.y);
        if (distace <= self.radius/2 + other.radius/2)
        {
            return true;
        }
        else
         {
            return false;
        }
    };

    self.updateColor = function(color)
     {
        self.color = color;
    };
    self.show = function()
    {
        stroke(color);
        fill(self.color[0],self.color[1],self.color[2]);
        ellipse(self.position.x, self.position.y, self.radius, self.radius);
    };
    self.applyForce = function (acceleration)
    {
        self.acceleration.add(acceleration);
    };
    self.setForce = function (acceleration)
    {
        self.acceleration = createVector(acceleration);
    };
    self.reachedMaxHeight = function()
    {
        if (self.velocity.y >= 0)
        {
            return true;
        }
        return false;
    };
};
