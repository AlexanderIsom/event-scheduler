'use client'

import { UserButton } from '@clerk/nextjs';
import { useAuth, useUser } from '@clerk/nextjs';
import styles from './styles.module.scss'
import { Button, ThemeProvider, Typography, createTheme, responsiveFontSizes } from "@mui/material"

export default function Home() {
	const { userId, sessionId } = useAuth();
	const { isSignedIn, user } = useUser();
	let theme = createTheme({
		typography: {
			fontFamily: [
				'"Inter"',
				'sans-serif'
			].join(','),
		}
	})

	theme = responsiveFontSizes(theme);

	return (
		<main className={styles.main}>
			<div className={styles.backgroundFade}>
				<div className={`${styles.titleContainer}`}>
					<div className={`${styles.titleContent} py-16 px-4`}>
						<ThemeProvider theme={theme}>
							<div className={`${styles.titles}`}>
								<Typography variant='h2' fontWeight={600}>Make your events<br />actually <span className={styles.successText}>happen.</span></Typography>
								<Typography className={styles.titleDescription} variant='h6'>Timelineup allows you to plan out events for anyone anywhere in any timezone.</Typography>
								{!isSignedIn && <Button variant="contained" href='/sign-in' >
									Login
								</Button>}
								{isSignedIn && <div>
									Hello, {user?.firstName}
									<div className='bg-blue-600 w-16 h-16 justify-center items-center flex'>
										<UserButton afterSignOutUrl='/' />
									</div>
								</div>}
							</div>
						</ThemeProvider>
					</div>
				</div>
				<svg
					className={styles.svgBlocker}
					preserveAspectRatio="none"
					x="0px"
					y="0px"
					viewBox="0 0 1920 100.1"
				>
					<path
						fill="#ffffff"
						d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
					></path>
				</svg>
			</div>

		</main >
	)
}