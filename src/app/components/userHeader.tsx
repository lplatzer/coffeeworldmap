"use client";

import {useUser} from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import {Popover, Transition} from "@headlessui/react";
import {Fragment} from "react";

export default function UserHeader() {
    const { user, error, isLoading } = useUser();

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;

    return(
        <Popover className="relative">
            <Popover.Button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span>
                  User
                </span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        {!user && (
                            <a href="api/auth/login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
                                Login
                            </a>
                        )}
                        {user && (
                            <div className="flex flex-col items-center">
                                <p>{user.name}</p>
                                <Link href="/admin">Admin Dashboard</Link>
                                <a href="/api/auth/logout">
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

