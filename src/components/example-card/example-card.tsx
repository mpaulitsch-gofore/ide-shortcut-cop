// Exercise: Rename 'card' to 'example-card' in the BEM class names.

export const ExampleCard = () => {
    return (
        <div className="card">
            <header className="card__header">
                <h1 className="card__title">BEM Styled Component</h1>
            </header>
            <section className="card__body">
                <p className="card__text">
                    This component demonstrates the BEM methodology in a React component.
                </p>
                <ul className="card__list">
                    <li className="card__list-item">Item 1</li>
                    <li className="card__list-item">Item 2</li>
                    <li className="card__list-item">Item 3</li>
                </ul>
                <figure className="card__figure">
                    <img className="card__image" src="example.jpg" alt="Example" />
                    <figcaption className="card__caption">An example image</figcaption>
                </figure>
                <a className="card__link" href="#learn-more">
                    Learn More
                </a>
            </section>
            <footer className="card__footer">
                <time className="card__time" dateTime="2025-02-27">
                    February 27, 2025
                </time>
            </footer>
        </div>
    );
};