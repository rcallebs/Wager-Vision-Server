const axios = require("axios");

const apiKey = process.env.API_KEY;

// get a list of in-season sports
const getSports = async (req, res) => {
  try {
    const response = await axios.get("https://api.the-odds-api.com/v4/sports", {
      params: { apiKey },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};

// get upcoming games with odds
const getOdds = async (req, res) => {
  const {
    sportKey = "upcoming",
    regions = "us",
    markets = "h2h",
    oddsFormat = "decimal",
    dateFormat = "iso",
  } = req.query;

  try {
    const response = await axios.get(
      `https://api.the-odds-api.com/v4/sports/${sportKey}/odds`,
      {
        params: {
          apiKey,
          regions,
          markets,
          oddsFormat,
          dateFormat,
        },
      }
    );
    res.json(response.data);
    console.log("Remaining requests", response.headers["x-requests-remaining"]);
    console.log("Used requests", response.headers["x-requests-used"]);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};

module.exports = {
  getSports,
  getOdds,
};