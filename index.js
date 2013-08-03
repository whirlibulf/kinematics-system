function System(options) {
    this.engine = null;
    this.index = null;
}

System.prototype.init = function (engine) {
    console.log("Kinematics system loaded");
    this.engine = engine;
    this.index = this.engine.index("velocity", "position");
};

System.prototype.update = function (dt) {
    var entities, i, velocity, position;

    dt /= 1000;

    entities = this.engine.getAll(this.index);

    for (i = 0; i < entities.length; ++i) {
        velocity = this.engine.get(entities[i], "velocity");
        position = this.engine.get(entities[i], "position");

        position.x += (velocity.x || 0) * dt;
        position.y += (velocity.y || 0) * dt;
        position.z += (velocity.z || 0) * dt;
    }
};

module.exports = System;
