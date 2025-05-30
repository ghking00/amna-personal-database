// api/sim.js
const axios = require('axios');

export default async function handler(req, res) {
  const { num } = req.query;
  if (!num) return res.status(400).json({ error: 'Missing number' });

  try {
    const response = await axios.get(`https://famofc.kesug.com/apis/simdataapi.php?num=${num}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'API call failed' });
  }
}