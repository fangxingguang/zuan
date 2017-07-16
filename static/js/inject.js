function addJQueryScript() {
  var script = document.createElement("script");
  script.src = "https://libs.baidu.com/jquery/1.9.0/jquery.js";
  script.onload = script.onreadystatechange = function() {
    $(document).ready(() => {
      console.log("Hello, World!")
    });
  };
  document.body.appendChild(script);
}

let scriptAddInterval = setInterval(() => {
  if (document.readyState === "complete") {
    addJQueryScript();
    clearInterval(scriptAddInterval);
  }
});
