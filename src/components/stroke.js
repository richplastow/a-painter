AFRAME.registerComponent('stroke', {
  schema: {
    brush: { default: '' },
    color: { default: '' },
    size: { default: '' }
  },
  /*
  init: function () {
    this.idx = 0;
    this.currentBrushName = 'flat';

    this.active = false;
    this.obj = this.el.object3D;
    this.currentLine = null;
    this.strokeEntities = [];
    this.color = new THREE.Color(0xd03760);
    this.brushSize = 0.01;
    this.brushSizeModifier = 0.0;
    this.textures = {};
    this.currentMap = 0;

    this.model = this.el.getObject3D('mesh');
    this.drawing = false;

    this.el.addEventListener('stroke-changed', function (evt) {
      this.currentMap = evt.detail.strokeId;
      this.brushSize = evt.detail.brushSize * 0.05;
    }.bind(this));

    this.el.addEventListener('axismove', function (evt) {
      if (evt.detail.axis[0] === 0 && evt.detail.axis[1] === 0) {
        return;
      }
      this.brushSize = 0.1 * (evt.detail.axis[1] + 1) / 2;
      this.el.emit('brushsize-changed', {brushSize: this.brushSize});

      // @fixme This is just for testing purposes
      this.color.setRGB(Math.random(),Math.random(),Math.random());
      this.el.emit('brushcolor-changed', {color: this.color});
    }.bind(this));

    this.el.addEventListener('buttondown', function (evt) {
      // Grip
      if (evt.detail.id === 2) {
        var entity = this.strokeEntities.pop();
        if (entity) {
          entity.emit('stroke-removed', {entity: entity});
          entity.parentNode.removeChild(entity);
        }
      }
    }.bind(this));

    this.el.addEventListener('buttonchanged', function (evt) {
      // Trigger
      if (evt.detail.id === 1) {
        var value = evt.detail.state.value;
        this.brushSizeModifier = value * 2;
        if (value > 0.1) {
          if (!this.active) {
            this.startNewStroke();
            this.active = true;
          }
        } else {
          if (this.active) {
            this.previousEntity = this.currentEntity;
            this.currentLine = null;
          }
          this.active = false;
        }
      }
    }.bind(this));
  },
  tick: function () {
    var position = new THREE.Vector3();
    var rotation = new THREE.Quaternion();
    var scale = new THREE.Vector3();

    return function tick (time, delta) {
      if (this.currentLine && this.active) {
        this.obj.matrixWorld.decompose(position, rotation, scale);
        var pointerPosition = this.system.getPointerPosition(position, rotation);
        this.currentLine.addPoint(position, rotation, pointerPosition, this.brushSizeModifier, time);
      }
    }
  }(),
  */
});
