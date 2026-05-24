import { Link } from "react-router-dom"

interface RelatedSystem {
  label: string
  description: string
  path: string
}

interface RelatedSystemsProps {
  heading?: string
  items: RelatedSystem[]
}

export function RelatedSystems({ heading = "RELATED INFRASTRUCTURE", items }: RelatedSystemsProps) {
  return (
    <div
      style={{
        backgroundColor: "#0C0A08",
        padding: "3rem 1.25rem 4rem",
        maxWidth: "860px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "1px",
          backgroundColor: "rgba(184,134,26,0.15)",
          marginBottom: "2.5rem",
        }}
      />
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#B8861A",
          marginBottom: "2rem",
        }}
      >
        {heading}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              style={{
                borderTop: "1px solid rgba(184,134,26,0.2)",
                paddingTop: "1rem",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(184,134,26,0.6)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(184,134,26,0.2)"
              }}
            >
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#F2EDE6",
                  marginBottom: "0.4rem",
                  transition: "color 0.2s",
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#9A8E7E",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
