import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {useState} from "react";

export default function Dashboard() {
    const [lastReports] = useState([]);


    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Miembros
                    </h2>

                    <button
                        type="button"
                        className="rounded-lg bg-green-600 px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-green-700 transition-colors"
                    >
                        + Añadir nuevo miembro
                    </button>
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
                                                Usuario
                                            </th>

                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Ultima conexión
                                            </th>

                                            <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Opciones
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-100 bg-white">

                                        {lastReports.length > 0 ? (
                                            lastReports.map((report) => (
                                                <tr key={report.id}>
                                                    <td className="px-6 py-4">
                                                        {report.code}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {report.title}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {report.status}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {report.created_at}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan={4}
                                                    className="px-6 py-12 text-center text-gray-500"
                                                >
                                                    No hay reportes recientes.
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
