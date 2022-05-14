import { FC } from 'react';
import './AnimatedUnderline.css';

interface AnimatedUnderlineProps {
    colors: {
        from: string,
        to: string
    },
    children?: JSX.Element | JSX.Element[]
}

const AnimatedUnderline: FC<AnimatedUnderlineProps> = (props) => {
    const colorFrom = props.colors.from, colorTo = props.colors.to;

    return (
        <span className='fancy-underline' style={{ backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo}` }}>
            {props.children}
        </span>
    );
}

export default AnimatedUnderline;