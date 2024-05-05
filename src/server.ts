// import { env } from "process";
import app from "./app";
import { env } from "process";
import dotenv from 'dotenv';

dotenv.config();

const port = env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
