require("dotenv").config();
require("./config/db.connection.js");
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const apiKey = process.env.API_KEY;

const betRouter = require("./routes/bets");
const authRouter = require("./routes/AuthRouter.js");
const apiRouter = require("./routes/theOddsAPI.js");
const betHistoryRouter = require("./routes/betHistory.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/bets", betRouter);
app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use("/history", betHistoryRouter);

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
