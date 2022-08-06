import "./FloatingDiv.css";

export default function FloatingDiv({Img, Text1, Text2}) {
    return (
        <div className="floating-div">
            <img src={Img} alt="Crown" />
            <span>
                {Text1} <br />
                {Text2}
            </span>
        </div>
    )
}
