"use client";

import {useUser} from "@auth0/nextjs-auth0/client";

export default function UserHeader() {
    const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    return(
        <div className="relative">
            <button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span>
                  User
                </span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </button>
            <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                        {!user && (
                            <a href="api/auth/login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
                                Login
                            </a>
                        )}
                        {user && (
                            <div>
                                <p>{user.name}</p>
                                <a href="/api/auth/logout">
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

