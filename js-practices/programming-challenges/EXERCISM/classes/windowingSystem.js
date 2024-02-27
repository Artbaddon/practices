export function Size(width, height) {
  this.width = width || 80;
  this.height = height || 60;
}
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

class ProgramWindow {
  constructor(size, position) {
    this.screenSize = { width: 800, height: 600 };
    this.size = size || new Size();
    this.position = position || new Position();
  }
  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const width = newSize.width <= maxWidth ? newSize.width : maxWidth;
    const maxHeight = this.screenSize.height - this.position.y;
    const height = newSize.height >= maxHeight ? maxHeight : newSize.height;
    this.size.resize(Math.max(width, 1), Math.max(height, 1));
  }
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));
    this.position.move(newX, newY);
  }
}
const programWindow = new ProgramWindow();
const newPosition = new Position(710, 525);
programWindow.move(newPosition);
const newSize = new Size(1000, 1000);
programWindow.resize(newSize);

console.log(programWindow);
