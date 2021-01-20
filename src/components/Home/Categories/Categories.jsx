import React from 'react';

const Categories = React.memo(({ activeCategory, categories, setCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => setCategory(null)}>Все</li>
                {categories.map((el, i) => {
                    return <li className={activeCategory === i ? 'active' : ''} onClick={() => setCategory(i)} key={`${el}_${i}`}>{el}</li>
                })}
            </ul>
        </div>
    )
})


export default Categories;

