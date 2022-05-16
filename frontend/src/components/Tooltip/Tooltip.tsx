import React, { FC } from 'react';
import './Tooltip.css';

interface TooltipProps {
    /**
     * Required; it is the child elements.
     */
    children: React.ReactNode,
    /**
     * This is the text that will show in the tooltip.
     */
    text: string,
    /**
     * Whether or not the tooltip will render on above the element provided or below it.
     */
    top?: boolean,
    /**
     * Inline styles for the actual tooltip
     */
    defaultStyle?: boolean,
    /**
     * Add a class to the tooltip wrapper (text + element)
     */
    className?: string,
    /**
     * Callback function for this native event
     */
    onMouseEnter?: () => void,
    /**
     * Callback function for this native event
     */
    onMouseLeave?: () => void,
    /**
     * Inline styles for the tooltip wrapper
     */
    style?: React.CSSProperties,
    /**
     * Wrap the entire tooltip in this element.
     * Most common usage is <Link> or <a>
     */
    as?: JSX.Element
}

const Tooltip: FC<TooltipProps> = (props) => {
    const element = Array.isArray(props.children) && props.children.length > 1 ? props.children[0] : props.children;

    const text: string = props.text;

    const defaultStyle = {
        fontSize: '1rem'
    };

    const asElement: JSX.Element = props?.as;

    const result: JSX.Element = React.createElement(asElement?.type !== undefined ? asElement.type : React.Fragment, asElement?.props, 
        (
            <div className={`tooltip ${props.top ? 'top-tooltip' : 'bottom-tooltip'} ` + (props?.className !== undefined ? props.className : '')}
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

    return result;
}

export default Tooltip;