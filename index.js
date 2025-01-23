import express from "express";
import userRouters from './src/routes/user.routes.js'
const app = express();

const port = process.env.PORT || 3000


app.use(express.json());
app.use(userRouters)


app.get("/users", (req, res) =>{
    res.send({message: "Essa são os users", users})
}
)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
