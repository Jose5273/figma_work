import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 
app.use(express.json()); 

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando' });
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'El mensaje es requerido' });
  }

  setTimeout(() => {
    res.json({ 
      reply: `[Respuesta simulada] He recibido tu mensaje: "${message}". ¡El Frontend y el Backend están conectados correctamente! 🚀` 
    });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Backend de prueba escuchando en http://localhost:${port}`);
});