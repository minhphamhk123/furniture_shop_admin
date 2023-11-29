'use server'

export default function handle(req, res) {
  if (req.method === 'GET') {
    // Xử lý logic cho phương thức GET
    res.json({ method: 'GET' });
  } else if (req.method === 'POST') {
    // Xử lý logic cho phương thức POST
    res.json({ method: 'POST' });
  } else {
    // Xử lý logic cho các phương thức khác nếu cần thiết
    res.status(405).end(); // Method Not Allowed
  }
}

