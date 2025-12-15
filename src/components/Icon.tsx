import React from 'react';

// Типы иконок (добавляйте новые по мере добавления иконок)
export type IconName = 'caret-down' | 'caret-up';

interface IconProps {
	name: IconName;
	className?: string;
	size?: number;
	color?: string;
	style?: React.CSSProperties;
	onClick?: () => void;
}

// Импорты для всех иконок
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
