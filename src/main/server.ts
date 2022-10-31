import './config/module-alias';
import app from "@/main/config/app";
import "dotenv/config";

app.listen(process.env.PORT);