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
<<<<<<< HEAD
(3, '/images/products/epoxySto1.jpg', 1);


INSERT INTO products(name,description,price,stock,category_id,image_url,dimensions,status) VALUES
('Epoxy River','Unesite prirodnu eleganciju i moderan dizajn u svoj dom sa ovim unikatnim epoxy stolom, ručno izrađenim u našoj radionici od pažljivo biranog masivnog drveta i crne epoksidne smole.\n🪵 Prirodna lepota masivnog drveta\nPloča stola izrađena je od pažljivo sušenih i obrađenih dasaka sa prirodnim ivicama (live edge) koje su očuvane i naglašene – svaka je drugačija, baš kao i drvo iz kojeg potiče. Tokom obrade ostavili smo autentične godove, čvorove i teksturu, kako bismo sačuvali duh prirode u svakom komadu.
\n🌊 Crna epoxy "reka" – elegantan kontrast\nSredišnji deo stola ispunjen je visokokvalitetnom, pigmentisanom crnom epoksidnom smolom u mat finišu. Oblik "reke" pažljivo je izliven da prati prirodnu ivicu drveta, stvarajući moćan vizuelni kontrast između topline drveta i tamne dubine smole.
🧱 Robusne i moderne metalne noge\nSto stoji na čvrstim metalnim nogama u mat crnoj boji, koje su oblikovane u dinamičnom geometrijskom obliku za dodatnu stabilnost i sofisticiran izgled. Ovaj detalj savršeno spaja rustični i industrijski stil.',1000.00,0,1,'/epoxyReddit1.webp','{"length": 210, "width": 100, "height": 76}','gallery');
=======
(3, '/images/products/epoxySto1.jpg', 1);
>>>>>>> 01607500b83e5b8085078252fd43589b52fa099e
