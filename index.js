function System(options) {
}

System.prototype.init = function (engine) {
  console.log("Kinematics system loaded");
  this.engine = engine;
};

System.prototype.update = function (dt) {
  var objects, i, velocity, position;

  objects = this.engine.getAll('velocity');

  for (i = 0; i < objects.length; ++i) {
    velocity = this.engine.get(objects[i], 'velocity');
    position = this.engine.get(objects[i], 'position');

    if (position === undefined) {
      continue;
    }

    position.x += velocity.x || 0;
    position.y += velocity.y || 0;
    position.z += velocity.z || 0;
  }
};

module.exports = System;
