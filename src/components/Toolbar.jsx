export default function Toolbar ( {filters, selected, onSelectFilter} ) {
    return (
        <div className="toolbar">
            {filters.map(filter => {
                return <button
                    key={filter}
                    className={filter === selected ? 'selected' : ''}
                    onClick={() => onSelectFilter(filter)}
                >{filter}</button>
            })}
        </div>
    );
}