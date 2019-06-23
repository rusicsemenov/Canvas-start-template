window.onload = function() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const gui = new dat.GUI();
  const stats = new Stats();
  document.body.appendChild(stats.dom);

  // Resize thw window
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Clear all
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Animate canvas
  function animate() {
    clear();
    stats.begin();
    requestAnimationFrame(animate);
    stats.end();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(inputData.x, inputData.y, inputData.size, inputData.size);

    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(inputData.text, inputData.x, inputData.y);
  }

  // click function
  function click(e) {
    // canvas click
    if (e.target.localName == "canvas") {
      inputData.x = e.clientX;
      inputData.y = e.clientY;
      return;
    }
    console.log(`You click on '${e.target.localName}'`);
  }

  let inputData = {
    text: "Some text",
    x: 50,
    y: 50,
    size: 50,
  };

  gui.add(inputData, "text");
  gui.add(inputData, "x", 0, 100);
  gui.add(inputData, "y", 0, 100);
  gui.add(inputData, "size", 10, 100);

  window.addEventListener("resize", resize);
  window.addEventListener("click", click);
  resize();
  animate();
};
