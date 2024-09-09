import express from "express";

const router = express.Router();

const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 20.99 },
    { id: 3, name: "Product 3", price: 30.99 }
]

// GET /products

router.get('/', (req, res) => {
    res.json(products);
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

export default router;