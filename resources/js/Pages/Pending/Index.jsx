import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {useState} from "react";

export default function Dashboard() {

    const [pendings] = useState([]);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Pendientes
                    </h2>
                    <div className="flex flex-row gap-2">
                        <button
                            type="button"
                            className="rounded-lg bg-green-600 px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
                        >
                            + Añadir pendiente
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-[#201099] px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
                        >
                            Subir excel
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Panel de control"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {/* Tabla */}
                        <div className="lg:col-span-2">

                            <div
                                className="flex h-[calc(94vh-150px)] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                                <div className="overflow-x-auto">

                                    <table className="min-w-full divide-y divide-gray-200">

                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Código
                                            </th>

                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Título
                                            </th>

                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Urgencia
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Estado
                                            </th>

                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Fecha
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-100 bg-white">

                                        {pendings.length > 0 ? (
                                            pendings.map((pending) => (
                                                <tr key={pending.id}>
                                                    <td className="px-6 py-4">
                                                        {pending.code}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {pending.title}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {pending.urgency}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {pending.status}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {pending.created_at}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="px-6 py-12 text-center text-gray-500"
                                                >
                                                    No hay pendientes recientes.
                                                </td>
                                            </tr>
                                        )}

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
