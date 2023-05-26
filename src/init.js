import "dotenv/config";
import "./db.js";
import "./models/video.js";
import "./models/User.js";
import app from "./server.js";

const PORT = 4000;


const handleListening = () => console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
app.listen(4000, handleListening);