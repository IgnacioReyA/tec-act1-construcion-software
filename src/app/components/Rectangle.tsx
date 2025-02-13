import classNames from 'classnames';

interface RectangleProps {
    color: 'green' | 'blue';
}

export default function Rectangle({ color }: RectangleProps) {
    const colors: { [key in RectangleProps['color']]: string } = {
        green: 'bg-green-500',
        blue: 'bg-blue-500',
    };

    const rectangleClass = classNames('w-64 h-32', colors[color]);

    return <div className={rectangleClass}></div>;
}