const express = require('express');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// test api
app.get('/test', (req, res) => {
   try{
         res.status(200).json({message: 'API is working'});
   } catch (error) {
        res.status(500).json({message: error.message});
   }
});

// get all users
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// get user by id
app.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// create user
app.post('/users', async (req, res) => {
    const {name, email} = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// update user
app.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete user
app.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});