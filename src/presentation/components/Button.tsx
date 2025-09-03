export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    type: 'confirm' | 'cancel' | 'disabled';
    /** Button contents */
    label: string;
    customStyle?: string;
    /** Optional click handler */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
                           type = 'confirm',
                           label,
                           customStyle,
                           ...props
                       }: ButtonProps) => {
    const confirmStyle = 'bg-blue-500 border-none text-white py-4 px-8 text-center no-underline text-lg my-5 mx-1 cursor-pointer rounded-md';
    const cancelStyle = 'bg-red-500 border-none text-white py-4 px-8 text-center no-underline text-lg my-5 mx-1 cursor-pointer rounded-md';
    const disabledStyle = 'bg-gray-400 border-none text-white py-4 px-8 text-center no-underline text-lg my-5 mx-1 rounded-md cursor-not-allowed';
    let buttonStyle;
    switch (type) {
        case "confirm":
            buttonStyle = confirmStyle;
            break;
        case "cancel":
            buttonStyle = cancelStyle;
            break;
        case "disabled":
            buttonStyle = disabledStyle;
            break;
    }
    return (
        <button
            type="button"
            className={buttonStyle + (customStyle ? ` ${customStyle}` : '')}
            {...props}
        >
            {label}
        </button>
    );
};
