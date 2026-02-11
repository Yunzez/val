import { Link } from 'react-router-dom';
import { palette } from '../style';

const confettiPieces = Array.from({ length: 36 }, (_, idx) => ({
  id: idx,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 3}s`,
  duration: `${5 + Math.random() * 2}s`,
  color: idx % 3 === 0 ? palette.gold : idx % 3 === 1 ? palette.cream : palette.bubblegum
}));

export default function Celebration() {
  const phoneNumber = '+1(206)7736026';
  const smsMessage = encodeURIComponent("Surprise! That's my number! Say hi >:)");
  const smsHref = `sms:${phoneNumber}?&body=${smsMessage}`;
  const celebrationGifUrl = 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Zm95MnR4M3I1MXZmNDY0MG82OXlobDdnc255YmVlanc1NzYwanJpNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jVc9j9QXBUKkXi0nVn/giphy.gif';
  const celebrationGifAlt = 'Animated hearts floating around a love letter';

  return (
    <div className="celebration-page">
      <div className="confetti-field" aria-hidden>
        {confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              backgroundColor: piece.color
            }}
          />
        ))}
      </div>

      <h1>She said YES! 🎉</h1>

      <div className="celebration-grid">
        <article className="celebration-card celebration-gif-card">
          <img src={celebrationGifUrl} alt={celebrationGifAlt} loading="lazy" />
          <p>
            Countdown to 5:00 PM at AI Volo Osteria is officially underway!!!
          </p>
        </article>
      </div>

      <div className="celebration-actions">
        <a href={smsHref} className="btn btn-yes" style={{ textDecoration: 'none' }}>
          Text me!
        </a>
        <Link to="/" className="btn btn-yes" style={{ textDecoration: 'none' }}>
          Re-read the question
        </Link>
      </div>
    </div>
  );
}
