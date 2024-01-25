import Link from "next/link";

export default function DashboardLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
        return (
            <div>
                <aside id="admin-sidebar" className="fixed top-0 left-o z-40 w-64 h-screen pt-10 transition-transform -translate-x-full sm:translate-x-0">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
                        <ul className="space-y-2">
                            <li>

                            </li>
                            <li className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 grow rounded-lg">
                                <Link href="/admin" className="">Home</Link>
                            </li>
                            <li className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 grow rounded-lg">
                                <Link href="/admin/add-recipe">Add Recipe</Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="pt-10 pl-64">
                    {children}
                </section>
            </div>
        )
}