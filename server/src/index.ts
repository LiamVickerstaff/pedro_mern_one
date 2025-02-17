import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://liamvickerstaff050:5U32YxOm5aKNs6pI@cluster0.2slef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.log("FAILED TO CONNECT TO MONDOGB", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
