// Exercise: Rename 'primary' to 'primary-button' in the BEM class names.
export const Button = () => {
    const btnType = "pirmary";

    return (
        <div>
            <button className="pirmary">Save</button>
            <button className="pirmary">Cancel</button>
            <label className="pirmary-label">Delete</label>
            <p>Default button type: {btnType}</p>
        </div>
    );
};
