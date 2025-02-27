// Exercise: Rename 'primary' to 'primary-button' in the BEM class names.
export const Button = () => {
    const btnType = "primary";

    return (
        <div>
            <button className="primary">Save</button>
            <button className="primary">Cancel</button>
            <label className="primary-label">Delete</label>
            <p>Default button type: {btnType}</p>
        </div>
    );
};
