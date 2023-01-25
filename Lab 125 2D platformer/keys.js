window.addEventListener("keypress", function (event) {
    switch (event.code) {
        case "Space":
        hero.jump();
        break;
        case "KeyA":
            for (let i = 0; i < platforms.length; i++) {
                platforms[i].loc.x-=5;
            }
            break;
        case "KeyD":
            console.log("key");
            for (let i = 0; i < platforms.length; i++) {
                platforms[i].loc.x+=5;
            }
            break;
    }
}, false);


