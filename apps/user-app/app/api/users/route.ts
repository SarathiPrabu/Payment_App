import {NextResponse} from "next/server";
import { prisma } from '@repo/db';


export const GET = async () => {
    const users = await prisma.user.findMany();

    // await prisma.user.create({
    //     data: {
    //         username: "username_3",
    //         password: "password"
    //     }
    // })
    return NextResponse.json(users);
}