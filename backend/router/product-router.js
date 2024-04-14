import express from "express";
import { verfyToken } from "../config/token-manager.js";
import { getAllProduct, getHeroSectionScroll, getProduct, getheroSectionScrollOffer, getheroSectionScrollPremi, heroSectionScroll, heroSectionScrollOffer, heroSectionScrollPremi, searchProducts, uploadProduct } from "../controller/product-controller.js";
const productRoute = express.Router();
import multer from "multer";
import path from "path";

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

productRoute.post('/hero-scroll',upload.fields([{ name: 'image', maxCount: 1 }, ]),verfyToken,heroSectionScroll);
productRoute.get('/hero-scroll',getHeroSectionScroll);

productRoute.post('/hero-prem',upload.fields([{ name: 'image', maxCount: 1 }, ]),verfyToken,heroSectionScrollPremi);
productRoute.get('/hero-prem',getheroSectionScrollPremi);

productRoute.post('/hero-offer',upload.fields([{ name: 'image', maxCount: 1 }, ]),verfyToken,heroSectionScrollOffer);
productRoute.get('/hero-offer',getheroSectionScrollOffer);

// products..
productRoute.post('/upload',upload.array('products',12),verfyToken,uploadProduct);
productRoute.get('/getAll',getAllProduct);

productRoute.get('/:id',verfyToken,getProduct);

productRoute.post('/search',verfyToken,searchProducts);

export default productRoute;