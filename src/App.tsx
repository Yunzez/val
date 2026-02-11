import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { palette } from './style';

const heartStream = [
  { left: '8%', delay: '0s' },
  { left: '22%', delay: '2s' },
  { left: '38%', delay: '1s' },
  { left: '55%', delay: '3s' },
  { left: '72%', delay: '0.5s' },
  { left: '86%', delay: '1.5s' }
];

const noMessages = [
  'No?',
  'Hmm, maybe?',
  'But the yes button is cuter…',
  'Are you sure, Sophie?',
  'What if I add macarons?',
  'Final offer: daily compliments!',
  'Come on, try YES!'
];

let audioCtx: AudioContext | null = null;
const playFunnySound = () => {
  if (typeof window === 'undefined') return;
  audioCtx = audioCtx ?? new window.AudioContext();
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;

  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(220 + Math.random() * 240, now);
  oscillator.frequency.exponentialRampToValueAtTime(120 + Math.random() * 80, now + 0.18);

  gain.gain.setValueAtTime(0.18, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

  oscillator.connect(gain).connect(audioCtx.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.25);
};

export default function App() {
  const navigate = useNavigate();
  const [noClicks, setNoClicks] = useState(0);
  const [wiggle, setWiggle] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noLabelIndex, setNoLabelIndex] = useState(0);
  const [noFade, setNoFade] = useState(1);

  useEffect(() => {
    if (!wiggle) return;
    const id = window.setTimeout(() => setWiggle(false), 450);
    return () => window.clearTimeout(id);
  }, [wiggle]);

  const reactionText = useMemo(() => {
    if (noClicks === 0) return '';
    if (noClicks < 2) return 'Oh no?! I can sweeten the deal with chocolates.';
    if (noClicks < 4) return 'Wait wait, what about a cozy movie marathon, Sophie?';
    return 'Nice try. The "No" button will never work >:C';
  }, [noClicks]);

  const noButtonStyle: CSSProperties = useMemo(() => {
    const scale = Math.max(noFade, 0.65);
    const translateY = (1 - noFade) * 30;
    return {
      opacity: noFade,
      transform: `scale(${scale}) translateY(-${translateY}px)`,
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      pointerEvents: noFade <= 0.05 ? 'none' : 'auto'
    };
  }, [noFade]);

  const yesWrapperStyle: CSSProperties = useMemo(
    () => ({
      display: 'inline-flex',
      transition: 'transform 0.45s cubic-bezier(0.19, 1, 0.22, 1)',
      transform: `scale(${yesScale})`
    }),
    [yesScale]
  );

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
    setYesScale((prev) => Math.min(prev + 0.08, 2));
    setNoLabelIndex((prev) => (prev + 1) % noMessages.length);
    setNoFade((prev) => Math.max(prev - 0.2, 0));
    setWiggle(true);
    playFunnySound();
  };

  const handleYesClick = () => {
    navigate('/celebration');
  };

  const beggingGifUrl =
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTd4eDZ3N24yYWhqa2U0czIyMjVhdmx5d3FhNXJtMnA1NzhsbDZodSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XYEEvoX0Ub69ZgN9ai/giphy.gif';
  return (
    <div className="valentine-shell">
      <div className="proposal-card">
        {heartStream.map((heart, idx) => (
          <span
            key={idx}
            className="floating-heart"
            style={{ left: heart.left, animationDelay: heart.delay }}
            aria-hidden
          />
        ))}
        <div className="proposal-body">
          <p className="subline">February 14, 2026 • A very important question</p>
          <h1>Sophie Levitt, will you be my Valentine!?</h1>
          <img className="begging-gif" src={beggingGifUrl} alt="Pleading animated bear with big eyes" loading="lazy" />
          <div className="valentine-buttons">
            <span style={yesWrapperStyle}>
              <button type="button" className="btn btn-yes" onClick={handleYesClick}>
                Yes (obviously)
              </button>
            </span>
            {noFade > 0.05 ? (
              <button
                type="button"
                className={`btn btn-no ${wiggle ? 'wiggly' : ''}`}
                style={noButtonStyle}
                onClick={handleNoClick}
              >
                {noMessages[noLabelIndex]}
              </button>
            ) : (
              <span className="no-button-ghost">Oh look… the "No" option mysteriously vanished 👀</span>
            )}
          </div>
          <p className="reaction-text">{reactionText}</p>
        </div>
      </div>
    </div>
  );
}
