export const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array.from({ length: 8 }).map((_, i) => (
                <div className="skeleton-card skeleton" key={"shimmer-" + i}>
                    <div className="skeleton-image shimmer pulse" />
                    <div className="skeleton-content">
                        <div className="skeleton-line" />
                        <div className="skeleton-line short" />
                        <div className="skeleton-line xs" />
                    </div>
                </div>
            ))}
        </div>
    );
}