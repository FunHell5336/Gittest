// Import thư viện express
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; // Render tự động cấp port

app.use(cors()); // Cho phép frontend gọi API
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// API ví dụ
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from your backend API!" });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
