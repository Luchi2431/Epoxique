-- Insert Categories
INSERT INTO categories (name, description, featured, image_url) VALUES 
('Trpezarijski Stolovi', 'Elegantni trpezarijski stolovi za vaš dom', true, '/images/categories/dining-tables.jpg'),
('Klub Stolovi', 'Moderni klub stolovi za dnevnu sobu', true, '/images/categories/coffee-tables.jpg'),
('Konzolni Stolovi', 'Stilski konzolni stolovi', true, '/images/categories/console-tables.jpg');

-- Insert Products
INSERT INTO products (name, description, price, stock, category_id, image_url, dimensions) VALUES 
('River Table', 'Elegantni epoxy river sto od hrasta', 1200.00, 1, 1, '/images/products/river-table.jpg', '{"length": 200, "width": 90, "height": 75}'),
('Ocean Table', 'Klub sto sa plavim epoxy detaljima', 800.00, 1, 2, '/images/products/ocean-table.jpg', '{"length": 120, "width": 60, "height": 45}'),
('Console Design', 'Konzolni sto sa epoxy elementima', 600.00, 1, 3, '/images/products/console-table.jpg', '{"length": 100, "width": 35, "height": 85}');

-- Insert Product Images
INSERT INTO product_images (product_id, image_url, sort_order) VALUES 
(1, '/images/products/epoxySto1.jpg', 1),
(1, '/images/products/epoxySto2.jpg', 2),
(1, '/images/products/epoxySto3.jpg', 3),
(2, '/images/products/epoxySto2.jpg', 1),
(3, '/images/products/epoxySto1.jpg', 1);