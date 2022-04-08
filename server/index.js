import app from "./app";
import { PORT } from "./config/config";
import { db as runDb } from "./db";

runDb.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log("database connected and server running on port", PORT)
  );
});
