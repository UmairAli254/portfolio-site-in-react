import "./Circle.css";

export default function Circle({Number, FirstText, SecondText}) {
    return (
        <div className="achievement">
            <div className="circle">{Number}+</div>
            <span>{FirstText}</span>
            <span>{SecondText}</span>
        </div>
    )
}
