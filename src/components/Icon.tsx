import React from 'react';

export type IconName =
    | 'caret-down'
    | 'caret-up'
    | 'map-pin'
    | 'clock'
    | 'phone'
    | 'trophy'
    | 'point'
    | 'x'
    | 'loader'
    | 'check'
    | 'alert-circle'
    | 'credit-card'
    | 'users'
    | 'message'
    | 'building'
    | 'delivery'
    | 'wallet'
    | 'discount'
    | 'shield'
    | 'gift'
    ;

interface IconProps {
    name: IconName;
    className?: string;
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const iconComponents: Record<
    IconName,
    React.FC<React.SVGProps<SVGSVGElement>>
> = {
    'caret-down': (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z' />
        </svg>
    ),
    'caret-up': (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z' />
        </svg>
    ),
    'map-pin': (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
            <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
        </svg>
    ),
    clock: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
            <path d='M12 7v5l3 3' />
        </svg>
    ),
    phone: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
        </svg>
    ),
    trophy: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M8 21l8 0' />
            <path d='M12 17l0 4' />
            <path d='M7 4l10 0' />
            <path d='M17 4v8a5 5 0 0 1 -10 0v-8' />
            <path d='M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
            <path d='M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        </svg>
    ),
    point: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z' />
        </svg>
    ),
    x: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M18 6l-12 12' />
            <path d='M6 6l12 12' />
        </svg>
    ),
    loader: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M12 6l0 -3' />
            <path d='M16.25 7.75l2.15 -2.15' />
            <path d='M18 12l3 0' />
            <path d='M16.25 16.25l2.15 2.15' />
            <path d='M12 18l0 3' />
            <path d='M7.75 16.25l-2.15 2.15' />
            <path d='M6 12l-3 0' />
            <path d='M7.75 7.75l-2.15 -2.15' />
        </svg>
    ),
    check: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M5 12l5 5l10 -10' />
        </svg>
    ),
    'alert-circle': (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
            <path d='M12 8v4' />
            <path d='M12 16h.01' />
        </svg>
    ),
    'credit-card': (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
            <path d="M3 10l18 0" />
            <path d="M7 15l.01 0" />
            <path d="M11 15l2 0" />
        </svg>
    ),
    users: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
            <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
            <path d='M16 3.13a4 4 0 0 1 0 7.75' />
            <path d='M21 21v-2a4 4 0 0 0 -3 -3.85' />
        </svg>
    ),
    message: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M8 9h8' />
            <path d='M8 13h6' />
            <path d='M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z' />
        </svg>
    ),
    building: (props) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            {...props}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M3 21l18 0' />
            <path d='M9 8l1 0' />
            <path d='M9 12l1 0' />
            <path d='M9 16l1 0' />
            <path d='M14 8l1 0' />
            <path d='M14 12l1 0' />
            <path d='M14 16l1 0' />
            <path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16' />
        </svg>
    ),
    delivery: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            <path d="M3 9l4 0" />
        </svg>
    ),
    wallet: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
        </svg>
    ),
    discount: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <circle cx="9.5" cy="9.5" r=".5" fill="#ffffff" />
            <circle cx="14.5" cy="14.5" r=".5" fill="#ffffff" />
            <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1" />
        </svg>
    ),
    shield: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
        </svg>
    ),
    gift: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
            <path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
        </svg>
    ),
};

const Icon: React.FC<IconProps> = ({
    name,
    className = '',
    size = 24,
    color = 'currentColor',
    style = {},
    onClick,
}) => {
    const IconComponent = iconComponents[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <IconComponent
            className={`icon icon-${name} ${className}`}
            width={size}
            height={size}
            style={{ color, ...style }}
            onClick={onClick}
        />
    );
};

export default Icon;
