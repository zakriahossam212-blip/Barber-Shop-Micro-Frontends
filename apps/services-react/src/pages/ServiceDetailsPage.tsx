import { useParams, Link, useNavigate } from 'react-router-dom';
import { useServiceById } from '../hooks/useServices';

export function ServiceDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { service, loading, error } = useServiceById(id || '');

  if (error) {
    return (
      <div className="service-details">
        <h2>Failed to load service</h2>
        <p>{error.message}</p>
        <Link to="/" className="ui-button ui-button--primary service-cta">
          Back to Services
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="ui-loading-state">
        <div className="ui-spinner" />
        <span>Loading service details...</span>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="service-details">
        <h2>Service not found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/" className="ui-button ui-button--primary service-cta">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-details">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="ui-link service-back-link"
      >
        ← Back
      </button>

      {/* Details Header */}
      <div className="details-header">
        <div className="details-image details-image--service">
          {service.image?.startsWith('/') ? (
            <img className="ui-media-cover" src={service.image} alt={service.name} />
          ) : (
            service.image || '💈'
          )}
        </div>
        <div className="details-info">
          <div className="details-category">{service.category}</div>
          <h1>{service.name}</h1>
          <p className="details-description">{service.description}</p>

          {/* Meta Information */}
          <div className="details-meta">
            <div className="meta-item">
              <span className="meta-label">Price</span>
              <span className="meta-value">
                {service.price} {service.currency}
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{service.duration} minutes</span>
            </div>
          </div>

          {/* CTA */}
          <a href={`/booking?serviceId=${service.id}`} className="ui-button ui-button--primary details-cta">
            Book This Service
          </a>
        </div>
      </div>

      {/* Additional Info */}
      <div className="service-details-additional ui-page-width">
        <h2>About This Service</h2>
        <p className="ui-muted">
          Our {service.name} service is provided by professional and experienced barbers. We use
          premium tools and products to ensure the best results. Each appointment is personalized
          to meet your specific needs and preferences.
        </p>

        {/* Back to Services Link */}
        <div className="service-details-back">
          <Link to="/" className="ui-link">
            ← View all services
          </Link>
        </div>
      </div>
    </div>
  );
}
