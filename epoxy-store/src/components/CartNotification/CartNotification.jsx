import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CartNotification.css";

const CartNotification = ({ isVisible, productName, onClose }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isVisible) {
      // Auto hide notification after 10s
      timer = setTimeout(() => {
        onClose();
      }, 10000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="cart-notification" ref={notificationRef}>
      <div className="cart-notification-content">
        <p>
          <strong>{productName}</strong> je dodat u korpu.
        </p>
        <div className="cart-notification-actions">
          <Link to="/checkout" className="cart-notification-link">
            Pogledaj korpu
          </Link>
          <button className="cart-notification-close" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartNotification;
