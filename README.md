# Mirrored Mouse Concept

-  This is just a simple concept of how you can use math to mirror your mouse position among a canvas
-  In order to achieve this you have to get the canvasOffsets and subtract them from your mouse.
-  Some challenges I faced in this was making sure the User doesn't scroll by using
```javascript
window.scrollTo(0, 0);`
-4. Here is the code necessary for this -->

```javascript
//return mouse position in canvas when hovering canvas
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x - ctx.canvas.offsetLeft;
    mouse.y = event.y - ctx.canvas.offsetTop;
    
    //initiate drawing to canvas
    ctx.beginPath();
    
    //where to draw the mirrored position of your mouse
    ctx.arc(canvas.width - mouse.x, canvas.height - mouse.y, circleSize, 0, Math.PI * 2, false);
    
    //color of object
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();`
    
- you can see you need to subtract the canvas width, height with current mouse x, y values
