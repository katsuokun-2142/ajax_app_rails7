function post (){
  //リクエストを送信する処理
  // console.log("イベント発火");
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // form.addEventListener("submit", () => {
      // console.log("イベント発火");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 };
 
 window.addEventListener('turbo:load', post);