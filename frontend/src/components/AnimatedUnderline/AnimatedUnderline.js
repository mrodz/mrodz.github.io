import './AnimatedUnderline.css';

export default function AnimatedUnderline(props) {
    const colorFrom = props?.colors.from, colorTo = props?.colors.to;

    return (
        <span className='fancy-underline' style={{ backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo}` }}>
            {props.children}
        </span>
    );
}