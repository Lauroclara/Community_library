import "dotenv/config";
import jwt from "jsonwebtoken";
import userService from "../service/user.service.js";

export async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({ message: "The token was not informed!" });
    }

    const partsToken = token.split(" ");
    if (partsToken.length !== 2) {
        return res.status(401).send({ message: "Invalid token!" });
    }

    const [schema, tokenJWT] = partsToken;

    if (!/^Bearer$/i.test(schema)) {
        return res.status(401).send({ message: "Malformatted token!" });
    }

    try {
        const decoded = jwt.verify(tokenJWT, process.env.SECRET_JWT);
        const user = await userService.findUserByIdService(decoded.id);

        if (!user) {
            return res.status(404).send({ message: "User not found!" });
        }

        req.user = user;
        next(); // Chame o próximo middleware
    } catch (err) {
        return res.status(401).send({ message: "Invalid token!" });
    }
}
