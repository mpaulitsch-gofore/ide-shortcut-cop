interface CtaProps {
    link: string;
    href: string;
    target: string;
    rel: string;
}

interface ButtonProps {
    link: string;
    target: string;
}

export const mapCtaToButtonProps = (cta: CtaProps): ButtonProps => {
    return {
        link: 'a link',
        target: 'a target',
    };
};