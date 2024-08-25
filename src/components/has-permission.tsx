import { getServerSession } from "next-auth";

export default async function HasPermission() {
    const session = await getServerSession();
    if (!session || !session.user || session.user.email !== process.env.EMAIL) {
        return (
            <div>You do not have access to this page</div>
        );
    }
}
