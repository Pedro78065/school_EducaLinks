const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// ======================
// BIRD
// ======================
let bird = {
    x: 60,
    y: 200,
    velocity: 0,
    gravity: 0.6,
    jump: -10
};

// ======================
// PIPES
// ======================
let pipes = [];
let score = 0;
let gameOver = false;

// ======================
// CONTROLE
// ======================
document.addEventListener("keydown", () => {
    bird.velocity = bird.jump;
});

document.addEventListener("touchstart", () => {
    bird.velocity = bird.jump;
});

// ======================
// PIPE GERATOR
// ======================
function createPipe() {
    let gap = 120;
    let top = Math.random() * 250;

    pipes.push({
        x: 400,
        top: top,
        bottom: top + gap
    });
}

// ======================
// GAME LOOP
// ======================
function update() {
    if (gameOver) return;

    ctx.clearRect(0, 0, 400, 500);

    // bird
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, 20, 20);

    // pipes
    pipes.forEach((pipe, index) => {
        pipe.x -= 2;

        ctx.fillStyle = "green";
        ctx.fillRect(pipe.x, 0, 50, pipe.top);
        ctx.fillRect(pipe.x, pipe.bottom, 50, 500);

        // colisão
        if (
            bird.x < pipe.x + 50 &&
            bird.x + 20 > pipe.x &&
            (bird.y < pipe.top || bird.y + 20 > pipe.bottom)
        ) {
            gameOver = true;
        }

        // score
        if (pipe.x + 50 === bird.x) {
            score++;
            document.getElementById("score").textContent = "Score: " + score;
        }

        // remove pipe
        if (pipe.x < -50) {
            pipes.splice(index, 1);
        }
    });

    // chão/teto
    if (bird.y > 480 || bird.y < 0) {
        gameOver = true;
    }

    requestAnimationFrame(update);
}

// ======================
// LOOP DE PIPES
// ======================
setInterval(createPipe, 1500);

// ======================
// START
// ======================
update();