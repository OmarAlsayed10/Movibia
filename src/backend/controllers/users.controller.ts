import { ExpressMiddleware, User } from "../types/interfaces";
import { loadUsers } from "../utils/fileHelper";

export const getUser: ExpressMiddleware = async (req, res, next) => {
    try {
        const users = await loadUsers();
        const email = req.query.email;

        if (!email) {
            res.status(400).json({ success: false, message: "Email is required" });
            return;
        }

        const user = users.find((u: User) => u.email === email);

        if (!user) {
            res.status(404).json({ success: false, message: "User doesn't exist" });
            return;
        }

        const { password, ...userWithoutPassword } = user;

        res.status(200).json({ success: true, data: userWithoutPassword });
    } catch (error) {
        next(error);
    }
};


