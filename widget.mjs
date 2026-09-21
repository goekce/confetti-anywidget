import confetti from 'canvas-confetti';

export default {
  render({ model, el }) {
    const btn = document.createElement("button");
    btn.textContent = "🎉 Tak for i dag!";
    Object.assign(btn.style, {
      padding: "10px 20px",
      fontSize: "16px",
      fontFamily: "system-ui, sans-serif",
      cursor: "pointer",
      border: "2px solid #6366f1",
      borderRadius: "8px",
      backgroundColor: "#eef2ff",
      color: "#4338ca",
    });

    btn.addEventListener("click", () => {
      const end = Date.now() + (2 * 1000);
      const colors = ['#bb0000', '#ffffff'];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: Math.random(), y: Math.random() * 0.5 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    });

    el.appendChild(btn);

    return () => {
      btn.remove();
    };
  },
};
