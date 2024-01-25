"use client";

import {useUser} from "@auth0/nextjs-auth0/client";

export default function AdminDashboard() {
    return(
        <div>
            <h1 className="text-4xl font-bold p-4 flex">
                Admin Dashboard
            </h1>
        </div>
    )
}