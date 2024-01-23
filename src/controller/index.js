const homePage = async (req, res) => {
  try {
    const TimeStamp = Date.now();
    const today = new Date().toLocaleString();
    res.status(200).send(`<h1>Welcome To My Time Stamp = ${TimeStamp}</h1>
        <h3>End point: timestamp</h3>
        `);
  } catch (error) {
    res.status(500).send(`<h2>Internal server error</h2>`);
  }
};

export default { homePage };
