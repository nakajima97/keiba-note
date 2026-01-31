import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <div className="max-w-2xl mx-auto p-8">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            競馬ノート
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Laravel + Inertia.js + React のセットアップが完了しました！
                        </p>
                        <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded">
                            <p className="font-semibold">✓ 環境構築完了</p>
                            <ul className="mt-2 ml-4 list-disc">
                                <li>Laravel 12 + Sail</li>
                                <li>Inertia.js v2</li>
                                <li>React 18</li>
                                <li>Tailwind CSS</li>
                                <li>Vite</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
