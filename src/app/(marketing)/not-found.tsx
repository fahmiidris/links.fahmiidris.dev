import * as React from 'react';

export default function NotFound() {
    return (
        <div className="container flex h-screen flex-col items-center justify-center text-center">
            <p className="text-base font-semibold text-cyan-600">404</p>

            <h1 className="mt-4 text-base/7 text-slate-400">
                <span className="font-semibold text-white">Link not found!</span> Are you sure it is the right link?
            </h1>
        </div>
    );
}
