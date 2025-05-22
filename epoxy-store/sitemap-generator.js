import SitemapGenerator from 'sitemap-generator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = 'https://epoxique.rs';

//Create a sitemap generator

const generator = SitemapGenerator(url, {
    stripQuerystring: false,
    filepath: path.join(__dirname,'public/sitemap.xml'),
    maxEntriesPerFile:50000,
});

generator.on('done', ()=> {
    console.log("Sitemap created!");
});

generator.on('error',(error) => {
    console.error("Error generating sitemap", error);
});

generator.start();
