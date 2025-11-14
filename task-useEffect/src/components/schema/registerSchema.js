import * as z from "zod";

export const registerSchema = z.object({
    firstName : z.string().min(2, " first name must be at least 2 characters "),
    LastName : z.string().min(3, " last name must be at least 3 characters "),
    email : z.email(),
    password : z.string().min(6,"password must be 6 characters"),
    confirmPassword : z.string().min(6 ,"password must be 6 characters") ,
}).refine(data => data.password === data.confirmPassword ,{
    message: "password and confirm password must be same",
    path : ["confirmPassword"],
});
