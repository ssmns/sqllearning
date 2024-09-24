// hljs.highlightAll();


document.querySelectorAll("div.coder").forEach((element) => {
  const temdb = element.innerText;
  hljs.highlightElement(element);
  var regex = /^language/;
  element.classList.forEach((cls) => {
    if (regex.test(cls)) {
      const lang = document.createElement("h2");
      var temptitle = cls.split("-")[1].toUpperCase();
      lang.innerText = temptitle;
      lang.classList.add("unselectable")

      lang.style.cursor="copy"

      lang.addEventListener("click", (event) => {
        navigator.clipboard.writeText(temdb);
        lang.innerText="Code Copied!"
        setInterval(() => {
            lang.innerText =temptitle;
        },2000);
      });

      element.appendChild(lang);
    }
  });
});
