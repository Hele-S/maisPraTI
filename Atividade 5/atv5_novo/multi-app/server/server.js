const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const PORT = 3000

app.use(bodyParser.json());

// Middleware para desabilitar cache
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Pragma', 'no-cache'); // Para compatibilidade com HTTP 1.0
    res.setHeader('Expires', '0'); // Para compatibilidade com HTTP 1.0
    next();
});

app.use(cors({
    origin: 'http://localhost:5173', // Permite acesso do frontend em localhost:5173
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}))

const SECRET_KEY = "+Prati_2024";

const users = [
    {id: 1, username: 'admin', password: "password"}
];

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({id: user.id, username: user.username}, SECRET_KEY, { expiresIn: '300s'});
        res.json({message: 'Login successful', token});
    }   else {
        res.status(401).json({message: 'Invalid username or password'});
    }
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(403);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

app.get('/check', authenticateToken, (req, res) => {
    res.json(true);
    
});

app.listen(PORT, () => {
    console.log(`Server running on http://Localhost:${PORT}`);
});