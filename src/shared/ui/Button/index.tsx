import { clsx } from 'clsx/lite'
import styles from './Button.module.scss'

type Props = React.ComponentProps<'button'>

export const Button = ({ children, className, ...props }: Props) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
