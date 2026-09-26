import { Link } from 'react-router-dom';
import { useOffers } from '../hooks/useOffers';

export function OffersPage(): JSX.Element {
  const { offers, loading, error } = useOffers();

  if (error) {
    return (
      <div className="offers-section">
        <h2>Failed to load offers</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="services-container">
      {/* Header */}
      <div className="services-header">
        <h1>Special Offers</h1>
        <p>Don't miss our incredible discounts and promotions</p>
      </div>

      {/* Offers Grid */}
      <div className="offers-section">
        {loading ? (
          <div className="ui-loading-state">
            <div className="ui-spinner" />
            <span>Loading offers...</span>
          </div>
        ) : offers.length === 0 ? (
          <div className="ui-empty-state">
            <h3>No active offers</h3>
            <p>Check back soon for new promotions</p>
          </div>
        ) : (
          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-badge">{offer.status.toUpperCase()}</div>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>

                <div className="offer-discount">
                  {offer.discountType === 'percentage'
                    ? `${offer.discount}%`
                    : `${offer.discount} ${offer.discount}`}
                </div>

                {offer.code && <div className="offer-code">{offer.code}</div>}

                <div className="offer-validity">
                  Valid until: {new Date(offer.endDate).toLocaleDateString()}
                </div>

                <Link
                  to={`/?code=${offer.code}`}
                  className="ui-button ui-button--block offer-cta"
                >
                  Claim Offer
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back Link */}
      <div className="services-offers-back ui-text-center">
        <Link
          to="/"
          className="ui-link"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
