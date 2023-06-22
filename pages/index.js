import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

export default function Home() {

  const {user, error, isLoading} = useUser()

  return (
    <div className={styles.container}>
    {
      user ? (
        <div className={styles.loginWrapper}>
        <div className={styles.loginHeader}>
          <div>
            Home
          </div>
          <div className={styles.logoutButtonWrapper}>
            <a href='/api/auth/logout'>Logout</a>
          </div>
        </div>
        <div className={styles.userNameWrapper}>
          <div>
            Welcome {user?.name}
          </div>
        </div>
        </div>
        ) : 
        (
          <div className={styles.loginPage}>
           <a href='/api/auth/login'>Login</a>
          </div>
        )
    }    
  </div>
  )
}
