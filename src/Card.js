export default function Card({ title, description, subtitle,  children, links = []}) {
    return (
        <div className="card" style={{ width: '18rem', }}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className="card-text">{description}</p>
                {links.map((link, index) =>
                    <a href={link.href} className="card-link" key={index}>{link.title}</a>
                )}
            </div>
        </div>
    )
}
