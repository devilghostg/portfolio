const bar = document.querySelector('.bar > div');
bar.addEventListener("click", function() {
    bar.classList.toggle("active");
    console.log("coucou");
});

