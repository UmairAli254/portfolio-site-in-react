import "./Card.css";

export default function Card({ Img, Heading, Detail }) {
    return (
        <div className='cardDiv'>
            <img src={Img} />
            <span>{Heading}</span>
            <span>{Detail}</span>
            <button>Learn More</button>
        </div>
    )
}
