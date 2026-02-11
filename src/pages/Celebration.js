import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "celebration-page", children: [_jsx("div", { className: "confetti-field", "aria-hidden": true, children: confettiPieces.map((piece) => (_jsx("span", { className: "confetti-piece", style: {
                        left: piece.left,
                        animationDelay: piece.delay,
                        animationDuration: piece.duration,
                        backgroundColor: piece.color
                    } }, piece.id))) }), _jsx("h1", { children: "She said YES! \uD83C\uDF89" }), _jsx("div", { className: "celebration-grid", children: _jsxs("article", { className: "celebration-card celebration-gif-card", children: [_jsx("img", { src: celebrationGifUrl, alt: celebrationGifAlt, loading: "lazy" }), _jsx("p", { children: "Countdown to 5:00 PM at AI Volo Osteria is officially underway!!!" })] }) }), _jsxs("div", { className: "celebration-actions", children: [_jsx("a", { href: smsHref, className: "btn btn-yes", style: { textDecoration: 'none' }, children: "Text me!" }), _jsx(Link, { to: "/", className: "btn btn-yes", style: { textDecoration: 'none' }, children: "Re-read the question" })] })] }));
}
