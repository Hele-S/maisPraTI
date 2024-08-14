const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')


const app = express();
const PORT = 3000
app.use(bodyParser.json());

const SECRET_KEY = "+Prati_2024";

const users = [
    {id: 1, username: 'admin', password: "password"}
];

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({id: user.id, username: user.username}, SECRET_KEY, { expiresIn: '30s'});
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
        req.user =user;
        next();
    })
}

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user});
});

app.listen(PORT, () => {
    console.log(`Server running on http://Localhost:${PORT}`);
});