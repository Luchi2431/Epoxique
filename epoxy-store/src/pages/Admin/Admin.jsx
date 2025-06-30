import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useState } from "react";
import "./Admin.css";
import { toast } from "react-toastify";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image_url: "",
    dimension_length: "",
    dimension_width: "",
    dimension_height: "",
    status: "available",
  });
  const [id, setId] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [message, setMessage] = useState("");

  // Build dimensions object for backend JSONB field
  const buildDimensions = () => {
    const { dimension_length, dimension_width, dimension_height } = form;
    // Only include if at least one is filled
    if (
      dimension_length === "" &&
      dimension_width === "" &&
      dimension_height === ""
    ) {
      return null;
    }
    return {
      length:
        dimension_length === "" || isNaN(Number(dimension_length))
          ? null
          : Number(dimension_length),
      width:
        dimension_width === "" || isNaN(Number(dimension_width))
          ? null
          : Number(dimension_width),
      height:
        dimension_height === "" || isNaN(Number(dimension_height))
          ? null
          : Number(dimension_height),
    };
  };

  // Clean form for backend
  const cleanForm = {
    name: form.name,
    description: form.description,
    price: form.price === "" ? null : Number(form.price),
    stock: form.stock === "" ? null : Number(form.stock),
    category_id: form.category_id === "" ? null : Number(form.category_id),
    image_url: form.image_url,
    dimensions: buildDimensions(),
    status: form.status,
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/create-product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-admin-key": adminKey,
          },
          body: JSON.stringify(cleanForm),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Greska pri kreiranju proizvoda");
      }
      toast.success("Proizvod uspesno kreiran!");
      setMessage("Proizvod uspesno kreiran!");
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        image_url: "",
        dimension_length: "",
        dimension_width: "",
        dimension_height: "",
        status: "available",
      });
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  const buildUpdateForm = () => {
    const updateObj = {};
    if (form.name !== "") updateObj.name = form.name;
    if (form.description !== "") updateObj.description = form.description;
    if (form.price !== "") updateObj.price = Number(form.price);
    if (form.stock !== "") updateObj.stock = Number(form.stock);
    if (form.category_id !== "")
      updateObj.category_id = Number(form.category_id);
    if (form.image_url !== "") updateObj.image_url = form.image_url;
    // Dimenzije
    if (
      form.dimension_length !== "" ||
      form.dimension_width !== "" ||
      form.dimension_height !== ""
    ) {
      updateObj.dimensions = {
        length:
          form.dimension_length !== "" ? Number(form.dimension_length) : null,
        width:
          form.dimension_width !== "" ? Number(form.dimension_width) : null,
        height:
          form.dimension_height !== "" ? Number(form.dimension_height) : null,
      };
    }
    if (form.status !== "") updateObj.status = form.status;
    return updateObj;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    const updateForm = buildUpdateForm();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/update-product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-admin-key": adminKey,
          },
          body: JSON.stringify(updateForm),
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Greška pri ažuriranju proizvoda");
      }
      toast.success("Proizvod uspešno ažuriran!");
      setId("");
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
        image_url: "",
        dimension_length: "",
        dimension_width: "",
        dimension_height: "",
        status: "available",
      });
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/delete-product/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-admin-key": adminKey,
          },
        }
      );
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || err.message);
      }
      setMessage("Proizvod uspesno obrisan");
      toast.success("Proizvod uspesno obrisan!");
      setId("");
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Breadcrumbs />
      <div className="container">
        <h1>Admin panel</h1>
        <div className="create-product">
          <h2>Kreiraj proizvod:</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Naziv"
              required
            />
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Opis"
              required
            />
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Cena"
              type="number"
              required
            />
            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stanje"
              type="number"
              required
            />
            <input
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              placeholder="ID kategorije"
              required
            />
            <input
              name="image_url"
              value={form.image_url}
              onChange={handleChange}
              placeholder="URL Slike"
              required
            />
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                name="dimension_length"
                value={form.dimension_length}
                onChange={handleChange}
                placeholder="Duzina (cm)"
                type="number"
                min="0"
              />
              <input
                name="dimension_width"
                value={form.dimension_width}
                onChange={handleChange}
                placeholder="Sirina (cm)"
                type="number"
                min="0"
              />
              <input
                name="dimension_height"
                value={form.dimension_height}
                onChange={handleChange}
                placeholder="Visina (cm)"
                type="number"
                min="0"
              />
            </div>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="available">Dostupno</option>
              <option value="gallery">Galerija</option>
              <option value="sold">Prodato</option>
            </select>
            <button type="submit">Kreiraj proizvod</button>
            <button type="button" onClick={handleUpdate}>
              Update proizvod
            </button>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID proizvoda za izmenu"
              required
            />
          </form>
          {message && <p>{message}</p>}
        </div>
        {/* DELETEEEE FUNCTIONALITY */}
        <div className="delete-product">
          <h2>Unesite id proizvoda koji zelite da obrisete:</h2>
          <form onSubmit={handleDelete}>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
              required
            />
            <button type="submit">Obrisi proizvod</button>
            <h2>Unesite Admin sifru</h2>
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Admin kljuc"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
