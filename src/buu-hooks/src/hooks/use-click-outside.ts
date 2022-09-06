import React, { useEffect } from "react";

const default_handlers = ['mousedown', 'touchstart']

export function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    handler: () => void,
    handlers = default_handlers
) {
    const isBrowser = typeof document !== 'undefined'

    useEffect(() => {
        const listener = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }

        isBrowser && handlers.forEach(fn => document.addEventListener(fn, listener))

        return () => {
            isBrowser && handlers.forEach(fn => document.removeEventListener(fn, listener))
        }
    }, [ref, handler])
}