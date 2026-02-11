import { jsx as _jsx } from "react/jsx-runtime";
export const palette = {
    blush: '#FF8FAB',
    candy: '#FF5D8F',
    rose: '#D94A8C',
    bubblegum: '#FFC2D1',
    cream: '#FFF0F3',
    plum: '#5E1037',
    gold: '#FFD166'
};
export const playfulShapes = [
    '50% 50% 50% 50% / 60% 60% 40% 40%',
    '30% 70% 50% 50% / 70% 30% 70% 30%',
    '80% 20% 50% 50% / 30% 70% 30% 70%',
    '15% 85% 25% 75% / 40% 60% 30% 70%',
    '10% 90% 30% 70% / 60% 40% 60% 40%'
];
export const ThemeStyles = () => (_jsx("style", { children: `
    :root {
      --color-blush: ${palette.blush};
      --color-candy: ${palette.candy};
      --color-rose: ${palette.rose};
      --color-bubblegum: ${palette.bubblegum};
      --color-cream: ${palette.cream};
      --color-plum: ${palette.plum};
      --color-gold: ${palette.gold};
      --shadow-soft: 0 20px 60px rgba(94, 16, 55, 0.25);
      font-family: 'Nunito', 'Baloo 2', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont;
      background-color: var(--color-cream);
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background: radial-gradient(circle at 20% 20%, rgba(255, 141, 171, 0.3), transparent 45%),
        radial-gradient(circle at 80% 0%, rgba(255, 93, 143, 0.35), transparent 50%),
        linear-gradient(135deg, var(--color-cream), #ffe2ec 55%, var(--color-bubblegum));
      color: var(--color-plum);
    }

    .valentine-shell {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
    }

    .proposal-card {
      position: relative;
      width: min(720px, 90vw);
      padding: 3rem 3.5rem;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 40px;
      box-shadow: var(--shadow-soft);
      text-align: center;
      overflow: hidden;
    }

    .proposal-card::after,
    .proposal-card::before {
      content: '';
      position: absolute;
      width: 260px;
      height: 260px;
      background: radial-gradient(circle, rgba(255, 141, 171, 0.65), transparent 70%);
      filter: blur(10px);
      z-index: 0;
    }

    .proposal-card::before {
      top: -120px;
      right: -80px;
    }

    .proposal-card::after {
      bottom: -160px;
      left: -60px;
    }

    .proposal-body {
      position: relative;
      z-index: 1;
    }

    .begging-gif {
      display: block;
      width: min(360px, 80vw);
      max-height: 280px;
      object-fit: cover;
      margin: 1.25rem auto 1.75rem;
      border-radius: 28px;
      border: 4px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0 20px 45px rgba(94, 16, 55, 0.25);
    }

    h1 {
      font-size: clamp(2.5rem, 4vw, 3.6rem);
      margin-bottom: 0.5rem;
      color: var(--color-plum);
    }

    .subline {
      font-size: 1.1rem;
      color: #852449;
      margin-bottom: 2rem;
    }

    .valentine-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-top: 1rem;
    }

    .btn {
      cursor: pointer;
      min-width: 140px;
      padding: 1rem 1.5rem;
      font-size: 1.1rem;
      font-weight: 700;
      border: none;
      border-radius: 999px;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-radius 0.4s ease;
      box-shadow: 0 12px 30px rgba(255, 93, 143, 0.35);
      color: white;
    }

    .btn-yes {
      background: linear-gradient(135deg, var(--color-candy), var(--color-rose));
    }

    .btn-yes:hover {
      transform: translateY(-4px) scale(1.03);
    }

    .btn-no {
      background: linear-gradient(135deg, var(--color-bubblegum), var(--color-cream));
      color: var(--color-plum);
      border: 2px dashed rgba(94, 16, 55, 0.4);
    }

    .btn-no.wiggly {
      animation: wiggle 0.5s ease forwards;
    }

    .btn:hover {
      box-shadow: 0 18px 40px rgba(94, 16, 55, 0.25);
    }

    .reaction-text {
      margin-top: 1rem;
      min-height: 1.5rem;
      font-weight: 600;
      color: var(--color-rose);
    }

    .no-button-ghost {
      font-weight: 700;
      color: var(--color-plum);
      background: rgba(255, 255, 255, 0.65);
      border-radius: 999px;
      padding: 0.85rem 1.6rem;
      box-shadow: 0 10px 25px rgba(94, 16, 55, 0.2);
      border: 2px dashed rgba(94, 16, 55, 0.3);
      text-align: center;
    }

    .floating-heart {
      position: absolute;
      width: 30px;
      height: 30px;
      background: var(--color-candy);
      clip-path: path('M15 27 L0 12 A8 8 0 0 1 15 3 A8 8 0 0 1 30 12 Z');
      opacity: 0.15;
      animation: float 6s linear infinite;
    }

    .floating-heart:nth-child(odd) {
      animation-duration: 8s;
      animation-delay: 1s;
      background: var(--color-blush);
    }

    .floating-heart:nth-child(even) {
      animation-duration: 7s;
      animation-delay: 2s;
      background: var(--color-bubblegum);
    }

    @keyframes float {
      0% {
        transform: translateY(0) scale(1);
      }
      100% {
        transform: translateY(-80vh) scale(1.4);
        opacity: 0;
      }
    }

    @keyframes wiggle {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(-6deg) translateX(-4px); }
      50% { transform: rotate(6deg) translateX(4px); }
      75% { transform: rotate(-3deg); }
      100% { transform: rotate(0deg); }
    }

    /* Celebration page */
    .celebration-page {
      min-height: 100vh;
      padding: 4rem 1.5rem;
      background: radial-gradient(circle at top, rgba(255, 210, 102, 0.65), transparent 50%),
        linear-gradient(120deg, var(--color-rose), var(--color-candy) 60%, var(--color-blush));
      color: white;
      text-align: center;
    }

    .celebration-page h1 {
      font-size: clamp(2.8rem, 6vw, 4.2rem);
      color: white;
      text-shadow: 0 12px 40px rgba(94, 16, 55, 0.35);
    }

    .celebration-page p {
      font-size: 1.2rem;
      max-width: 640px;
      margin: 1rem auto 2rem;
    }

    .celebration-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-top: 2.5rem;
    }

    .celebration-card {
      background: rgba(255, 255, 255, 0.2);
      padding: 1.75rem 1.5rem;
      border-radius: 30px;
      box-shadow: 0 18px 35px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(6px);
    }

    .celebration-gif-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      text-align: center;
    }

    .celebration-gif-card img {
      width: min(360px, 80vw);
      border-radius: 28px;
      border: 4px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
    }

    .celebration-actions {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .celebration-actions a,
    .celebration-actions button {
      background: white;
      color: var(--color-rose);
      border-radius: 999px;
      padding: 0.9rem 1.6rem;
      font-weight: 700;
      border: none;
      text-decoration: none;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      transition: transform 0.2s ease;
    }

    .celebration-actions a:hover,
    .celebration-actions button:hover {
      transform: translateY(-4px);
    }

    .confetti-field {
      pointer-events: none;
      position: fixed;
      inset: 0;
      overflow: hidden;
    }

    .confetti-piece {
      position: absolute;
      width: 12px;
      height: 22px;
      opacity: 0.9;
      animation: confetti 6s linear infinite;
      border-radius: 2px;
    }

    @keyframes confetti {
      0% {
        transform: translateY(-10vh) rotate(0deg);
      }
      100% {
        transform: translateY(110vh) rotate(720deg);
      }
    }

    @media (max-width: 600px) {
      .proposal-card {
        padding: 2.25rem 1.5rem;
      }

      .valentine-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
    ` }));
