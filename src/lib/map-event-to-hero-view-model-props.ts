interface ViewModelTextProp {
    value: string;
    meta?: string;
}

export interface HeroEvent {
    id: string;
    title: string;
    description: string;
    image: {
        url: string;
        copyright: string;
    }
}

interface HeroViewModelProps {
    id: ViewModelTextProp;
    title: ViewModelTextProp;
    description: ViewModelTextProp;
    imageUrl: ViewModelTextProp;
    imageCopyright: ViewModelTextProp;
}

/**
 * Exercise: This code has been refactored and should be brought to the following form:
 *
 * id: { value: event.id, meta: 'id' },
 * title: { value: event.title, meta: 'title' },
 * description: { value: event.description, meta: 'description' },
 * imageUrl: { value: event.image.url, meta: 'imageUrl' },
 * imageCopyright: { value: event.image.copyright, meta: 'imageCopyright' },
 *
 */
function mapEventToHeroViewModelProps(event: HeroEvent): HeroViewModelProps {
    return {
        // @ts-expect-error - Not yet fixed after refactoring
        id: event.id,
        // @ts-expect-error - Not yet fixed after refactoring
        title: event.title,
        // @ts-expect-error - Not yet fixed after refactoring
        description: event.description,
        // @ts-expect-error - Not yet fixed after refactoring
        imageUrl: event.image.url,
        // @ts-expect-error - Not yet fixed after refactoring
        imageCopyright: event.image.copyright,
    };
}

// Example usage:
const event: HeroEvent = {
    id: "123",
    title: "Captain TypeScript",
    description: "The fearless defender of clean code.",
    image: {
        url: "captain-typescript.jpg",
        copyright: "2025 TypeScript Studios",
    }
};

const heroProps = mapEventToHeroViewModelProps(event);
console.log(heroProps);