import { app } from "./app.js";

import { connectDb } from "./data/dataBase.js";

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server Is Working On Port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
