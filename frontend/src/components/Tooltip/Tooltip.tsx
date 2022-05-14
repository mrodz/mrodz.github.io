import React, { FC } from 'react';
import './Tooltip.css';

interface TooltipProps {
    children: JSX.Element[] | JSX.Element,
    text: string,
    top?: boolean,
    defaultStyle?: boolean,
    className?: string,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    style?: React.CSSProperties,
    as?: JSX.Element
}

const Tooltip: FC<TooltipProps> = (props) => {
    const element = Array.isArray(props.children) && props.children.length > 1 ? props.children[0] : props.children;

    // console.log(props.children);
    const text = props.text;

    const defaultStyle = {
        fontSize: '1rem'
    };

    const asElement: JSX.Element = props?.as;

    const result: JSX.Element = React.createElement(asElement?.type !== undefined ? asElement.type : React.Fragment, asElement?.props, 
        (
            <div className={`tooltip ${props.top ? 'top-tooltip' : 'bottom-tooltip'}` + (props?.className !== undefined ? props.className : '')}
                onMouseEnter={props?.onMouseEnter}
                onMouseLeave={props?.onMouseLeave}
                style={props?.style}>
                <div data-content>
                    {element}
                </div>
                <div data-text style={props.defaultStyle ? defaultStyle : {}}>
                    {text}
                </div>
            </div>
        )
    );
    let a = asElement?.props.children
    console.log(a);

    return result /*(
        {result}
        // <React.Fragment>
        //     <div className={`tooltip ${props.top ? 'top-tooltip' : 'bottom-tooltip'}` + props?.className}
        //         onMouseEnter={props?.onMouseEnter}
        //         onMouseLeave={props?.onMouseLeave}
        //         style={props?.style}>
        //         <div data-content>
        //             {element}
        //         </div>
        //         <div data-text style={props.defaultStyle ? defaultStyle : {}}>
        //             {text}
        //         </div>
        //     </div>
        // </React.Fragment>
    );*/
}

export default Tooltip;