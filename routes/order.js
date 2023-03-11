import express from "express"
import { isAuthenticated,authorizeAdmin } from "../middlewares/auth.js";
import { getMyOrders, placeOrder ,getOrderDetails,getAdminOrders,processOrder} from "../controllers/orderController.js";

const router=express.Router();

router.post("/createorder",placeOrder)

router.get("/myorders",isAuthenticated,getMyOrders)

router.get("/order/:id", isAuthenticated, getOrderDetails);

router.get("/order/:id", isAuthenticated, getOrderDetails);

// Add Admin Middleware
router.get("/admin/orders", isAuthenticated, authorizeAdmin, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, authorizeAdmin, processOrder);

export default router;