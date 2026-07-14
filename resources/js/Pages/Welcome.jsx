import {Head, Link} from '@inertiajs/react';

export default function Welcome({auth}) {

    if (auth.user) {
        window.location.href = '/dashboard';
        return null;
    }

    return (
        <>
            <Head title="Bienvenido a Toolweb"/>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">

                    <h1 className="text-3xl font-bold mb-4">
                        Bienvenido a <span className="font-bold text-blue-800">ToolWeb</span>
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Inicia sesión o crea una cuenta
                    </p>

                    <div className="flex flex-col gap-4 justify-center">

                        <Link href="/login"
                              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                            Login
                        </Link>

                        <Link href="/register"
                              className="px-6 py-3 border border-black rounded-lg hover:bg-gray-100 transition">
                            Register
                        </Link>

                    </div>

                </div>
            </div>
        </>
    );
}
