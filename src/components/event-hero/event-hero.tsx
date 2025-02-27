import {Button} from "../button/primary-button.tsx";

interface EventHeroProps {
    // TODO intentional error to be fixed
    event: HeroEvent;
}

const EventHero: React.FC<EventHeroProps> = ({ event }) => {
    return (
        <div className="event-hero">
            <header className="event-hero__header">
                <h1 className="event-hero__title">{event.title}</h1>
            </header>
            <section className="event-hero__body">
                <p className="event-hero__text">
                    {event.description}
                </p>
                <figure className="event-hero__figure">
                    <img className="event-hero__image" src={event.image.url} alt={event.title} />
                    <figcaption className="event-hero__caption">{event.image.caption}</figcaption>
                </figure>
            </section>
            <Button />
        </div>
    );
}