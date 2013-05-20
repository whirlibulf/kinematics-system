
# kinematics-system

A system for moving objects with velocity in the whirlibulf game engine.

## Required Components

* [whirlibulf/velocity-component](https://github.com/whirlibulf/velocity-component)
* [whirlibulf/position-component](https://github.com/whirlibulf/position-component)

## Installation

    $ component install whirlibulf/kinematics-system

## Usage

This system requires the position component and velocity component.

This system will change the position component of each object by the amount
specified in its velocity component per update tick.

The velocity values should be specified in pixels per second.

Register the system:

    var Kinematics = require('kinematics-system');
    game.use(new Kinematics());

The system takes no options.

## License

  MIT
