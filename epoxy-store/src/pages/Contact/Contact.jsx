import { useEffect, useState } from "react";
import "./Contact.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SEO from "../../components/SEO/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Email je uspešno poslat! Hvala na vašem upitu.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      toast.error(
        "Došlo je do greške prilikom slanja emaila. Molimo pokušajte ponovo kasnije."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Kontaktirajte nas | Epoxique"
        description="Kontaktirajte nas putem forme ili direktno preko telefona, emaila ili društvenih mreža."
        canonical="https://epoxique.com/contact"
      />
      <Breadcrumbs />
      <div className="contact-page">
        <div className="contact-header">
          <h1>Kontakt</h1>
          <p>Molim vas popunite formu ispod. Odgovaramo u roku od 24h.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>Telefon</h3>
              <p>+381 60 123 4567</p>
            </div>
            <div className="info-section">
              <h3>Email</h3>
              <p>info@epoxystolovi.rs</p>
            </div>
            <div className="info-section">
              <h3>Instagram/Facebook</h3>
              <p>epoxique.rs</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ime *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Broj telefona *"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Poruka *"
                required
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Posalji upit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
